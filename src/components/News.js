import Image from "next/image";
import Link from "next/link";
import React from "react";

const News = ({ article }) => {
  return (
    <Link href={article.url} target="_blank">
      <div
        className="flex items-center justify-between px-4 py-2 space-x-1 
      hover:bg-gray-200 transition duration-200 cursor-pointer"
      >
        <div className="space-y-0.5">
          <h6 className="text-sm font-bold">{article.title}</h6>
          <p className="text-xs font-medium text-gray-500">
            {article.source.name}
          </p>
        </div>
        <img
          className=" rounded-xl"
          src={article.urlToImage}
          alt=""
          width="70"
        />
      </div>
    </Link>
  );
};

export default News;

//<Image src={article.urlToImage} alt="article-image" width="70" height="70" />;

//          <img
//           className="w-[70px] h-[70px] rounded-xl"
//           src={article.urlToImage}
//           alt=""
//         />
