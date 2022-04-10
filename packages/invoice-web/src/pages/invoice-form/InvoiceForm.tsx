import React, { useCallback } from "react";
import {
    Box, Card, CardContent, CardHeader, Container, Divider, Grid, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
   } from "@mui/material";
import { TextField, DatePicker } from "mui-rff";
import { NavLink } from "react-router-dom";
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import type { FakturaType } from "@devorgpl/ksef-model-lib/xmlns/crd.gov.pl/wzor/2021/11/29/11089";
import { InvoiceService } from "../../services/InvoiceService";
import { Form } from "react-final-form";

const BodyContent = styled(Box)(
({ theme }) => `
        padding: ${theme.spacing(4, 0)};
`,
);

function InvoiceFormInternal() {
  const date = new Date();
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
      <DatePicker
                          label="Date desktop"
                          name="createDate"
                          inputFormat="MM/dd/yyyy"
                          value={date}
                          renderInput={(params) => 
                            <TextField name="createDateInt" label="Data wytworzenia" />
                          }
                        />
      </Grid>
      <Grid item xs={4}>
        <TextField name="vatNumber" label="NIP" variant="standard" />
      </Grid>
      <Grid item xs={2}>
        <TextField name="postalCode" label="Postal code" variant="standard" />
      </Grid>
      <Grid item xs={4}>
        <TextField name="city" label="City" variant="standard" />
      </Grid>
      <Grid item xs={6}>
        <TextField name="street" label="Street" variant="standard" />
      </Grid>
    </Grid>
  );
}

function validate(values) {
  const errors: {vatNumber?: string} = {};
  return errors;
}

function InvoiceFormWrapper({onSubmit, onCancel}:{onSubmit, onCancel}) {
  const saveAction = useCallback((submitting, pristine) => (
    <>
    <button type="submit" disabled={submitting || pristine}>
      Save
    </button>
    <button type="button" onClick={onCancel}>
      Cancel
    </button>
    </>
    ), []);
    return (
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={(props) => {
          const { submitting, pristine, handleSubmit } = props;
          return (
            <form onSubmit={handleSubmit}>
              <Card>
                <CardHeader
                  action={saveAction(submitting, pristine)}
                  title="Form"
                />
                <Divider />
                <CardContent>
                  <InvoiceFormInternal />
                </CardContent>
              </Card>
            </form>
          );
}}
      />
    );
}

const invoice: FakturaType = InvoiceService.emptyInvoice();

export default function InvoiceForm() {

  const cancelForm = useCallback(()=> {
    console.log("cancel");
  }, []);

  const saveForm = useCallback((data)=> {
    console.log(data);
  }, []);
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
                    <InvoiceFormWrapper onCancel={cancelForm} onSubmit={saveForm} />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </BodyContent>
      </LocalizationProvider>
    );
}
