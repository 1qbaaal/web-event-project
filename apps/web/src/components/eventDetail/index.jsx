'use client';
import Image from 'next/image';
import { format } from 'date-fns';
import { FaLocationDot } from 'react-icons/fa6';
import { IoTime } from 'react-icons/io5';
import { BsCalendar2DateFill } from 'react-icons/bs';
import { LuArrowBigRightDash } from 'react-icons/lu';
import { useState } from 'react';
import { TermsAndCondition } from '../TermsAndCondition'

export const EventDetail = ({
  name,
  startDate,
  endDate,
  startTime,
  endTime,
  city,
  province,
  description,
  images,
  ticket,
}) => {
  const [quantity, setQuantity] = useState(1);
  const newFormatDate= format(new Date(startDate), 'yyyy-MM-dd');
  const newFormatEndDate= format(new Date(endDate), 'yyyy-MM-dd');
  const newFormatTime= format(new Date(startTime), 'HH:mm');
  const newFormatEndTime= format(new Date(endTime), 'HH:mm');

  return (
    <div className="grid grid-cols-3 px-20 gap-10 min-h-screen">
      <div className="col-span-2">
        <Image
          src={'http://localhost:8000/api/' + images}
          alt="logo"
          className="w-[70vw] h-[400px] rounded-lg"
          width={10000}
          height={10000}
        />
        <div className="py-10">
          {' '}
          <p className="flex gap-2 font-bold">
            <LuArrowBigRightDash />
            DESKRIPSI
          </p>
          <p className="text-justify pt-4">{description}</p>
        </div>

        <div>
          {' '}
          <p className="flex gap-2 font-bold">
            <LuArrowBigRightDash />
            SYARAT DAN KETENTUAN
          </p>
          <p className="text-justify pt-4"><TermsAndCondition /></p>
        </div>
      </div>

      <div>
        <div className="card w-[25vw] h-[400px] bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <hr className='pb-10'/>
            <div className="pb-10 flex flex-col gap-4 text-sm font-bold">
              <p className="flex gap-2">
                <BsCalendar2DateFill />
                {newFormatDate} - {newFormatEndDate}
              </p>
              <p className="flex gap-2">
                <IoTime />
                {newFormatTime} - {newFormatEndTime}
              </p>
              <p className="flex gap-2">
                <FaLocationDot width={10} height={10} />
                {city}, {province}
              </p>
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className="card w-[25vw] bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Choose Ticket</h2>
              <hr className="pb-10" />

              <div className="flex flex-col gap-2 min-h-screen">
                {ticket?.map((ticket, index) => {
                  return (
                    <div key={index}>
                      <div className="pb-10 flex flex-col gap-4 text-sm font-bold">
                        <div className="card w-[320px] shadow-xl bg-[#70942E] ">
                          <div className="card-body h-[150px]">
                            <h1 className="text-xl">{ticket.typeTicket}</h1>
                            <hr className="py-2" />

                            <div className="flex justify-between">
                              <p className="flex gap-2">
                                {ticket.price.toLocaleString('id-ID', {
                                  style: 'currency',
                                  currency: 'IDR',
                                })}
                              </p>

                              <div className='flex items-center gap-2'>
                                <button
                                  onClick={() => setQuantity(quantity - 1)}
                                  disabled={quantity === 1 ? true : false}
                                  className="text-black border bg-white rounded-lg w-[35px] h-[35px] font-bold flex items-center justify-center"
                                >
                                  -
                                </button>
                                <p className="font-bold text-base">{quantity}</p>
                                <button
                                  onClick={() => setQuantity(quantity + 1)}
                                  disabled={quantity === 4 ? true : false}
                                  className="text-black border bg-white rounded-lg w-[35px] h-[35px] font-bold flex items-center justify-center"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <button className="btn bg-[#70942E]">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
