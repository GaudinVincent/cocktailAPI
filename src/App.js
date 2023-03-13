import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./components/navigation/nav";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
