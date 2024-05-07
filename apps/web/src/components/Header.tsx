import { AiOutlineSchedule } from 'react-icons/ai';
import { ImTicket } from 'react-icons/im';
import Link from 'next/link';

export const Header = () => {
  return (
    <div>
      <header className="p-4 text-black">
        <div className="container flex justify-between h-16 mx-auto">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <Link href="/">
              <ImTicket className="w-10 h-10 text-blue-600" size={100} />
            </Link>
          </a>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-blue-600 border-blue-600"
              >
                <Link href="/">Beranda</Link>
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Events
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Tentang Kami
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
              >
                Partnership
              </a>
            </li>
          </ul>
          <div className="items-center font-bold flex-shrink-0 hidden lg:flex">
            <Link href="/event">
              <button className="flex self-center px-4 py-3 rounded hover:bg-gray-200 mr-2">
                <AiOutlineSchedule className="pr-2" size={25} />
                Buat Event
              </button>
            </Link>
            <button className="self-center px-8 py-3 font-semibold rounded bg-blue-600 text-gray-50 hover:bg-gray-500">
              Masuk
            </button>
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <hr className="w-full" />
      </header>
    </div>
  );
};
