import { getProviders } from "next-auth/react";
import Image from "next/image";

const signin = ({ providers }) => {
  return (
    <div className="flex justify-center mt-20 space-x-4">
      <Image
        src="https://i.pcmag.com/imagery/articles/04OpjOS2kgV6Y2nxFES93gf-1..v1690468102.jpg"
        alt=""
        width="400"
        height="400"
        className="hidden md:inline-flex object-cover md:w-44 md:h-80 rotate-6"
      />
      <div className="">
        {providers &&
          !!Object.keys(providers).length &&
          Object.values(providers).map((provider) => (
            <div className="flex flex-col items-center">
              <Image
                src="https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png"
                alt=""
                width="400"
                height="400"
                className="object-cover w-36"
              />
              <p className="text-center text-sm italic my-10">
                This app is created for learning purposes
              </p>
              <button className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">
                Sign in with {provider.name}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default signin;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
