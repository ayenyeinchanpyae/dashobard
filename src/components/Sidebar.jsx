import { BiDownload, BiCalendar } from "react-icons/bi";
import { BsBarChartFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";
import { VscSaveAll } from "react-icons/vsc";

const Sidebar = () => {
  return (
    <div className="bg-white w-[20%] flex justify-center ">
      <div className="flex flex-col items-center ">
        <p className="text-3xl pt-8 font-bold text-[#30234a]">Linguuu</p>
        <ul className="menu pt-16 p-2 rounded-box text-[#a8a3b1] ">
          <li className="flex hover:text-[#895fde] hover:bg-[#f7f3ff] ">
            <a className="flex space-x-2">
              <span>
                <BsBarChartFill />
              </span>
              <p>Overview</p>
            </a>
          </li>
          <li className="flex hover:text-[#895fde] hover:bg-[#f7f3ff]">
            <a className="flex space-x-2">
              <span>
                <BiDownload />
              </span>
              <p>Courses</p>
            </a>
          </li>
          <li className="flex hover:text-[#895fde] hover:bg-[#f7f3ff]">
            <a className="flex space-x-2">
              <span>
                <BiCalendar />
              </span>
              <p>Schedule</p>
            </a>
          </li>
          <li className="flex hover:text-[#895fde] hover:bg-[#f7f3ff]">
            <a className="flex space-x-2">
              <span>
                <BiDownload />
              </span>
              <p>Materials</p>
            </a>
          </li>
          <li className="flex hover:text-[#895fde] hover:bg-[#f7f3ff]">
            <a className="flex space-x-2">
              <span>
                <VscSaveAll />
              </span>
              <p>Exams</p>
            </a>
          </li>
          <li className="flex hover:text-[#895fde] hover:bg-[#f7f3ff]">
            <a className="flex space-x-2">
              <span>
                <FiSettings />
              </span>
              <p>Settings</p>
            </a>
          </li>
          <li className="flex mt-12 hover:text-[#895fde] hover:bg-[#f7f3ff]">
            <a className="flex space-x-2">
              <span>
                <FiLogOut />
              </span>
              <p>Log out</p>
            </a>
          </li>
        </ul>
        <div className="card w-[200px] bg-[#e0d4f3] shadow-xl">
          <figure className="pt-4">
            {/* <img src="https://placeimg.com/400/225/arch" alt="Shoes" /> */}
            <HiOutlineLightBulb size={50} />
          </figure>
          <div className="card-body">
            <p className="">Upgrade</p>
            <p className="">to a PRO plan</p>

            <div className="card-actions justify-center">
              <button className="px-2 py-1 w-full bg-white  rounded-md">
                <span className="text-[#9077c6] text-bold">Get Started</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
