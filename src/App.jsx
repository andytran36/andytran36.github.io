import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout.jsx";
import About from "./pages/About.jsx";
import Work from "./pages/Work.jsx";
import Projects from "./pages/Projects.jsx";
import Games from "./pages/Games.jsx";
import Welcome from "./pages/Welcome.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Welcome />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} />
        <Route path="projects" element={<Projects />} />
        <Route path="games" element={<Games />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
