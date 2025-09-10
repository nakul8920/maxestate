import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { EnquireProvider } from "@/contexts/EnquireContext";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import Index from "./pages/Index";
import Terms from "./pages/Terms";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const RootLayout = () => (
  <TooltipProvider>
    <EnquireProvider>
      <PerformanceMonitor />
      <Toaster />
      <Sonner />
      <Outlet />
    </EnquireProvider>
  </TooltipProvider>
);

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Index /> },
      // Clean section paths render the same Index page and will auto-scroll
      { path: "/home", element: <Index /> },
      { path: "/about", element: <Index /> },
      { path: "/floorplans", element: <Index /> },
      { path: "/amenities", element: <Index /> },
      { path: "/masterplan", element: <Index /> },
      { path: "/pricing", element: <Index /> },
      { path: "/terms", element: <Terms /> },
      { path: "/thank-you", element: <ThankYou /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

export default App;
