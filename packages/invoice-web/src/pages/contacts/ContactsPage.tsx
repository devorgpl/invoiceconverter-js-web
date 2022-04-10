import React, {
 FormEventHandler, useCallback, useEffect, useState,
} from "react";
import {
 Box, Button, Card, CardContent, CardHeader, Checkbox, Collapse, Container, Divider, Grid, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from "@mui/material";
import { TextField } from "mui-rff";
import { Form, Field } from "react-final-form";
import { Helmet } from "react-helmet-async";
import { useAuth } from "../../libs/firebase";
import PageTitleWrapper from "../../components/PageTitleWrapper";
import Footer from "../../components/Footer";
import { Contact, ContactsService } from "../../services/ContactsService";

const BodyContent = styled(Box)(
    ({ theme }) => `
          padding: ${theme.spacing(4, 0)};
  `,
  );

function ContactTableRow({ row }:{row: Contact}) {
    return (
      <TableRow
        hover
      >
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
          />
        </TableCell>
        <TableCell style={{ maxWidth: '100px' }}>
          <Typography
            variant="body1"
            fontWeight="bold"
            color="text.primary"
            gutterBottom
            noWrap
          >
            {row.companyName}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap />
        </TableCell>
        <TableCell style={{ maxWidth: '100px' }}>
          <Typography
            variant="body1"
            fontWeight="bold"
            color="text.primary"
            gutterBottom
            noWrap
          >
            {row.vatNumber}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap />
        </TableCell>
      </TableRow>
    );
}

function ContactFormInternal() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <TextField name="companyName" label="Company name" variant="standard" />
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

const saveAction = (submitting, pristine) => (
  <button type="submit" disabled={submitting || pristine}>
    Submit
  </button>
  );

function mustBeNumber(value) { return (Number.isNaN(value) ? 'Must be a number' : undefined); }
function validate(values) {
  const errors: {vatNumber?: string} = {};
  errors.vatNumber = mustBeNumber(values.vatNumber);
  return errors;
}
/* eslint react/prop-types: off */
function ContactForm({ contact, onSubmit }: {contact: Contact, onSubmit}) {
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
                  <ContactFormInternal />
                </CardContent>
              </Card>
            </form>
          );
}}
      />
    );
}

export default function ContactsPage() {
    const authx = useAuth();
    const [data, updateData] = useState({ data: [], output: [], loaded: false });
    const [formVisible, updateFormVisible] = useState(false);
    const switchForm = useCallback(() => {
      updateFormVisible((prev) => !prev);
    }, []);
    const action = (<Button onClick={switchForm}>Dodaj</Button>);
    const contact = ContactsService.emptyContact();
    const saveContact = useCallback((data) => {
      ContactsService.put(authx, data);
      updateData({ loaded: false, data: [], output: [] });
      updateFormVisible(false);
    }, [authx]);

    useEffect(() => {
        if (!data.loaded) {
            return ContactsService.getAll(authx, (snapshot) => {
                const intData = { data: [], output: [], loaded: true };

                snapshot.forEach((el) => {
                    const val: Contact = el.val();
                    val.dbid = el.key;
                    intData.data.push(val);
                    intData.output.push((<ContactTableRow key={val.dbid} row={val} />));
                });
                updateData(intData);
            });
        } return () => {};
    }, [authx, data.loaded]);

    return (
      <>
        <Helmet>
          <title>Contacts</title>
        </Helmet>
        <PageTitleWrapper>
          Contacts
        </PageTitleWrapper>
        <BodyContent>
          <Container maxWidth="lg">
            <Collapse in={formVisible} collapsedSize={0}>
              <ContactForm contact={contact} onSubmit={saveContact} />
            </Collapse>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12}>
                <Card>
                  <Card>
                    <CardHeader
                      action={action}
                      title="Contacts"
                    />
                    <Divider />
                    <TableContainer>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell padding="checkbox">
                              <Checkbox
                                color="primary"
                              />
                            </TableCell>
                            <TableCell>Nazwa</TableCell>
                            <TableCell align="right">NIP</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {data.output}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Card>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </BodyContent>
        <Footer />
      </>
    );
}
