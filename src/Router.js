import { createBrowserRouter} from "react-router-dom";
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import NoPage from './components/NO page/nopage';
import App from "./App";
import Projects from "./components/projects/Projects";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
    const router = createBrowserRouter([
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/Contact",
        element: [<Header /> ,<Contact />, <Footer />],
      },
      {
        path: "/About",
        element: [<Header /> ,<About />, <Footer />],
      },
      {
        path: "/Services",
        element: [<Header /> ,<Services />, <Footer />],
      },
      {
        path: "/Skills",
        element: [<Header /> ,<Skills />, <Footer />],
      },
      {
        path: "/Projects",
        element: [<Header /> ,<Projects />, <Footer />],
      },
      {
        path: "*",
        element: [<Header /> ,<NoPage />, <Footer />],
      },
    ]);

export default router;