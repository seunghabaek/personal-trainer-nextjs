import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import {
  UserIcon,
  HomeIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const BottomNav = () => {
  // selected icon color
  const [activeIcon, setActiveIcon] = useState<number>(1);
  return (
    <nav className="wrapper">
      <Link href="/" className="nav-link" onClick={() => setActiveIcon(1)}>
        <div>
          <HomeIcon
            className={activeIcon === 1 ? "nav-item active" : "nav-item"}
          />
        </div>
      </Link>
      <Link
        href="/calendar"
        className="nav-link"
        onClick={() => setActiveIcon(2)}
      >
        <div>
          <UserIcon
            className={activeIcon === 2 ? "nav-item active" : "nav-item"}
          />
        </div>
      </Link>
      <Link
        href="/entire"
        className="nav-link"
        onClick={() => setActiveIcon(3)}
      >
        <div>
          <PencilSquareIcon
            className={activeIcon === 3 ? "nav-item active" : "nav-item"}
          />
        </div>
      </Link>
      <Link
        href="/workout"
        className="nav-link"
        onClick={() => setActiveIcon(4)}
      >
        <div>
          <Bars3Icon
            className={activeIcon === 4 ? "nav-item active" : "nav-item"}
          />
        </div>
      </Link>
    </nav>
  );
};

export default BottomNav;
