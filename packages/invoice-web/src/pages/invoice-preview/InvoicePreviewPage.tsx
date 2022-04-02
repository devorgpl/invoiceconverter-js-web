import React, { useEffect, useState } from "react";
import {
 Box, Card, CardContent, CardHeader, Container, Divider, Grid, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from "@mui/material";
import { NavLink, useParams } from "react-router-dom";
import type { FakturaTypeFaTypeFaWierszeTypeFaWierszType, FakturaTypePodmiot1Type, FakturaTypePodmiot2Type } from "@devorgpl/ksef-model-lib/xmlns/crd.gov.pl/wzor/2021/11/29/11089";
import { Invoice, InvoiceService } from "../../services/InvoiceService";
import { useAuth } from "../../libs/firebase";

const BodyContent = styled(Box)(
    ({ theme }) => `
          padding: ${theme.spacing(4, 0)};
  `,
  );

interface InvoicePreviewProps {
    invoice: Invoice,
    id: string,
}

interface InvoiceItemRowProps {
    row: FakturaTypeFaTypeFaWierszeTypeFaWierszType
}

function InvoiceItemRow(props: InvoiceItemRowProps) {
    const { row } = props;
    return (
      <TableRow>
        <TableCell style={{ maxWidth: '100px' }}>
          <Typography
            variant="body1"
            fontWeight="bold"
            color="text.primary"
            gutterBottom
            noWrap
          >
            {row.NrWierszaFa}
          </Typography>
        </TableCell>
        <TableCell style={{ maxWidth: '100px' }}>
          <Typography
            variant="body1"
            fontWeight="bold"
            color="text.primary"
            gutterBottom
            noWrap
          >
            {row.CN}
          </Typography>
        </TableCell>
        <TableCell style={{ maxWidth: '100px' }}>
          <Typography
            variant="body1"
            fontWeight="bold"
            color="text.primary"
            gutterBottom
            noWrap
          >
            {row.P_9A}
          </Typography>
        </TableCell>
        <TableCell style={{ maxWidth: '100px' }}>
          <Typography
            variant="body1"
            fontWeight="bold"
            color="text.primary"
            gutterBottom
            noWrap
          >
            {row.P_8B}
          </Typography>
        </TableCell>
        <TableCell style={{ maxWidth: '100px' }}>
          <Typography
            variant="body1"
            fontWeight="bold"
            color="text.primary"
            gutterBottom
            noWrap
          >
            {row.P_8A}
          </Typography>
        </TableCell>
        <TableCell style={{ maxWidth: '100px' }}>
          <Typography
            variant="body1"
            fontWeight="bold"
            color="text.primary"
            gutterBottom
            noWrap
          >
            {row.P_11}
          </Typography>
        </TableCell>
        <TableCell style={{ maxWidth: '100px' }}>
          <Typography
            variant="body1"
            fontWeight="bold"
            color="text.primary"
            gutterBottom
            noWrap
          >
            {row.P_12}
          </Typography>
        </TableCell>
        <TableCell style={{ maxWidth: '100px' }}>
          <Typography
            variant="body1"
            fontWeight="bold"
            color="text.primary"
            gutterBottom
            noWrap
          >
            {(Number(row.P_11A) - Number(row.P_11)).toFixed(2)}
          </Typography>
        </TableCell>
        <TableCell style={{ maxWidth: '100px' }}>
          <Typography
            variant="body1"
            fontWeight="bold"
            color="text.primary"
            gutterBottom
            noWrap
          >
            {Number(row.P_11A).toFixed(2)}
          </Typography>
        </TableCell>
      </TableRow>
    );
}

interface SubjectInfoProps {
    subject: FakturaTypePodmiot1Type | FakturaTypePodmiot2Type,
    title: string
}
function SubjectInfo(props: SubjectInfoProps) {
    const { subject } = props;
    return (
      <Box>
        <Typography
          variant="body1"
          fontWeight="bold"
          color="text.primary"
          gutterBottom
          noWrap
        >
          {props.title}
          :
        </Typography>
        <Typography
          variant="body1"
          fontWeight="bold"
          color="text.primary"
          gutterBottom
          noWrap
        >
          {subject?.DaneIdentyfikacyjne.PelnaNazwa}
        </Typography>
        <Typography
          variant="body1"
          fontWeight="bold"
          color="text.primary"
          gutterBottom
          noWrap
        >
          {subject?.Adres.AdresPol.Ulica}
          {' '}
          {subject?.Adres.AdresPol.NrDomu}
        </Typography>
        <Typography
          variant="body1"
          fontWeight="bold"
          color="text.primary"
          gutterBottom
          noWrap
        >
          {subject?.Adres.AdresPol.KodPocztowy}
          {' '}
          {subject?.Adres.AdresPol.Miejscowosc}
        </Typography>
        <Typography
          variant="body1"
          fontWeight="bold"
          color="text.primary"
          gutterBottom
          noWrap
        >
          NIP:
          {subject?.DaneIdentyfikacyjne.NIP}
        </Typography>
      </Box>
    );
}

export default function InvoicePreviewPage(propss: InvoicePreviewProps): React.ReactElement {
    const { invoice } = propss;
    const { id } = useParams<"id">();
    const authx = useAuth();
    const defaultInvoice: Invoice = {
        data: null,
        meta: null,
        raw: '',
    };
    const [invoiceData, setInvoiceData] = useState(defaultInvoice);
    useEffect(() => {
        let mounted = true;
        if (mounted) {
        InvoiceService.getOne(authx, id)
        .then((data) => setInvoiceData(data));
        }
        return () => {
            mounted = false;
        };
      }, [id, authx]);
    const wiersze = [];
    if (invoiceData?.data) {
        invoiceData.data.Fa.FaWiersze.FaWiersz.forEach((w) => {
            const key = `item_${w.NrWierszaFa}`;
            wiersze.push(<InvoiceItemRow key={key} row={w} />);
        });
    }
    // const theme = useTheme();
    return (
      <BodyContent>
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12}>
              <Card>
                <CardHeader
                  action={(
                    <Box width={150}>
                      <NavLink to="/app/invoices">Back to invoices</NavLink>
                    </Box>
          )}
                  title="Invoice details"
                />
                <Divider />
                <CardContent>
                  <Grid container>
                    <Grid item lg={6} xs={6} textAlign="left">
                      Faktura:
                      {' '}
                      {invoiceData?.meta?.number}
                    </Grid>
                    <Grid item lg={6} xs={6} textAlign="right">
                      <Grid container>
                        <Grid item lg={8} xs={8} textAlign="right">
                          Data wystawienia
                        </Grid>
                        <Grid item lg={4} xs={4} textAlign="right">
                          {invoiceData?.data?.Naglowek.DataWytworzeniaFa.toString().substring(0, 10)}
                        </Grid>
                        <Grid item lg={8} xs={8} textAlign="right">
                          Data sprzedaży
                        </Grid>
                        <Grid item lg={4} xs={4} textAlign="right">
                          {invoiceData?.data?.Naglowek.DataWytworzeniaFa.toString().substring(0, 10)}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid item lg={6} xs={6} textAlign="left">
                      <SubjectInfo title="Sprzedawca" subject={invoiceData?.data?.Podmiot1} />
                    </Grid>
                    <Grid item lg={6} xs={6} textAlign="right">
                      <SubjectInfo title="Nabywca" subject={invoiceData?.data?.Podmiot2} />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <TableContainer>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>L.p.</TableCell>
                            <TableCell>Nazwa</TableCell>
                            <TableCell>Cena</TableCell>
                            <TableCell>Ilość</TableCell>
                            <TableCell>J.M.</TableCell>
                            <TableCell>Kwota netto</TableCell>
                            <TableCell>Stawka VAT</TableCell>
                            <TableCell>VAT</TableCell>
                            <TableCell>Kwota brutto</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {wiersze}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                  <Grid container>
                    {/* Summary */}
                  </Grid>
                  {/* Preview inv: {invoice?.meta?.number} id: {id} all: {JSON.stringify(propss.match, null, 2)} */}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </BodyContent>

    );
}
