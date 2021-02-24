import React, { useState } from 'react';
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from './components/Buttons';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, defaultTheme, darkTheme } from './utils';

function App() {
  return (
    <div className='App'>
      <PrimaryButton disabled>Hello</PrimaryButton>
      <SecondaryButton disabled>Secondary </SecondaryButton>
      <TertiaryButton disabled>Tertiary</TertiaryButton>
      <GlobalStyle />
    </div>
  );
}

export default App;
