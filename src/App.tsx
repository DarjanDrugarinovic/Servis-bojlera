import Router from "router/Router";
import { RouterProvider } from "providers/RouterProvider";
import ErrorBoundaryProvider from "providers/ErrorBoundaryProvider.js";
import { ThemeProvider } from "providers/ThemeProvider";
import { PaymentProvider } from "providers/PaymentProvider";
import "./App.css";

function App() {
  return (
    <ErrorBoundaryProvider>
      <RouterProvider>
        <ThemeProvider>
          <PaymentProvider>
            <Router />
          </PaymentProvider>
        </ThemeProvider>
      </RouterProvider>
    </ErrorBoundaryProvider>
  );
}

export default App;
