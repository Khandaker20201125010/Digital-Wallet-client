import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router/dom';
import { router } from './Routes/Routes';
import { ThemeProvider } from './provider/theme-provider';
import { store } from './redux/store';
import { Provider as ReduxProvider } from 'react-redux';
import { Toaster } from './components/ui/sonner';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <ReduxProvider store={store}>
        <RouterProvider router={router} />
         <Toaster richColors />
      </ReduxProvider>
    </ThemeProvider>
  </StrictMode>,
);
