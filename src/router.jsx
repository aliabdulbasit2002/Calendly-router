import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import RootLayout from "./Layouts/RootLayout";
import Individuals from "./Pages/Individuals";
import Teams from "./Pages/Teams";
import Enterprice from "./Pages/Enterprice";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="individuals" element={<Individuals />} />
      <Route path="teams" element={<Teams />} />
      <Route path="enterprice" element={<Enterprice />} />
    </Route>
  )
);
