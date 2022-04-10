import 'cypress-file-upload';
import path from 'path';

const deleteDownloadsFolder = () => {
  const downloadsFolder = Cypress.config('downloadsFolder')
  cy.task('deleteFolder', downloadsFolder)
}

beforeEach(deleteDownloadsFolder)

describe('Not logged in', () => {
    it('Download file', () => {
      cy.visit('http://localhost:5000')
      const fixtureFile = 'FX.xml';
      cy.get('#inputfile').attachFile(fixtureFile);
      const downloadsFolder = Cypress.config('downloadsFolder')
      const downloadedFilename = path.join(downloadsFolder, 'FX.xml.epp')
      cy.verifyDownload('FX.xml.epp');
   
      cy.readFile(downloadedFilename, 'binary', { timeout: 15000 })
      .should(buffer => expect(buffer.length).to.be.eq(13643));
      expect(true).to.equal(true)
    })
  })
  