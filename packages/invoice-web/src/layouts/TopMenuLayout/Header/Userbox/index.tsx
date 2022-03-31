import React, { useEffect, useRef, useState } from 'react';

import { NavLink } from 'react-router-dom';

import {
  Avatar,
  Box,
  Button,
  Divider,
  Hidden,
  lighten,
  List,
  ListItem,
  ListItemText,
  Popover,
  Typography,
} from '@mui/material';

import { styled } from '@mui/material/styles';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import {
  CustomUser, logout, signInWithGoogle, useAuth,
} from '../../../../libs/firebase';

const UserBoxButton = styled(Button)(
  ({ theme }) => `
        padding-left: ${theme.spacing(1)};
        padding-right: ${theme.spacing(1)};
`,
);

const MenuUserBox = styled(Box)(
  ({ theme }) => `
        background: ${theme.colors.alpha.black[5]};
        padding: ${theme.spacing(2)};
`,
);

const UserBoxText = styled(Box)(
  ({ theme }) => `
        text-align: left;
        padding-left: ${theme.spacing(1)};
`,
);

const UserBoxLabel = styled(Typography)(
  ({ theme }) => `
        font-weight: ${theme.typography.fontWeightBold};
        color: ${theme.palette.secondary.main};
        display: block;
`,
);

const UserBoxDescription = styled(Typography)(
  ({ theme }) => `
        color: ${lighten(theme.palette.secondary.main, 0.5)}
`,
);

interface HeaderState {
    isOpen: boolean,
    currentUser: CustomUser,
}

function HeaderUserbox() {
  const authx = useAuth();

  const ref = useRef<React.ReactNode>(null);
  const [curState, setState] = useState<HeaderState>({ isOpen: false, currentUser: null });

  const handleOpen = (): void => {
    setState({ isOpen: true, currentUser: curState.currentUser });
  };

  const handleClose = (): void => {
    setState({ isOpen: false, currentUser: curState.currentUser });
  };

  const userLogOut = (): void => {
    handleClose();
    logout();
  };

  const loggedInUser = (
    <>
      <UserBoxButton color="secondary" ref={ref} onClick={handleOpen}>
        <Avatar variant="rounded" alt={authx.user?.displayName} src={authx.user?.photoURL} />
        <Hidden mdDown>
          <UserBoxText>
            <UserBoxLabel variant="body1">{authx.user?.displayName}</UserBoxLabel>
            <UserBoxDescription variant="body2">
              {authx.user?.email}
            </UserBoxDescription>
          </UserBoxText>
        </Hidden>
        <Hidden smDown>
          <ExpandMoreTwoToneIcon sx={{ ml: 1 }} />
        </Hidden>
      </UserBoxButton>
      <Popover
        anchorEl={ref.current}
        onClose={handleClose}
        open={curState.isOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuUserBox sx={{ minWidth: 210 }} display="flex">
          <Avatar variant="rounded" alt={authx.user?.displayName} src={authx.user?.photoURL} />
          <UserBoxText>
            <UserBoxLabel variant="body1">{authx.user?.displayName}</UserBoxLabel>
            <UserBoxDescription variant="body2">
              {authx.user?.email}
            </UserBoxDescription>
          </UserBoxText>
        </MenuUserBox>
        <Divider sx={{ mb: 0 }} />
        <List sx={{ p: 1 }} component="nav">
          <ListItem button to="/app/usersettings" component={NavLink}>
            <AccountBoxTwoToneIcon fontSize="small" />
            <ListItemText primary="My Profile" />
          </ListItem>
        </List>
        <Divider />
        <Box sx={{ m: 1 }}>
          <Button color="primary" fullWidth onClick={userLogOut}>
            <LockOpenTwoToneIcon sx={{ mr: 1 }} />
            Sign out
          </Button>
        </Box>
      </Popover>
    </>
  );

  const noUser = (
    <>
      <Button color="primary" fullWidth onClick={signInWithGoogle}>
        <LockOpenTwoToneIcon sx={{ mr: 1 }} />
        Sign in
      </Button>
    </>
);

  return authx.isSignedIn ? loggedInUser : noUser;
}

export default HeaderUserbox;
