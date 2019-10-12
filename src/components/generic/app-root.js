import React from 'react';
import styled, {ThemeContext} from 'styled-components/macro';

const Root = styled.div`
  &,
  * {
    &,
    &::before,
    &::after {
      overflow-wrap: break-word;
      box-sizing: border-box;
      overflow: hidden;
    }
  }
`;

export default styled(AppRoot)``;

function AppRoot({theme, ...props}) {
  return (
    <ThemeContext.Provider value={theme}>
      <Root {...props} />
    </ThemeContext.Provider>
  );
}
