'use client';
import { SimpleSlider } from '../components/carousel';
import { EventCard } from '../components/eventCard';
import { useGetEventMutate } from '@/hooks/useGetEventQuery';
import Link from 'next/link';

export default function Home() {
  const { data } = useGetEventMutate();

  return (
    <div className="overflow-hidden min-h-screen py-32">
      <SimpleSlider />
      <div className="flex justify-center ">
        <div className='px-10 py-10 grid xl:grid-cols-4 gap-4 grid-cols-1 md:grid-cols-2'>
          {data?.data?.data?.map((data, index) => {
            return (
              <div key={index}>
                <Link href={`/event/detail/${data.id}`}>
                  <EventCard
                    key={index}
                    name={data.name}
                    startDate={data.startDate}
                    endDate={data.endDate}
                    startTime={data.startTime}
                    endTime={data.endTime}
                    city={data.location.city}
                    province={data.location.province}
                    eventType={data.eventType.name}
                    price={data?.ticket[0]?.price}
                    images={data.eventImage.url}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
