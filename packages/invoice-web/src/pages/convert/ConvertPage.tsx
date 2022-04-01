import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
 Grid, Container, styled, Box, Card, CardHeader, FormControl, Divider, CardContent,
} from '@mui/material';
import PageTitleWrapper from '../../components/PageTitleWrapper';
import Footer from '../../components/Footer';
import './ConvertPage.css';
import Convert from '../../components/converter/Convert';

const BodyContent = styled(Box)(
  ({ theme }) => `
        padding: ${theme.spacing(4, 0)};
`,
);

function ConvertPage(): React.ReactElement {
    return (
      <>
        <Helmet>
          <title>Invoice converter</title>
        </Helmet>
        <PageTitleWrapper>
          Invoice converter
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
                      title="Invoice converter"
                    />
                    <Divider />
                    <CardContent>
                      <Convert />
                    </CardContent>
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

export default ConvertPage;
