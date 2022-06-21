import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";

export default function Header() {
  return (
    <div>
      {/* Left */}
      <div className="flex items-center justify-between max-w-6xl">
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

        <h1>Right Side</h1>
      </div>
    </div>
  );
}
