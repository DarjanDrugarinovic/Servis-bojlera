import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import Home from "pages/home/Home";
import About from "pages/about/About";

const { about } = routes;

export default function Router() {
  return (
    <Routes>
      <Route path={about} element={<About />} />
      <Route path={"*"} element={<Home />} />
    </Routes>
  );
}
