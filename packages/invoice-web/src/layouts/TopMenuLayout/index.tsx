import React from 'react';
import type { FC, ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Header from './Header';

interface TopMenuLayoutProps {
  children?: ReactNode;
}

const MainWrapper = styled(Box)(
  ({ theme }) => `
        flex: 1 1 auto;
        display: flex;
        height: 100%;
`,
);

const MainContent = styled(Box)(
  ({ theme }) => `
        margin-top: ${theme.header.height};
        flex: 1 1 auto;
        overflow: auto;
`,
);

const TopMenuLayout: FC<TopMenuLayoutProps> = () => (
  <>
    <MainWrapper>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
    </MainWrapper>
  </>
  );

export default TopMenuLayout;
