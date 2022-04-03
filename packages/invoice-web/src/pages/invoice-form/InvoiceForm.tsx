import React from "react";
import {
    Box, Card, CardContent, CardHeader, Container, Divider, Grid, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
   } from "@mui/material";
import { NavLink } from "react-router-dom";

const BodyContent = styled(Box)(
({ theme }) => `
        padding: ${theme.spacing(4, 0)};
`,
);

export default function InvoiceForm() {
    return ( <BodyContent>
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
                    <Grid item lg={6} xs={6} textAlign="left">
                      Faktura:
                      {' '}
                      
                    </Grid>
                    </Grid>
                    </CardContent>
                </Card>
                </Grid>
                </Grid>
                </Container>
            </BodyContent>)
}