import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Routes from "./components/routes/Routes";

import { useState } from 'react'


function App() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <h2>Google Search Clone</h2>
      <div className="bg-gray-100 dark:bg-grey-900 dark:text-gray-200 black min-h-screen">
        App
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
