import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-col w-[100vw] items-center justify-between pt-32">
      <div>
        <Image
          src={'/10.jpg'}
          alt="logo"
          className="xl:h-[500px] mobile: w-[1000px] h-[200px]"
          width={10000}
          height={10000}
        />
      </div>
      <div className="absolute flex flex-col justify-center items-center xl:h-[500px] text-white font-bold xl:text-5xl mobile:text-xl ">
        About Us
      </div>

      <div className="pt-20 min-h-screen flex flex-col items-center">
        <div className="text-4xl font-bold ">Welcome Event Organizer</div>
        <div className="pt-6">
          Solusi sistem pemesanan Tiket event secara online hingga manajemen
          kunjungan di lokasi.
        </div>

        <div className="grid xl:grid-cols-3 py-10 gap-10 mobile:grid-cols-1 md:grid-cols-2">
          <div className="h-64 w-80 border px-2 pt-4 shadow-lg rounded-md">
            <Image
              src={'/int.jpg'}
              alt="logo"
              className="w-[125px] h-[100px] px-6"
              width={1000}
              height={1000}
            />
            <div className="px-6">
              <h1 className=" font-bold text-lg pt-4">Tiket Online</h1>
              <p className="text-sm pt-2">
                {' '}
                Jual dan monitoring tiket yang kamu jual, kapan saja dan di mana
                saja
              </p>
            </div>
          </div>

          <div className="h-64 w-80 border px-2 pt-4 shadow-lg rounded-md">
            <Image
              src={'/audit.png'}
              alt="logo"
              className="w-[125px] h-[100px] px-6"
              width={1000}
              height={1000}
            />
            <div className="px-6">
              <h1 className=" font-bold text-lg pt-4">Manage Event</h1>
              <p className="text-sm pt-2">
                {' '}
                Manage Event kamu dengan Admin Dashboard untuk setiap Organizer
              </p>
            </div>
          </div>

          <div className="h-64 w-80 border px-2 pt-4 shadow-lg rounded-md">
            <Image
              src={'/report.jpg'}
              alt="logo"
              className="w-[125px] h-[100px] px-6"
              width={1000}
              height={1000}
            />
            <div className="px-6">
              <h1 className=" font-bold text-lg pt-4">Report Penjualan</h1>
              <p className="text-sm pt-2">
                {' '}
                Report penjualan tiket event kamu secara real time.
              </p>
            </div>
          </div>

          <div className="h-64 w-80 border px-2 pt-4 shadow-lg rounded-md">
            <Image
              src={'/pay.png'}
              alt="logo"
              className="w-[125px] h-[100px] px-6"
              width={1000}
              height={1000}
            />
            <div className="px-6">
              <h1 className=" font-bold text-lg pt-4">Biaya Rendah</h1>
              <p className="text-sm pt-2">
                {' '}
                Sekarang kamu bisa Withdraw secara otomatis hanya dalam waktu 1
                hari kerja
              </p>
            </div>
          </div>

          <div className="h-64 w-80 border px-2 pt-4 shadow-lg rounded-md">
            <Image
              src={'/tiket.jpg'}
              alt="logo"
              className="w-[125px] h-[100px] px-6"
              width={1000}
              height={1000}
            />
            <div className="px-6">
              <h1 className=" font-bold text-lg pt-4">Tiket Check-in</h1>
              <p className="text-sm pt-2">
                {' '}
                Verifikasi secara akurat melalui sistem yang kompatibel dengan
                kebutuhan Anda.
              </p>
            </div>
          </div>

          <div className="h-64 w-80 border px-2 pt-4 shadow-lg rounded-md">
            <Image
              src={'/layanan.jpg'}
              alt="logo"
              className="w-[125px] h-[100px] px-6"
              width={1000}
              height={1000}
            />
            <div className="px-6">
              <h1 className=" font-bold text-lg pt-4">Layanan Tiket</h1>
              <p className="text-sm pt-2">
                {' '}
                Customer Service tersedia untuk memastikan kenyamanan transaksi
                Anda.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-20 w-[100vw] flex flex-col items-center">
          <div className="text-4xl font-bold">Biaya</div>
          <div className="pt-6">
            Berikut ketentuan biaya untuk layanan event ticketing di platform
            Tiket event
          </div>
          <div className="flex gap-6 py-10 grid mobile:grid-cols-1">
            <div className="h-[300px] w-80 border px-2 pt-4 shadow-lg rounded-md">
              <Image
                src={'/free.png'}
                alt="logo"
                className="w-[125px] h-[100px] px-6 mx-auto"
                width={10000}
                height={10000}
              />
              <div className="px-6 text-center">
                <h1 className=" font-bold text-lg pt-4">
                  Event Tidak Berbayar
                </h1>
                <hr className="py-4" />
                <p className="text-lg font-bold pt-2">Rp. 0 /tiket</p>
                <p className="pt-2">Komisi 0% Gratis</p>
              </div>
            </div>
            <div className="h-[300px] w-80 border px-2 pt-4 shadow-lg rounded-md">
              <Image
                src={'/paid.jpg'}
                alt="logo"
                className="w-[125px] h-[100px] px-6 mx-auto"
                width={10000}
                height={10000}
              />
              <div className="px-6 text-center">
                <h1 className=" font-bold text-lg pt-4">Event Berbayar</h1>
                <hr className="py-4" />
                <p className="text-lg font-bold pt-2">Rp. 2.500 /tiket</p>
                <p className="pt-2">
                  Harga tiket ≥ IDR 100.000 fee 2.5% per tiket.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
