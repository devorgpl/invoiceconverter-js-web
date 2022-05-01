import React, {
 FormEventHandler, useCallback, useEffect, useState,
} from "react";
import {
 Box, Button, Card, CardContent, CardHeader, Checkbox, Collapse, Container, Divider, Grid, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useAuth } from "../../libs/firebase";
import PageTitleWrapper from "../../components/PageTitleWrapper";
import Footer from "../../components/Footer";
import { Contact, ContactsService } from "../../services/ContactsService";
import ContactForm from '../../components/contact/ContactForm';
import ContactTable from "../../components/contact/ContactTable";

const BodyContent = styled(Box)(
    ({ theme }) => `
          padding: ${theme.spacing(4, 0)};
  `,
  );

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

    const cancelEditContact = useCallback(() => {
      updateFormVisible(false);
    }, []);

    useEffect(() => {
        if (!data.loaded) {
            return ContactsService.getAll(authx, (snapshot) => {
                const intData = { data: [], output: [], loaded: true };
                snapshot.forEach((el) => {
                    const val: Contact = el.val();
                    val.dbid = el.key;
                    intData.data.push(val);
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
              <ContactForm
                contact={contact}
                onSubmit={saveContact}
                onCancel={cancelEditContact}
              />
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
                    <ContactTable data={data.data} />
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
