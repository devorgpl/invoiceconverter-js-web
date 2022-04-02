import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
 Grid, Container, styled, Box, Card, CardHeader, FormControl, InputLabel, Select, Divider, TableContainer, Table, TableHead, TableRow, TableCell, Checkbox, TableBody, Typography, Tooltip, IconButton, useTheme,
} from '@mui/material';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { EppGenerator } from '@devorgpl/invoice-lib/bin/src/generators/EppGenerator';
import { encode } from 'iconv-lite';
import { XMLParser } from 'fast-xml-parser';
import { NavLink } from 'react-router-dom';
import PageTitleWrapper from '../../components/PageTitleWrapper';
import Footer from '../../components/Footer';
import { useAuth } from '../../libs/firebase';
import { Invoice, InvoiceService } from '../../services/InvoiceService';

const BodyContent = styled(Box)(
  ({ theme }) => `
        padding: ${theme.spacing(4, 0)};
`,
);

const downloadTxtFile = (name: string, data: Buffer) => {
    const element = document.createElement('a');
    const file = new Blob([data], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = name;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
};

interface InvoiceRowProps {
    invoice: Invoice
}

function download(invoice: Invoice) {
    return () => {
        const generator = new EppGenerator();
        const result = generator.generate(invoice.data);
        const buffer:Buffer = encode(result, 'win1250');
        downloadTxtFile(`${invoice.meta.number}.epp`, buffer);
    };
}

function InvoiceRow(props: InvoiceRowProps): React.ReactElement {
    const { invoice } = props;
    const theme = useTheme();
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
            {invoice.meta.from}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap />
        </TableCell>
        <TableCell>
          <Typography
            variant="body1"
            fontWeight="bold"
            color="text.primary"
            gutterBottom
            noWrap
          >
            <NavLink to={`/app/invoices/${invoice.meta.dbid}`}>
              {invoice.meta.number}
            </NavLink>
          </Typography>
        </TableCell>
        <TableCell>
          <Typography
            variant="body1"
            fontWeight="bold"
            color="text.primary"
            gutterBottom
            noWrap
          >
            {invoice.meta.date}
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap />
        </TableCell>
        <TableCell align="right">
          <Typography
            variant="body1"
            fontWeight="bold"
            color="text.primary"
            gutterBottom
            noWrap
          >
            {invoice.meta.amount}
            {' '}
            {invoice.meta.currency}
          </Typography>
        </TableCell>
        <TableCell align="right">
          <Tooltip title="Download EPP format" arrow>
            <IconButton
              onClick={download(invoice)}
              sx={{
                          '&:hover': {
                            background: theme.colors.primary.lighter,
                          },
                          color: theme.palette.primary.main,
                        }}
              color="inherit"
              size="small"
            >
              <ArrowCircleDownIcon fontSize="small" />
              EPP
            </IconButton>
          </Tooltip>
        </TableCell>
      </TableRow>
    );
}

function InvoicesPage(): React.ReactElement {
    const authx = useAuth();
    const [data, updateData] = useState({ data: [], output: [], loaded: false });
    useEffect(() => {
        if (!data.loaded) {
            return InvoiceService.getAll(authx, (snapshot) => {
                const intData = { data: [], output: [], loaded: true };

                snapshot.forEach((el) => {
                    const val: Invoice = el.val();
                    val.meta.dbid = el.key;
                    val.data = new XMLParser().parse(val.raw);
                    intData.data.push(val);
                    intData.output.push((<InvoiceRow key={val.meta.dbid} invoice={val} />));
                });
                updateData(intData);
            });
        } return () => {};
    }, [authx, data.loaded]);

    return (
      <>
        <Helmet>
          <title>Invoices</title>
        </Helmet>
        <PageTitleWrapper>
          Invoices
        </PageTitleWrapper>
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
                  <Card>
                    <CardHeader
                      action={(
                        <Box width={150}>
                          <FormControl fullWidth variant="outlined">
                            <InputLabel>Status</InputLabel>
                          </FormControl>
                        </Box>
          )}
                      title="Recent Orders"
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
                            <TableCell>Wystawca</TableCell>
                            <TableCell>Numer</TableCell>
                            <TableCell>Data</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell align="right">Download</TableCell>
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

export default InvoicesPage;
