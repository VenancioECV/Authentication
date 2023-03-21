import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './components/Pages/LoginPage/LoginPage';
import WelcomePage from './components/Pages/WelcomePage/WelcomePage';
import EarthOrbit from './components/EarthOrbit';
import Game from './components/PlanetGame';
import SolarSystem from "./components/SolarSystem/SolarSystem"


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/welcome",
    element: <WelcomePage />,
  },
  {
    path: "/PlanetGame",
    element: <Game/>
  },
  {
    path: "/EarthOrbit",
    element: <EarthOrbit/>
  },
  {
    path: "/SolarSystem",
    element: <SolarSystem/>
  }
  

]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
