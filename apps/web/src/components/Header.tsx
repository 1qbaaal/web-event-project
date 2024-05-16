'use client';
import { AiOutlineSchedule } from 'react-icons/ai';
import { ImTicket } from 'react-icons/im';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdClose } from 'react-icons/md';

export const Header = () => {
  // const router =useRouter()
  // const handleClick = () => {
  //   router.push('/user/login')
  // }
  return (
    <div>
      <div className="lg:hidden">
        <div className="relative flex justify-start rounded-b-full bg-blue-100 px-24 text-black shadow">
          <div className="absolute z-50 flex">
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label htmlFor="my-drawer" className="drawer-button">
                  <RxHamburgerMenu size={60} className="pt-6" />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="text-shuttlegray menu relative min-h-full w-80 bg-base-200 p-4 font-bold">
                  <li className="hover:text-burnorange pt-10">
                    <Link href="/">Beranda</Link>
                  </li>
                  <li>
                    <Link className="hover:text-burnorange" href="/about">
                      Tentang Kami
                    </Link>
                  </li>
                  <li>
                    <Link className="hover:text-burnorange" href="/partnership">
                      Partnership
                    </Link>
                  </li>
                  {/* Close button */}
                  <input id="my-drawer" type="checkbox" className="hidden" />
                  <div className="absolute right-5">
                    <label htmlFor="my-drawer">
                      <MdClose size={25} className="text-black" />
                    </label>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='hidden lg:block'>
        <header className="p-4 text-black fixed z-10 bg-white w-full ">
          <div className="container flex justify-between h-16 mx-auto">
            <Link
              href="/"
              rel="noopener noreferrer"
              aria-label="Back to homepage"
              className="flex items-center p-2"
            >
              <ImTicket className="w-10 h-10 text-[#70942E] " size={100} />
            </Link>
            <ul className="items-stretch hidden space-x-3 lg:flex">
              <li className="flex">
                <Link
                  href="/"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-black border-blue-600"
                >
                  Beranda
                </Link>
              </li>
              <li className="flex">
                <Link
                  href={'/about'}
                  rel="noopener noreferrer"
                  className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
                >
                  Tentang Kami
                </Link>
              </li>
              <li className="flex">
                <Link
                  href={'/partnership'}
                  rel="noopener noreferrer"
                  className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
                >
                  Partnership
                </Link>
              </li>
            </ul>
            <div className="items-center font-bold flex-shrink-0 hidden lg:flex">
              <Link href="/event">
                <button className="flex self-center px-4 py-3 rounded hover:bg-gray-200 mr-2">
                  <AiOutlineSchedule className="pr-2" size={25} />
                  Buat Event
                </button>
              </Link>
              <Link href="/user/login">
                <button className="self-center px-8 py-3 font-semibold rounded bg-[#70942E] text-gray-50 hover:bg-gray-500">
                  Masuk
                </button>
              </Link>
            </div>
          </div>
          <hr className="w-full" />
        </header>
      </div>
    </div>
  );
};
