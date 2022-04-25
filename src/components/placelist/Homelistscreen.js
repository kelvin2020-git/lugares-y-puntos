import { HomeList } from "../home/HomeList";
import { useNavigate } from "react-router-dom";
import appland from "../ui/appland.png";
export const Homelistscreen = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/auth/login", {
      replace: true,
    });
  };

  return (
    <>
      <nav
        className="flex items-center justify-between flex-wrap bg-neutral-300
            p-6"
      >
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src={appland} alt="imagen" />
        </div>
        <div className="block lg:hidden"></div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow"></div>
          <div>
            <button
              href="#"
              className=" text-sm px-3 py-1  border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white "
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
        <div></div>
      </nav>
      <div>
        <HomeList />
      </div>
    </>
  );
};
