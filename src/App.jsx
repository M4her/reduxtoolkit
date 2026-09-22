import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AboutIndex from "./pages/about/AboutIndex";
import ServicesIndex from "./pages/services/ServicesIndex";
import RootLayout from "./components/layouts/RootLayout";
import HomeIndex from "./pages/home/HomeIndex";

function App() {
  const routes = createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<HomeIndex/>} />
      <Route path="/about" element={<AboutIndex />} />
      <Route path="/services" element={<ServicesIndex />} />
    </Route>,
  );

  const router = createBrowserRouter(routes);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
