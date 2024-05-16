'use client';
import Image from 'next/image';
import { format } from 'date-fns';
import { FaLocationDot } from 'react-icons/fa6';
import { IoTime } from 'react-icons/io5';
import { BsCalendar2DateFill } from 'react-icons/bs';

export const EventCard = ({
  name,
  startDate,
  endDate,
  startTime,
  endTime,
  city,
  province,
  eventType,
  price,
  images,
}) => {
  const newDate = format(new Date(startDate), 'yyyy-MM-dd');
  const newEndDate = format(new Date(endDate), 'yyyy-MM-dd');
  const newTime = format(new Date(startTime), 'HH:mm');
  const newEndTime = format(new Date(endTime), 'HH:mm');
  const newPrice = parseInt(price)
  return (
    <div>
      <div className="card w-[300px] bg-base-100 shadow-xl">
        <Image
          src={'http://localhost:8000/api/' + images}
          alt="Gambar"
          width={10000}
          height={10000}
          quality={100}
          priority={true}
          className="h-[200px] rounded-lg"
        />
        <div className="card-body text-sm">
          <h2 className="card-title text-sm">{name}</h2>
          <p className="flex gap-2">
            <BsCalendar2DateFill />
            {newDate} - {newEndDate}
          </p> 
          <p className="flex gap-2">
            <IoTime />
            {newTime} - {newEndTime}
          </p> 
          <p className="flex gap-2 text-sm">
            <FaLocationDot width={10} height={10} />
            {city}, {province}
          </p>
          {/* <p className="font-bold">{eventType}</p> */}
          <hr />
          <div className="card-actions justify-end flex items-center">
            <p className="font-bold">
              {newPrice? newPrice.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'IDR',
                })
              : 'Free'}
            </p>
            <button className="btn h-[20px] bg-[#70942E]">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
