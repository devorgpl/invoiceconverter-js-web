import React, { useContext } from 'react';

import {
 Box, Hidden, IconButton, Tooltip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { SidebarContext } from '../../../contexts/SidebarContext';

import HeaderMenu from './Menu';
import HeaderButtons from './Buttons';
import HeaderUserbox from './Userbox';
import Logo from '../../../components/Logo';

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        padding: ${theme.spacing(0, 2)};
        right: 0;
        z-index: 5;
        background-color: ${theme.header.background};
        box-shadow: ${theme.header.boxShadow};
        position: fixed;
        justify-content: space-between;
        width: 100%;
/*         @media (min-width: ${theme.breakpoints.values.lg}px) {
            left: ${theme.sidebar.width};
            width: auto;
        } */
`,
);

function Header() {
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);

  return (
    <HeaderWrapper display="flex" alignItems="center">
      <Box display="flex" alignItems="center">
        <HeaderMenu />
      </Box>
      <Box display="flex" alignItems="center">
        <HeaderUserbox />
      </Box>
    </HeaderWrapper>
  );
}

export default Header;
