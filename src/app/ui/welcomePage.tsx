// src/app/ui/SidebarOnlyLayout.tsx
import Sidebar from './Sidenav'; // Adjust the import path as needed.
import React from 'react';

const WelcomePage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};

export default WelcomePage;
