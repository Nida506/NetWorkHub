import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div
      className={`relative w-full h-screen bg-cover bg-center  bg-[url('/landingPage.png')] `}
    >
      <div className={`fixed inset-0 bg-black bg-opacity-80 h-screen`}>
        {/* for navbar of landing page */}

        <div className={`navbar navHeight py-10 bg-none flex justify-center`}>
          <div className="flex-1">
            <Link className=" font-bold  text-white">
              <div className="flex items-center">
                <img src="/logo.png" alt="logo" className="h-14 w-14 me-2" />
                <h1 className="text-xl sm:text-[1.8rem] md:text-3xl lg:text-4xl mt-1 bg-gradient-to-r from-[#8800FF] to-[#FF00C1] bg-clip-text text-transparent">
                  NetWorkHub
                </h1>
              </div>
            </Link>
          </div>
          <div className="group">
            <Link
              to="/app/login"
              className="text-sm sm:text-sm md:text-xl lg:text-xl font-semibold rounded-full border-2 border-purple-600 py-1 px-3 me-3 text-purple-600 transition-all duration-300 
               group-hover:bg-gradient-to-r group-hover:from-[#8800FF] group-hover:to-[#FF00C1] 
               group-hover:text-white"
            >
              Log In
            </Link>
          </div>
        </div>

        {/* container */}
        <div className={`height flex items-center justify-center `}>
          <div className="">
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold pb-3  transition-all duration-200 cursor-pointer bg-gradient-to-r from-[#8800FF] to-[#FF00C1] bg-clip-text text-transparent`}
            >
              Start Something epic.
            </h1>

            <div className="flex justify-center group">
              <Link
                to="/app/login"
                className={`text-sm sm:text-sm md:text-xl lg:text-xl border-2 border-purple-600  me-3 text-purple-600 transition-all duration-300 
               group-hover:bg-gradient-to-r group-hover:from-[#8800FF] group-hover:to-[#FF00C1] 
               group-hover:text-white  font-semibold rounded-full px-3 py-1 mt-5`}
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
