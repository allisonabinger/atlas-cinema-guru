import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Folder from "@/assets/icons/folder.svg";
import WatchLater from "@/assets/icons/clockfull.svg";
import Star from "@/assets/icons/starfull.svg";

export default async function SideNav() {
  return (
    <aside className="h-full flex flex-col bg-tealDark p-0">
      <div className="flex md:flex-col md:py-10 md:space-y-6 px-5 h-full nav-page-links pt-0 mt-0 pr-24">
        <div className="flex flex-row justify-start pl-0">
          <Link href="/" className="flex flex-row space-x-2 text-left">
            <Image
              src={Folder.src}
              alt="Home Page Icon"
              width={25}
              height={25}
            />
            <span>Home</span>
          </Link>
        </div>
        <div className="flex flex-row justify-start pl-0">
          <Link href="/" className="flex flex-row space-x-2 text-left">
            <Image src={Star.src} alt="Home Page Icon" width={25} height={25} />
            <span>Favorites</span>
          </Link>
        </div>
        <div className="flex flex-row justify-start pl-0">
          <Link href="/" className="flex flex-row space-x-2 text-left">
            <Image
              src={WatchLater.src}
              alt="Home Page Icon"
              width={25}
              height={25}
            />
            <span>Watch Later</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}

// function Logo() {
//   return (
//     <Link
//       className="mb-2 flex h-20 items-end justify-center rounded-md bg-secondary p-4 md:h-40"
//       href="/ui"
//     >
//       <Image
//         src={logo}
//         alt="Acme Logo"
//         className="h-14 md:h-full object-contain"
//       />
//     </Link>
//   );
// }
