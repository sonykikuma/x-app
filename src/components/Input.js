import React from "react";
import Image from "next/image";
import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";

const Input = () => {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
      <Image
        src="/kiku.jpg"
        alt=""
        width="40"
        height="40"
        className="h-11 w-11 rounded-full xl:mr-2 cursor-pointer hover:brightness-95"
      />
      <div className="w-full divide-y divide-gray-200">
        <div className="">
          <textarea
            className="w-full border-none focus:ring-0 text-lg tracking-wide 
            min-h-[50px] text-gray-700"
            rows="2"
            placeholder="What's happening?"
          ></textarea>
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex">
            <PhotographIcon
              className="h-10 w-10 hoverEffect p-2
            hover:bg-sky-100 text-sky-500"
            />
            <EmojiHappyIcon
              className="h-10 w-10 
            hover:bg-sky-100 hoverEffect p-2 text-sky-500"
            />
          </div>
          <button
            className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md
          hover:brightness-95 disabled:opacity-50"
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
