/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { createTheme } from "@mui/material/styles";

// Soft UI Dashboard React base styles
import colors from "@devorgpl/invoice-web-assets/assets/theme/base/colors";
import breakpoints from "@devorgpl/invoice-web-assets/assets/theme/base/breakpoints";
import typography from "@devorgpl/invoice-web-assets/assets/theme/base/typography";
import boxShadows from "@devorgpl/invoice-web-assets/assets/theme/base/boxShadows";
import borders from "@devorgpl/invoice-web-assets/assets/theme/base/borders";
import globals from "@devorgpl/invoice-web-assets/assets/theme/base/globals";

// Soft UI Dashboard React helper functions
import boxShadow from "@devorgpl/invoice-web-assets/assets/theme/functions/boxShadow";
import hexToRgb from "@devorgpl/invoice-web-assets/assets/theme/functions/hexToRgb";
import linearGradient from "@devorgpl/invoice-web-assets/assets/theme/functions/linearGradient";
import pxToRem from "@devorgpl/invoice-web-assets/assets/theme/functions/pxToRem";
import rgba from "@devorgpl/invoice-web-assets/assets/theme/functions/rgba";

// Soft UI Dashboard React components base styles for @mui material components
import sidenav from "@devorgpl/invoice-web-assets/assets/theme/components/sidenav";
import list from "@devorgpl/invoice-web-assets/assets/theme/components/list";
import listItem from "@devorgpl/invoice-web-assets/assets/theme/components/list/listItem";
import listItemText from "@devorgpl/invoice-web-assets/assets/theme/components/list/listItemText";
import card from "@devorgpl/invoice-web-assets/assets/theme/components/card";
import cardMedia from "@devorgpl/invoice-web-assets/assets/theme/components/card/cardMedia";
import cardContent from "@devorgpl/invoice-web-assets/assets/theme/components/card/cardContent";
import button from "@devorgpl/invoice-web-assets/assets/theme/components/button";
import iconButton from "@devorgpl/invoice-web-assets/assets/theme/components/iconButton";
import inputBase from "@devorgpl/invoice-web-assets/assets/theme/components/form/inputBase";
import menu from "@devorgpl/invoice-web-assets/assets/theme/components/menu";
import menuItem from "@devorgpl/invoice-web-assets/assets/theme/components/menu/menuItem";
import switchButton from "@devorgpl/invoice-web-assets/assets/theme/components/form/switchButton";
import divider from "@devorgpl/invoice-web-assets/assets/theme/components/divider";
import tableContainer from "@devorgpl/invoice-web-assets/assets/theme/components/table/tableContainer";
import tableHead from "@devorgpl/invoice-web-assets/assets/theme/components/table/tableHead";
import tableCell from "@devorgpl/invoice-web-assets/assets/theme/components/table/tableCell";
import linearProgress from "@devorgpl/invoice-web-assets/assets/theme/components/linearProgress";
import breadcrumbs from "@devorgpl/invoice-web-assets/assets/theme/components/breadcrumbs";
import slider from "@devorgpl/invoice-web-assets/assets/theme/components/slider";
import avatar from "@devorgpl/invoice-web-assets/assets/theme/components/avatar";
import tooltip from "@devorgpl/invoice-web-assets/assets/theme/components/tooltip";
import appBar from "@devorgpl/invoice-web-assets/assets/theme/components/appBar";
import tabs from "@devorgpl/invoice-web-assets/assets/theme/components/tabs";
import tab from "@devorgpl/invoice-web-assets/assets/theme/components/tabs/tab";
import stepper from "@devorgpl/invoice-web-assets/assets/theme/components/stepper";
import step from "@devorgpl/invoice-web-assets/assets/theme/components/stepper/step";
import stepConnector from "@devorgpl/invoice-web-assets/assets/theme/components/stepper/stepConnector";
import stepLabel from "@devorgpl/invoice-web-assets/assets/theme/components/stepper/stepLabel";
import stepIcon from "@devorgpl/invoice-web-assets/assets/theme/components/stepper/stepIcon";
import select from "@devorgpl/invoice-web-assets/assets/theme/components/form/select";
import formControlLabel from "@devorgpl/invoice-web-assets/assets/theme/components/form/formControlLabel";
import formLabel from "@devorgpl/invoice-web-assets/assets/theme/components/form/formLabel";
import checkbox from "@devorgpl/invoice-web-assets/assets/theme/components/form/checkbox";
import radio from "@devorgpl/invoice-web-assets/assets/theme/components/form/radio";
import autocomplete from "@devorgpl/invoice-web-assets/assets/theme/components/form/autocomplete";
import input from "@devorgpl/invoice-web-assets/assets/theme/components/form/input";
import container from "@devorgpl/invoice-web-assets/assets/theme/components/container";
import popover from "@devorgpl/invoice-web-assets/assets/theme/components/popover";
import buttonBase from "@devorgpl/invoice-web-assets/assets/theme/components/buttonBase";
import icon from "@devorgpl/invoice-web-assets/assets/theme/components/icon";
import svgIcon from "@devorgpl/invoice-web-assets/assets/theme/components/svgIcon";
import link from "@devorgpl/invoice-web-assets/assets/theme/components/link";

export default createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
        ...container,
      },
    },
    MuiDrawer: { ...sidenav },
    MuiList: { ...list },
    MuiListItem: { ...listItem },
    MuiListItemText: { ...listItemText },
    MuiCard: { ...card },
    MuiCardMedia: { ...cardMedia },
    MuiCardContent: { ...cardContent },
    MuiButton: { ...button },
    MuiIconButton: { ...iconButton },
    MuiInputBase: { ...inputBase },
    MuiMenu: { ...menu },
    MuiMenuItem: { ...menuItem },
    MuiSwitch: { ...switchButton },
    MuiDivider: { ...divider },
    MuiTableContainer: { ...tableContainer },
    MuiTableHead: { ...tableHead },
    MuiTableCell: { ...tableCell },
    MuiLinearProgress: { ...linearProgress },
    MuiBreadcrumbs: { ...breadcrumbs },
    MuiSlider: { ...slider },
    MuiAvatar: { ...avatar },
    MuiTooltip: { ...tooltip },
    MuiAppBar: { ...appBar },
    MuiTabs: { ...tabs },
    MuiTab: { ...tab },
    MuiStepper: { ...stepper },
    MuiStep: { ...step },
    MuiStepConnector: { ...stepConnector },
    MuiStepLabel: { ...stepLabel },
    MuiStepIcon: { ...stepIcon },
    MuiSelect: { ...select },
    MuiFormControlLabel: { ...formControlLabel },
    MuiFormLabel: { ...formLabel },
    MuiCheckbox: { ...checkbox },
    MuiRadio: { ...radio },
    MuiAutocomplete: { ...autocomplete },
    MuiInput: { ...input },
    MuiOutlinedInput: { ...input },
    MuiFilledInput: { ...input },
    MuiPopover: { ...popover },
    MuiButtonBase: { ...buttonBase },
    MuiIcon: { ...icon },
    MuiSvgIcon: { ...svgIcon },
    MuiLink: { ...link },
  },
});
