import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
 Grid, Container, styled, Box, Card, CardHeader, FormControl, InputLabel, Select, Divider, TableContainer, Table, TableHead, TableRow, TableCell, Checkbox, TableBody, Typography, Tooltip, IconButton, useTheme,
} from '@mui/material';
import numeral from 'numeral';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import PageTitleWrapper from '../../components/PageTitleWrapper';
import Footer from '../../components/Footer';
import { useAuth } from '../../libs/firebase';
import { Invoice, InvoiceService } from '../../services/InvoiceService';

const BodyContent = styled(Box)(
  ({ theme }) => `
        padding: ${theme.spacing(4, 0)};
`,
);

interface InvoiceRowProps {
    invoice: Invoice
}

function InvoiceRow(props: InvoiceRowProps): React.ReactElement {
    const { invoice } = props;
    const theme = useTheme();
    return (
      <TableRow
        hover
        key={invoice.meta.number}
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
          <Typography variant="body2" color="text.secondary" noWrap>
            format(cryptoOrder.orderDate, yyyy-dd-MM)
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
            {invoice.meta.number}
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
          <Typography variant="body2" color="text.secondary" noWrap>
            xx
          </Typography>
        </TableCell>
        <TableCell align="right">
          <Typography
            variant="body1"
            fontWeight="bold"
            color="text.primary"
            gutterBottom
            noWrap
          >
            00 PLN
          </Typography>
          <Typography variant="body2" color="text.secondary" noWrap>
            {numeral(1000.00022).format(
                        `PLN 0,0.00`,
                      )}
          </Typography>
        </TableCell>
        <TableCell align="right">
          status
        </TableCell>
        <TableCell align="right">
          <Tooltip title="Edit Order" arrow>
            <IconButton
              sx={{
                          '&:hover': {
                            background: theme.colors.primary.lighter,
                          },
                          color: theme.palette.primary.main,
                        }}
              color="inherit"
              size="small"
            >
              <EditTwoToneIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete Order" arrow>
            <IconButton
              sx={{
                          '&:hover': { background: theme.colors.error.lighter },
                          color: theme.palette.error.main,
                        }}
              color="inherit"
              size="small"
            >
              <DeleteTwoToneIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </TableCell>
      </TableRow>
    );
}

function InvoicesPage(): React.ReactElement {
    const authx = useAuth();
    const [data, updateData] = useState({ data: [], output: [], loaded: false });
    if (!data.loaded) {
    InvoiceService.getAll(authx, (snapshot) => {
        const intData = { data: [], output: [], loaded: true };

        snapshot.forEach((el) => {
            intData.data.push(el.val());
            intData.output.push((<InvoiceRow invoice={el.val()} />));
        });
        updateData(intData);
      });
    }

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
                            <TableCell align="right">Actions</TableCell>
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
