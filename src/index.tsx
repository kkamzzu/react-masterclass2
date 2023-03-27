import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from "styled-components";
import App from './App';
import App02 from './App02';
import App03 from './App03';
import { Theme } from './theme';


const queryClient = new QueryClient()


ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <App />
        {/* <App02 />
    <App03 /> */}
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);