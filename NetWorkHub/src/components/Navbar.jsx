import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //logout handler

  const logoutHandler = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      return navigate("/app/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="navbar py-10 navHeight bg-stone-950">
      <div className="flex-1">
        <Link
          to={user ? "/app/explore" : "/app/login"}
          className=" text-4xl font-bold  text-white"
        >
          <div className="flex">
            <img src="/logo.png" alt="logo" className="h-12 w-10 me-2" />
            <h1 className="mt-1">NetWorkHub</h1>
          </div>
        </Link>
      </div>
      {user?.firstName ? (
        <div className="flex-none gap-2">
          <div className="form-control text-white font-semibold text-lg">
            Hi, {user.firstName}
          </div>
          <div className="dropdown dropdown-end  ms-1 me-3  flex ">
            <div
              tabIndex={0}
              role="button"
              className="btn  btn-circle avatar border-2 border-rose-500 hover:border-rose-500"
            >
              <div className="w-10 rounded-full ">
                <img alt="Tailwind CSS Navbar component" src={user.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm  dropdown-content bg-stone-950 rounded-box z-[1] mt-10 border-2 border-white w-52 p-2 shadow"
            >
              <li>
                <Link to="/app/profile" className="justify-between mt-0.5">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link to="/app/premium" className="mt-0.5">
                  Premium
                </Link>
              </li>

              <li>
                <Link to="/app/connections" className="mt-0.5">
                  Connections
                </Link>
              </li>
              <li>
                <Link to="/app/requests" className="mt-0.5">
                  Requests
                </Link>
              </li>
              <li>
                <Link to="/app/premium" className="mt-0.5">
                  Chat
                </Link>
              </li>
              <li>
                <Link onClick={logoutHandler} className="mt-0.5">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
