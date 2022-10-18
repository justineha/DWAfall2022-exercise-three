import {
  createBrowserRouter, 
  RouterProvider, 
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
