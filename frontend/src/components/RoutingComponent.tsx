import React, { ReactNode } from 'react';
import { BrowserRouter as BrowserRouterImpl, HashRouter as HashRouterImpl, Routes } from 'react-router-dom';

interface RoutingComponentProps {
  children: ReactNode;
}

const RoutingComponent: React.FC<RoutingComponentProps> = ({ children }) => {
  if (isElectron()) {
    return (
      <HashRouterImpl>
        <Routes>{children}</Routes>
      </HashRouterImpl>
    );
  } else {
    return (
      <BrowserRouterImpl>
        <Routes>{children}</Routes>
      </BrowserRouterImpl>
    );
  }
}

function isElectron() {
  // Check if running in Electron environment
  const isElectron = navigator.userAgent.toLowerCase().indexOf(' electron/') > -1;
  return isElectron;
}

export default RoutingComponent;
