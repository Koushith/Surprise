import React, { useState } from 'react';
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from './components/Buttons';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, defaultTheme, darkTheme } from './utils';

function App() {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <div style={{ padding: '0 78px' }}>
        <button
          style={{
            margin: '0 16px 24px',
            padding: '8px',
            background: 'none',
            cursor: 'pointer',
          }}
          onClick={() => setUseDarkTheme(true)}
        >
          Dark Theme{' '}
        </button>
        <button
          style={{
            margin: '0 16px 24px',
            padding: '8px',
            background: 'none',
            cursor: 'pointer',
          }}
          onClick={() => setUseDarkTheme(false)}
        >
          Default Theme{' '}
        </button>

        <div
          style={{
            background: useDarkTheme
              ? defaultTheme.primaryColor
              : darkTheme.primaryColor,
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            border: '1px solid #7b7b7b',
          }}
        >
          <PrimaryButton>Hello</PrimaryButton>
          <SecondaryButton>Secondary </SecondaryButton>
          <TertiaryButton>Tertiary</TertiaryButton>
          <PrimaryButton modifiers={['success']}>Success</PrimaryButton>
          <PrimaryButton modifiers={['warning']}>Warning </PrimaryButton>
          <TertiaryButton modifiers={['error']}>Error</TertiaryButton>
        </div>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
