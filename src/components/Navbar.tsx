import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "router/routes";

const { about, home } = routes;

const Navbar = () => {
  const navigate = useNavigate();

  const navigateHome = useCallback(() => {
    navigate(home);
  }, [navigate]);

  const navigateAbout = useCallback(() => {
    navigate(about);
  }, [navigate]);

  return (
    <div>
      <button onClick={navigateHome}>Home</button>
      <button onClick={navigateAbout}>About</button>
    </div>
  );
};

export default Navbar;
