import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Routes from "./components/routes/Routes";

import { useState } from 'react'


function App() {

  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <h2>Google Search Clone</h2>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <NavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <Routes />
        <Footer />
      </div>
    </div>
  );
}

export default App;