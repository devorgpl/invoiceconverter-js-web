import React, { useRef, useState, useEffect } from 'react';
import { ComarchXmlParser } from '@devorgpl/invoice-lib/bin/src/parsers/ComarchXmlParser';
import { EppGenerator } from '@devorgpl/invoice-lib/bin/src/generators/EppGenerator';
import { encode } from 'iconv-lite';
import './Convert.css';

function Convert(): React.ReactElement {
    const fileInputRef = useRef<HTMLInputElement>();
    const uploadRef = useRef<HTMLDivElement>();
    const uploadModalRef = useRef<HTMLDivElement>();
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [validFiles, setValidFiles] = useState([]);

    useEffect(() => {
        const filteredArr = selectedFiles.reduce((acc, current) => {
            const x = acc.find((item) => item.name === current.name);
            if (!x) {
            return acc.concat([current]);
            }
            return acc;
        }, []);
        setValidFiles([...filteredArr]);
    }, [selectedFiles]);

    const preventDefault = (e) => {
        e.preventDefault();
        // e.stopPropagation();
    };

    const dragOver = (e) => {
        preventDefault(e);
    };

    const dragEnter = (e) => {
        preventDefault(e);
    };

    const dragLeave = (e) => {
        preventDefault(e);
    };

    const uploadFiles = async () => {
        uploadModalRef.current.style.display = 'block';
        uploadRef.current.innerHTML = 'File(s) Uploading...';
        validFiles.forEach((el) => {
            const formData = new FormData();
            formData.append('image', el);
            formData.append('key', '');
        });
    };

    const downloadTxtFile = (name: string, data: Buffer) => {
        const element = document.createElement('a');
        const file = new Blob([data], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = name;
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
        if (name === 'test') {
            uploadFiles();
        }
    };

    const handleFiles = (files: FileList) => {
        Array.from(files).forEach((element) => {
            setSelectedFiles((prevArray) => [...prevArray, element]);
            const file: File = files[0];
            file.text().then((data) => {
                const parser = new ComarchXmlParser();
                const parsed = parser.parse(data);
                const generator = new EppGenerator();
                const result = generator.generate(parsed);
                const buffer:Buffer = encode(result, 'win1250');
                downloadTxtFile(`${file.name}.epp`, buffer);
            });
        });
    };

    const fileDrop = (e) => {
        preventDefault(e);
        const { files } = e.dataTransfer;
        if (files.length) {
            handleFiles(files);
        }
    };

    const filesSelected = () => {
        if (fileInputRef.current.files.length) {
            handleFiles(fileInputRef.current.files);
        }
    };

    const fileInputClicked = () => {
        fileInputRef.current.click();
    };

    return (
      <>
        <div className="container">
          <div
            role="presentation"
            className="drop-container"
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={fileDrop}
            onClick={fileInputClicked}
          >
            <div className="drop-message">
              <div className="upload-icon" />
              Drag &amp; Drop files here or click to select file(s)
            </div>
            <form>
              <label htmlFor="inputfile">
                Input file
                <input
                  id="inputfile"
                  ref={fileInputRef}
                  className="file-input"
                  type="file"
                  multiple
                  onChange={filesSelected}
                />
              </label>
            </form>
          </div>
        </div>
      </>
    );
}

export default Convert;
