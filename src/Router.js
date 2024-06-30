import { createBrowserRouter} from "react-router-dom";
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import NoPage from './components/NO page/nopage';
import App from "./App";
import Projects from "./components/projects/Projects";

    const router = createBrowserRouter([
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Services",
        element: <Services />,
      },
      {
        path: "/Skills",
        element: <Skills />,
      },
      {
        path: "/Projects",
        element: <Projects />,
      },
      {
        path: "*",
        element: <NoPage />,
      },
    ]);

export default router;