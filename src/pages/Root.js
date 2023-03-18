import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      {/* Vị trí các phần tử router con */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
