import React from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  title: string;
  clickLogo?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, clickLogo }) => {
  return (
    <div>
      <header className="px-4 py-2 bg-blue-100 flex justify-between items-center">
        <button onClick={clickLogo}>
          <img
            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1643004937711/k3NMskkSn.png"
            width="50"
            alt="Daily Dev Tips Logo"
          />
        </button>

        <section>
          <div className="text-xl">{title} :)</div>
        </section>
        <section v-if="navItems">
          <nav>
            <ul className="flex">
              <li className="mr-6">
                <a className="text-gray-400 cursor-not-allowed">Clic loco</a>
              </li>
            </ul>
          </nav>
        </section>
      </header>
    </div>
  );
};
