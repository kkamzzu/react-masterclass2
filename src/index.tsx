import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
import App02 from './App02';
import App03 from './App03';


const queryClient = new QueryClient()


ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      {/* <App02 />
    <App03 /> */}

    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);