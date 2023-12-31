import React , { useEffect , useState} from "react";
import Krave from "../../assets/krave.png";
import { FiSearch } from "react-icons/fi";
import { ImLocation } from "react-icons/im";
import { RxDividerVertical } from "react-icons/rx";
import { Link , useNavigate } from "react-router-dom";




const MobileNav = () => {
  const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        sessionStorage.removeItem('Auth token');
        sessionStorage.removeItem('User Id');
        window.dispatchEvent(new Event("storage"))
        navigate("/");
    }

    useEffect(() => {
        const checkAuthToken = () => {
            const token = sessionStorage.getItem('Auth token');
            if (token) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        }

        window.addEventListener('storage', checkAuthToken);

        return () => {
            window.removeEventListener('storage', checkAuthToken);
        }
    }, [])

  return (
    <>
      <div className="md:rounded-3xl flex justify-between items-center">
        <div>
          <img src={Krave} alt="logo" className="h-16" />
        </div>

        <div>
        {
           isLoggedIn ? 
          <button className="bg-lgreen pt-2 pb-2.5 px-4 rounded-xl md:rounded-2xl m-4 font-medium hover:cursor-pointer text-white shadow-md "
          onClick={handleLogout}>
            Logout
          </button> :
          <Link to='/login'>
            <button className="bg-lgreen pt-2 pb-2.5 px-4 rounded-xl md:rounded-2xl m-4 font-medium hover:cursor-pointer text-white shadow-md ">
            Login
          </button>
          </Link> 
          }
          
        </div>
      </div>
    </>
  );
};

const LargeNav = () => {
  
  const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        sessionStorage.removeItem('Auth token');
        sessionStorage.removeItem('User Id');
        window.dispatchEvent(new Event("storage"))
        navigate("/");
    }

    useEffect(() => {
        const checkAuthToken = () => {
            const token = sessionStorage.getItem('Auth token');
            if (token) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        }

        window.addEventListener('storage', checkAuthToken);

        return () => {
            window.removeEventListener('storage', checkAuthToken);
        }
    }, [])

  return (
    <>
      <div className="md:rounded-3xl flex justify-between w-full items-center">
        <div className="mr-2">
          <a href="/">
            <img src={Krave} alt="logo" className="h-16 " />
          </a>
          
        </div>


        <div className="bg-white flex justify-start w-8/12 gap-3 items-center rounded-2xl mr-4">
          <div className="scale-125 px-3 py-3 text-dgreen">
            <FiSearch />
          </div>
          <input
            type="text"
            className="w-full focus:outline-none mr-4"
            placeholder="Search for Restaurants and Food"
          ></input>
          <div className=" flex gap-2 mr-4 items-center">
            <RxDividerVertical className="text-grey"/>
            <ImLocation className="text-dgreen scale-125"/>
            Location
          </div>
        </div>
        
        
        <div className="ml-1">
          {
           isLoggedIn ? 
          (
            
            <button className="bg-lgreen pt-2 pb-2.5 px-4 rounded-xl md:rounded-2xl m-4 font-medium hover:cursor-pointer text-white shadow-md "
          onClick={handleLogout}>
            Logout
          </button>
          )
           :
           (
           
            <Link to='/login'>
            <button className="bg-lgreen pt-2 pb-2.5 px-4 rounded-xl md:rounded-2xl m-4 font-medium hover:cursor-pointer text-white shadow-md ">
            Login
          </button>
          </Link> 
           )
          
          }
          
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="bg-back mt-3 shadow-lg rounded-2xl md:rounded-3xl items-center z-10">
        <div className="md:hidden">
          {/* Mobile View */}
          <MobileNav />
        </div>

        <div className="hidden md:flex">
          {/* Larger View */}
          <LargeNav />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
