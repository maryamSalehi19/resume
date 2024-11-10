import Link from "next/link";

import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={` py-4 ${styles.headerBox}`}>
      <ul className="flex justify-between items-center">
        <li className={styles.name}>MARYAM</li>
        <div className={`flex space-x-3 ${styles.rightMenu}`}>
          <li className="px-3">
            <Link href="#home" className="text-gray-700">
              Home
            </Link>
          </li>
          <li className="px-3">
            <Link href="#about" className="text-gray-700">
              About me
            </Link>
          </li>
          <li className="px-3">
            <Link href="#skills" className="text-gray-700">
              Skills
            </Link>
          </li>
          <li className="px-3">
            <Link href="#portfolio" className="text-gray-700">
              Portfolio
            </Link>
          </li>
          <li className="px-3">
            <Link href="#contact" className="text-gray-700">
              Contact me
            </Link>
          </li>
          <img src="/image/Vector.svg" alt="Description" className="pl-3" />
        </div>
      </ul>
    </header>
  );
}
