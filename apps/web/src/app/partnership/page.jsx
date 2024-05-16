import Image from 'next/image';
import { CiMap, CiMail } from 'react-icons/ci';
import { FaWhatsapp } from "react-icons/fa";


export default function Partnership() {
  return (
    <div className="flex flex-col xl:w-[100vw] pt-32">
      <div>
        <Image
          src={'/11.jpg'}
          alt="logo"
          className="xl:w-[100vw] xl:h-[500px] mobile:w-[1000px] h-[200px]"
          width={10000}
          height={10000}
        />
      </div>
      <div className="absolute flex flex-col xl:justify-center xl:items-center xl:w-[100vw] xl:h-[500px] mobile:w-[1000px] mobile:h-[200px]">
        <p className="xl:text-5xl font-bold text-white mobile:text-xl mobile:items-center">Contact</p>
        <p className="xl:text-xl font-bold text-white pt-4 mobile:text-lg mobile:items-center">Beranda/Contact</p>
      </div>

      <div className="grid xl:grid-cols-3 py-20 px-20 grid-cols-1">
        <div>
          <div className="flex flex-col justify-center items-center w-[300px] text-justify mx-auto">
            <p className="text-xl font-bold">Tiket Owl HeadQuater</p>
            <p className="pt-6 flex">
              {' '}
              <CiMap size={70} className='pr-6'/>
              Jl. Raya PLP Km 2.5 Kel.Kadu, Kec.Curug, Kab.Tangerang, Banten.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-[300px] text-justify mx-auto pt-10">
            <p className="text-xl font-bold">Email</p>
            <p className="flex">
              {' '}
              <CiMail size={50} className='pr-6 pb-6'/>
              customerservice@ticketowl.com
            </p>
          </div>
          <div className="flex flex-col justify-center items-center w-[300px] text-justify mx-auto pt-10">
            <p className="text-xl font-bold">Whatsapp</p>
            <p className="pt-6 flex">
              {' '}
              <FaWhatsapp size={50} className='pr-6 pb-6'/>
              +62 123456789
            </p>
          </div>
        </div>

        <div className="col-span-2 px-10">
          <div className="flex flex-col">
            <div className="text-black text-xl font-bold">Kirim Pesan</div>

            <div className="w-[50vh] xl:flex gap-6 mobile:flex-col ">
              <label className="form-control w-[50vh]">
                <div className="label"></div>
                <input
                  type="text"
                  placeholder="Masukan Nama Lengkap"
                  className="input input-bordered w-[50vh]"
                />
              </label>
              <label className="form-control w-[50vh]">
                <div className="label"></div>
                <input
                  type="text"
                  placeholder="Masukan Email"
                  className="input input-bordered w-[50vh]"
                />
              </label>
            </div>

            <div className="xl:w-[106vh] pt-6">
              <label className="form-control">
                <div className="label"></div>
                <input
                  type="text"
                  placeholder="Masukan Judul Email"
                  className="input input-bordered xl:w-[103vh] mobile:w-[50vh]  md:w-[50vh]"
                />
              </label>
            </div>
            <div className="pt-6">
              <textarea
                name="message"
                className="textarea textarea-bordered xl:w-[103vh] mobile:w-[50vh] md:w-[50vh] text-base"
                placeholder="Masukan Pesan"
              ></textarea>
            </div>
            <div className="pt-10">
              <button className="btn bg-[#70942E] xl:w-[103vh] mobile:w-[50vh] md:w-[50vh] hover:bg-blue-700 text-white">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
