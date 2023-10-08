import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";
import Widgets from "@/components/Widgets";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ newsResults, randomUsersResults }) {
  return (
    <main className="flex min-h-screen mx-auto ">
      {/* sidebar */}
      <Sidebar />
      {/* feed */}
      <Feed />
      {/* widget */}
      <Widgets
        newsResults={newsResults.articles}
        randomUsersResults={randomUsersResults.results}
      />
    </main>
  );
}

//https://saurav.tech/NewsAPI/top-headlines/category/health/in.json

export async function getServerSideProps() {
  const newsResults = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json"
  ).then((res) => res.json());

  //who to follow section
  const randomUsersResults = await fetch(
    "https://randomuser.me/api/?results=2&inc=name,login,picture"
  ).then((res) => res.json());

  return {
    props: {
      newsResults,
      randomUsersResults,
    },
  };
}
