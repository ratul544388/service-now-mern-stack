import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router";
import { Toaster } from "./components/ui/sonner";
import "./index.css";
import ReactQueryProvider from "./providers/react-query-provider";
import { ThemeProvider } from "./providers/theme-provider";
import { router } from "./routes";

createRoot(document.getElementById("root")).render(
  <ReactQueryProvider>
    <HelmetProvider>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
    <Toaster />
  </ReactQueryProvider>,
);
