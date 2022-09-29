import { TbMessage } from "react-icons/tb";
import { BsCheckLg } from "react-icons/bs";
import { FiStar } from "react-icons/fi";
import Chart from "./Chart";
const Center = () => {
  return (
    <div className="w-[70%] flex flex-col space-y-8 px-16">
      {/* search bar */}
      <form class="flex items-center mt-8  w-full max-w-xs">
        <div class="relative w-full">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search course, lector, exam..."
            required
          />
        </div>
      </form>
      {/* <div className="relative flex">
        <input
          type="text"
          placeholder="Search course, lector, exam..."
          className="mt-8 input input-bordered w-full max-w-xs "
        />
        <FiSearch className="absolute" />
      </div> */}
      {/* text */}
      <div className="space-y-4">
        <div className="text-[#30234a]">
          <p className="text-2xl font-bold">Hello Swen</p>
          <p className="">You are doing great. Keep Practicing!</p>
        </div>
        <div className="flex h-[80px] space-x-4">
          <div className="flex items-center p-4 space-x-4 bg-[#ffeee4] rounded-[20px] w-1/2">
            <TbMessage className="text-[#f38c6b]" size={50} />
            <div className="text-[#f38c6b]">
              <p className="2xl font-bold">4</p>
              <p className="xl font-bold">week practice</p>
            </div>
          </div>
          <div className="flex items-center p-4 space-x-4 bg-[#f0e8fc] rounded-[20px] w-1/2">
            <BsCheckLg className="text-[#6d4bba]" size={50} />
            <div className="text-[#6d4bba]">
              <p className="2xl font-bold">64</p>
              <p className="xl font-bold">lesson learned</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start bg-white rounded-[20px]   p-2 shadow-lg">
          <div className="flex space-x-4 pb-4">
            <p className="2xl font-bold">Your progress</p>
            <div className="bg-[#f0e8fc] w-[20px] h-[20px] p-1 flex justify-center items-center rounded-lg shadow-md">
              <FiStar size={20} className="text-[#6d4bba]" />
            </div>
          </div>
          <Chart />
        </div>
        <p className="2xl font-bold">Current Courses</p>
        <div className="flex  h-50 space-x-4">
          <div className="flex flex-col bg-white rounded-[20px] w-1/2 p-4 shadow-lg">
            <div className="flex  justify-between pb-4">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src="data:image/png;base64,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" />
                </div>
              </div>
              <div>
                <div className="badge bg-[#e5f8fe] border-none text-[#8dd6ea]">
                  B1-B2
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <p className=" font-semibold text-[#3d3255]">Business English</p>
              <p className="2xl font-bold text-[#3d3255]">Phrasal verbs</p>
              <p className=" font-bold text-[#8dd6ea] text-sm">
                21/100 lessons
              </p>
              <progress
                className="progress progress-info w-40 "
                value="21"
                max="100"
              ></progress>
              {/* <div class="w-40 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  class="bg-blue-600 h-2.5 rounded-full"
                  style="width: 45%"
                ></div>
              </div> */}
            </div>
          </div>
          <div className="flex flex-col bg-white rounded-[20px] w-1/2 p-4 shadow-lg">
            <div className="flex  justify-between pb-4 ">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAACnCAMAAAAPIrEmAAAAD1BMVEUAI5XtKTn///+qttz5ub5dP9pTAAAAxElEQVR4nO3PwQ0AIAgEMBT3n5kZTI5fu0Gr8vrGvZO3MFdXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dX/zJOz6WzkAhGGAAAAABJRU5ErkJggg==" />
                </div>
              </div>
              <div>
                <div className="badge border-none text-sm font-semibold  bg-[#e9eaff] text-[#5056cb]">
                  A1
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <p className=" font-semibold text-[#3d3255]">General French</p>
              <p className="2xl font-bold text-[#3d3255]">Basic Grammar</p>
              <p className="2xl font-bold text-[#5056cb] text-sm">
                18/32 lessons
              </p>
              <progress
                className="progress w-40"
                value="18"
                max="32"
              ></progress>
            </div>
          </div>
        </div>

        {/* progress */}
        {/* current courses */}
      </div>
    </div>
  );
};

export default Center;
