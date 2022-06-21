import Image from "next/image";
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="shadow-sm top-0 border-b sticky bg-white z-30">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        {/* Left */}

        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027"
            layout="fill"
            className="object-contain"
            alt="photo"
          />
        </div>
        <div className="cursor-pointer h-24 w-24 relative  lg:hidden">
          <Image
            src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg"
            layout="fill"
            className="object-contain"
            alt="photo"
          />
        </div>

        {/* Middle */}
        <div className="relative mt-1">
          <div className="absolute top-2 left-2">
            <SearchIcon className="h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
          />
        </div>

        {/* Right */}

        <div className="flex items-center space-x-4">
          <HomeIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out hidden lg:inline-grid" />
          {session ? (
            <>
              {" "}
              <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
              <img
                onClick={signOut}
                src={session.user.image}
                alt="Avatar"
                className="h-10 rounded-full cursor-pointer w-10 cursor-pointer"
              />{" "}
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}
