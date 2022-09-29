import React from "react";
import { BsCalendar4Week } from "react-icons/bs";
const ConversationSections = () => {
  return (
    <div className="relative bg-white w-[35%] mt-12 pt-8 px-4 shadow-md rounded-[20px]">
      <div className="pb-4 absolute">
        <div className="flex space-x-32 items-center">
          <div>
            <p className="pt-4 text-[#5c5170] font-semibold">
              Conversation Sections
            </p>
            <p className="text-[#a8a3b1]">13 Apr</p>
          </div>
          <div className="bg-slate-100 w-[30px] h-[30px] flex justify-center items-center rounded-lg shadow-md">
            <BsCalendar4Week size={20} />
          </div>
        </div>
        <div>
          <ul className=" divide-y divide-dashed  ">
            <li className="pt-8">13:00</li>
            <li className="pt-8">14:00</li>
            <li className="pt-8">15:00</li>
            <li className="pt-8">16:00</li>
            <li className="pt-8">17:00</li>
            <li className="pt-8">18:00</li>
            <li className="pt-8">19:00</li>
            <li className="pt-8">20:00</li>
            <li className="pt-8">21:00</li>
            <li className="pt-8"> </li>
          </ul>
        </div>
      </div>

      <div className="z-99 mt-[180px] ml-20">
        <div className="flex items-center h-[90px] mt-8 p-4 space-x-2 bg-[#e5f8fe] rounded-[20px] w-[250px]">
          <div className="text-[#8dd6ea]">
            <p className="text-xs font-bold">17:00-18:00</p>
            <p className=" font-bold">Business English</p>
            <p className=" text-xs font-semibold">B2 level</p>
          </div>
          <div className="avatar-group -space-x-6">
            <div className="avatar">
              <div className="w-8 ">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-8">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>

            <div className="avatar placeholder">
              <div className="w-8 bg-[#e5f8fe] text-[#8dd6ea] text-xs">
                <span>+4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-9 mt-[80px] ml-20">
        <div className="flex items-center h-[60px] mt-8 p-4 space-x-4 bg-[#ffeee4] rounded-[20px] w-[250px]">
          <div className="text-[#f38c6b]">
            <p className="text-xs font-bold">14:00-15:30</p>
            <p className=" font-bold">General English</p>
          </div>
          <div className="avatar-group -space-x-6">
            <div className="avatar">
              <div className="w-8 ">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-8">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>

            <div className="avatar placeholder">
              <div className="w-8 bg-[#ffeee4] text-[#f38c6b] text-xs">
                <span>+5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationSections;
