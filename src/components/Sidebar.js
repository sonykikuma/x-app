import Image from "next/image";
import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  InboxIcon,
  BellIcon,
  BookmarkIcon,
  UserIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
      {/* logo */}
      <div className="hoverEffect hover:bg-blue-100 xl:px-1">
        <Image
          src="https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png"
          width="30"
          height="30"
          alt=""
        />
      </div>

      {/* menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarMenuItem text="List" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
      {/* button */}
      <button
        className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md
      hover:brightness-95 text-lg hidden xl:inline"
      >
        Tweet
      </button>
      {/* mini profile */}
      <div
        className="hoverEffect text-gray-700 flex items-center
      justify-center xl:justify-start mt-auto"
      >
        <Image
          src="/kiku.jpg"
          alt=""
          width="40"
          height="40"
          className="h-10 w-10 rounded-full xl:mr-2"
        />
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">abha soni</h4>
          <p className="text-gray-500">@abha</p>
        </div>
        <DotsCircleHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
      </div>
    </div>
  );
};

export default Sidebar;
