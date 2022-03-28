import React, { FC, ReactNode } from 'react';
import { Container, Box } from '@mui/material';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

const PageTitle = styled(Box)(
  ({ theme }) => `
        padding: ${theme.spacing(4, 0)};
`
);

interface PageTitleWrapperProps {
  children?: ReactNode;
}

const PageTitleWrapper: FC<PageTitleWrapperProps> = ({ children }) => (
  <>
    <PageTitle>
      <Container maxWidth="lg">
        {children}
      </Container>
    </PageTitle>
  </>
  );

PageTitleWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageTitleWrapper;
