import { BrowserRouter } from "react-router-dom";
import i18n from "./i18n";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { useState } from "react";
import LocaleContext from "./context/LocaleContext";

const App = () => {
  const [locale, setLocale] = useState("en");

  // eslint-disable-next-line no-unused-vars
  i18n.on("languageChanged", (lng) => setLocale(i18n.language));

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <BrowserRouter>
        <div className="bg-hero-pattern bg-no-repeat relative z-0 bg-primary">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </LocaleContext.Provider>
  );
};

export default App;
