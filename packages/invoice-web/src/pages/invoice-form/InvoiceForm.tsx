import React from "react";
import {
    Box, Card, CardContent, CardHeader, Container, Divider, Grid, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography,
   } from "@mui/material";
import { NavLink } from "react-router-dom";
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from "@mui/lab/DatePicker";
import type { FakturaType } from "@devorgpl/ksef-model-lib/xmlns/crd.gov.pl/wzor/2021/11/29/11089";
import { InvoiceService } from "../../services/InvoiceService";

const BodyContent = styled(Box)(
({ theme }) => `
        padding: ${theme.spacing(4, 0)};
`,
);

const invoice: FakturaType = InvoiceService.emptyInvoice();

export default function InvoiceForm() {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
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
                    title="Invoice form"
                  />
                  <Divider />
                  <CardContent>
                    <Grid container>
                      <Grid item lg={4} xs={6} textAlign="left">
                        Data wystawienia:
                        <DatePicker
                          label="Date desktop"
                          inputFormat="MM/dd/yyyy"
                          value={invoice.Naglowek.DataWytworzeniaFa}
                          onChange={handleChange}
                          renderInput={(params) => <TextField {...params} />}
                        />
                        {' '}

                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </BodyContent>
      </LocalizationProvider>
    );
}
