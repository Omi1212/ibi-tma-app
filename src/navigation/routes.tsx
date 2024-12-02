import type { ComponentType, JSX } from 'react';

import { IndexPage } from '@/pages/IndexPage/IndexPage';
import { InitDataPage } from '@/pages/InitDataPage.tsx';
import { LaunchParamsPage } from '@/pages/LaunchParamsPage.tsx';
import { ThemeParamsPage } from '@/pages/ThemeParamsPage.tsx';
import { Send } from '@/pages/Send';
import Home from '@/pages/Home';


interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: '/', Component: IndexPage },
  { path: '/init-data', Component: InitDataPage, title: 'Init Data' },
  { path: '/theme-params', Component: ThemeParamsPage, title: 'Theme Params' },
  { path: '/launch-params', Component: LaunchParamsPage, title: 'Launch Params' },
  { path: '/send', Component: Send, title: 'Send' },
  { path: '/home', Component: Home, title: 'Home' },
];
