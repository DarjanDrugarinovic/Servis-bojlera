import Router from "router/Router";
import { RouterProvider } from "providers/RouterProvider";
import ErrorBoundaryProvider from "providers/ErrorBoundaryProvider.js";
import { ThemeProvider } from "providers/ThemeProvider";
import "./App.css";

function App() {
  return (
    <ErrorBoundaryProvider>
      <RouterProvider>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </RouterProvider>
    </ErrorBoundaryProvider>
  );
}

export default App;
