import { useLocation } from "react-router-dom";
import AppRoutes from "./routes";
import Navbar from "./component/shared/Navbar";

function App() {
  const location = useLocation();

  // Hide navbar on these routes
  const hideNavbarRoutes = ["/login", "/register", "/dashboard"];
  const shouldHideNavbar = hideNavbarRoutes.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      {!shouldHideNavbar && <Navbar />} 
      <AppRoutes /> 
    </>
  );
}

export default App;
