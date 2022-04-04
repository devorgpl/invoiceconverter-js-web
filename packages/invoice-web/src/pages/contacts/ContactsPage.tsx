import React, { useEffect, useState } from "react";
import {
 Box, Card, CardContent, CardHeader, Checkbox, Container, Divider, Grid, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography,
} from "@mui/material";
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

function ContactForm({contact}: {contact: Contact}) {
    const action = (<Typography>action</Typography>);
    return (
        <Card>
          <CardHeader
            action={action}
            title="Form"
          />
          <Divider />
          <CardContent>
            <TextField id="standard-basic" label="Company name" variant="standard" />
            <TextField id="standard-basic" label="NIP" variant="standard" />
            <TextField id="standard-basic" label="Postal code" variant="standard" />
            <TextField id="standard-basic" label="City" variant="standard" />
            <TextField id="standard-basic" label="Street" variant="standard" />
          </CardContent>
        </Card>)
}

export default function ContactsPage() {
    const authx = useAuth();
    const [data, updateData] = useState({ data: [], output: [], loaded: false });
    const action = (<Box>action</Box>);
    const contact = ContactsService.emptyContact();

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
              <ContactForm contact={contact}/>
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