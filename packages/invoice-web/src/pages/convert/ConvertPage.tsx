import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from '../../components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from '../../components/Footer';
import './ConvertPage.css';
import Convert from '../../components/converter/Convert';

function ConvertPage(): React.ReactElement {
    return (
      <>
        <Helmet>
          <title>Invoice converter</title>
        </Helmet>
        <PageTitleWrapper />
        <Convert />
        <Footer />
      </>
    );
}

export default ConvertPage;
