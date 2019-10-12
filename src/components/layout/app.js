import React from 'react';

import AppRoot from 'components/generic/app-root';

import {getTheme} from 'themes';

export default function App() {
  const theme = getTheme('regular');

  return <AppRoot theme={theme} />;
}
