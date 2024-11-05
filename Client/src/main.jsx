import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider
import theme from './theme/muiTheme'; // Import your custom theme

import ToastProvider from './contexts/ToastContext'
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserProvider } from './contexts/userContext.jsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <UserProvider>
        <ToastProvider>
        <App />
        </ToastProvider>
        </UserProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
