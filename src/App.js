import './App.css';
import './components/SlideBar'
import Home from './components/Home';
import Lists from './components/Lists';
import Single from './components/Single';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import New from './components/New';
import Login from './components/Login'
import { userInputs,productInputs } from './FormSource';
import './styles/Dark.css'
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";


function App() {

  const { darkMode } = useContext(DarkModeContext);


  return (
    <div className={darkMode ? "App Dark" : "App"}>
        <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<Lists />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<Lists />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
