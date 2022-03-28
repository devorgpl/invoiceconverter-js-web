import React, { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => <>{children || <Outlet />}</>;

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
