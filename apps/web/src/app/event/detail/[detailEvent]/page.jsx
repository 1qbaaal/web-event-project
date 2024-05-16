'use client'
import { useGetEventResult } from "../../../../hooks/useGetEventResult"
import { EventDetail } from '@/components/EventDetail'

export default function EventDetailPage(params){
  const { data } = useGetEventResult(params.params.detailEvent);

  if(data === undefined) return <h1>Loading...............................</h1>
  return(
    <div className="min-h-screen pt-32">
      <EventDetail 
      name= {data?.data?.data.name}
      startDate= {data?.data?.data?.startDate}
      endDate= {data?.data?.data?.endDate}
      startTime= {data?.data?.data?.startTime}
      endTime= {data?.data?.data?.endTime}
      city= {data?.data?.data.location.city}
      province= {data?.data?.data.location.province}
      description= {data?.data?.data.description}
      images= {data?.data?.data.eventImage.url}
      ticket= {data?.data?.data.ticket}
      />
    </div>
  )
}