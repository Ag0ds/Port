import React from 'react';

export type SideNavItem = {
    title: string;
    path: string;
    icon?: React.ReactNode;
    submenu?: boolean;
    subMenuItems?: SideNavItem[];
  };