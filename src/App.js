import './App.css';
import {Header} from "./layouts/header/Header";
import {BrowserRouter} from "react-router-dom";
import {useContext} from "react";
import {ThemeContext} from "./context/ThemeContext";
import {MyRoutes} from "./routes/routes";

function App() {
    const ThemeContexts = useContext(ThemeContext)
  return (
      <BrowserRouter>
          <ThemeContext.Provider value={ThemeContexts}>
              <div className="App">
                  <Header/>
                  <MyRoutes/>
              </div>
          </ThemeContext.Provider>
      </BrowserRouter>
  );
}


export default App;
