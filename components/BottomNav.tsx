import { useState } from "react";
import {
  HomeIcon,
  CalendarDaysIcon,
  Bars3Icon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { WrenchIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

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
        href="/workout"
        className="nav-link"
        onClick={() => setActiveIcon(2)}
      >
        <div>
          <WrenchIcon
            className={activeIcon === 2 ? "nav-item active" : "nav-item"}
          />
        </div>
      </Link>
      <Link
        href="/calendar"
        className="nav-link"
        onClick={() => setActiveIcon(3)}
      >
        <div>
          <CalendarDaysIcon
            className={activeIcon === 3 ? "nav-item active" : "nav-item"}
          />
        </div>
      </Link>
      <Link
        href="/portfolio"
        className="nav-link"
        onClick={() => setActiveIcon(4)}
      >
        <div>
          <DocumentTextIcon
            className={activeIcon === 4 ? "nav-item active" : "nav-item"}
          />
        </div>
      </Link>
      <Link
        href="/entire"
        className="nav-link"
        onClick={() => setActiveIcon(5)}
      >
        <div>
          <Bars3Icon
            className={activeIcon === 5 ? "nav-item active" : "nav-item"}
          />
        </div>
      </Link>
    </nav>
  );
};

export default BottomNav;
