import React from "react";
import { Card } from "@mui/material";
import type { Invoice } from "../../services/InvoiceService";
import { useParams } from "react-router-dom";

interface InvoicePreviewProps {
    invoice: Invoice,
    id: string,
    match: any
}


export default function InvoicePreviewPage(propss: InvoicePreviewProps, some: any): React.ReactElement {
    const { invoice } = propss;
    let { id } = useParams<"id">();
    //const theme = useTheme();
    return (
      <Card >Preview inv: {invoice?.meta?.number} id: {id} all: {JSON.stringify(propss.match, null, 2)}</Card>
    )
}
