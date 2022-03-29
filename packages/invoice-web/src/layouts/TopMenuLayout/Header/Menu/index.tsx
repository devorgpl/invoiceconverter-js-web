import {
  Box,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material';
import React, { useRef, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import { topBarMenu, userTopBarMenu } from '../../../../services/RouteService';

const ListWrapper = styled(Box)(
  ({ theme }) => `
        .MuiTouchRipple-root {
            display: none;
        }
        
        .MuiListItem-root {
            transition: ${theme.transitions.create(['color', 'fill'])};
            
            &.MuiListItem-indicators {
                padding: ${theme.spacing(1, 2)};
            
                .MuiListItemText-root {
                    .MuiTypography-root {
                        &:before {
                            height: 4px;
                            width: 22px;
                            opacity: 0;
                            visibility: hidden;
                            display: block;
                            position: absolute;
                            bottom: -10px;
                            transition: all .2s;
                            border-radius: ${theme.general.borderRadiusLg};
                            content: "";
                            background: ${theme.colors.primary.main};
                        }
                    }
                }

                &.active,
                &:active,
                &:hover {
                
                    background: transparent;
                
                    .MuiListItemText-root {
                        .MuiTypography-root {
                            &:before {
                                opacity: 1;
                                visibility: visible;
                                bottom: 0px;
                            }
                        }
                    }
                }
            }
        }
`,
);

function RenderMenu() {
  const menuElements = topBarMenu;

  const items = menuElements.map((el) => (
    <ListItem
      classes={{ root: 'MuiListItem-indicators' }}
      button
      component={NavLink}
      to={el.route}
      key={el.label}
    >
      <ListItemText
        primaryTypographyProps={{ noWrap: true }}
        primary={el.label}
      />
    </ListItem>
));

  return (
    <ListWrapper>
      <List disablePadding component={Box} display="flex">
        {items}
      </List>
    </ListWrapper>
  );
}

function HeaderMenu() {
  return (
    <RenderMenu />
  );
}

export default HeaderMenu;
