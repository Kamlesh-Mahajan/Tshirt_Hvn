import "./App.css";
import Header from "./Header/Header.js";
import { BrowserRouter as Router} from 'react-router-dom';
import webFont from "webfontloader";
import React from "react";
import Footer from "./Footer/Footer.js";
import Home from "./Home/Home.js";

function App() {
  React.useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <Router>
      <Header />
      <Home />

      <Footer />
    </Router>
  );
}

export default App;
