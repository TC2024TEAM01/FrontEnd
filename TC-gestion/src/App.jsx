/* eslint-disable react/prop-types */
import "./app.css";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import NavBarpro from "./components/NavBarpro";
import AddNew from "./pages/AddNew";
import Editpage from "./pages/Editpage";
import Signup from "./pages/signup";
import Profile from "./pages/Profile";
import CheckIn from "./pages/CheckIn";
import ProfileAd from "./pages/ProfileAd";
import NavBarAd from "./components/NavBarAd";

const Layout = ({ children }) => (
  <>
    <NavBarAd/>
    <ProfileAd/>
    <div>{children}</div>
  </>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="addnew" element={<AddNew />} />
      <Route path="profile" element={<Profile />} />
      <Route path="checkin" element={<CheckIn />} />
      <Route path="profileem" element={<ProfileAd />} />
    </Route>
  )
);

const App = () => {
  return (
    <div className="app-container">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;