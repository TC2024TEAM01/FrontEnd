// filepath: /c:/Users/Redouane/Desktop/TC gestion/FrontEnd/TC-gestion/src/App.jsx
/* eslint-disable no-unused-vars */
import "./app.css";
import AddNew from "./pages/AddNew";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Editpage from "./pages/Editpage";
import Signup from "./pages/signup";
import Profile from "./pages/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/addnew" element={<AddNew />} />
      <Route path="/editpage" element={<Editpage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
    </>
  )
);
const App = () => {
    return (
    <RouterProvider router={router} />
  );
};

export default App;