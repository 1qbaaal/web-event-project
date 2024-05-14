'use client'
import { Field, Formik, Form } from "formik";
import { useCreateTicketMutate } from '../../../hooks/useCreateTicketMutate'

export default function TicketPage() {
  const { mutationCreateTicket } = useCreateTicketMutate();

  return (
    <Formik
    initialValues={{
      totalTicket: "",
      typeTicket: "",
      price:'',
      eventId: ""
    }
  }
    onSubmit={(values) => {
      mutationCreateTicket({
        totalTicket: parseInt(values.totalTicket),
        typeTicket: values.typeTicket,
        price: parseInt(values.price),
        eventId: parseInt(values.eventId)
      });
    }}
    >
      <Form>
      <div className="flex flex-col items-center px-5 py-32 gap-3">
      <div className="text-center font-bold">
        <p>ADD TICKET</p>
      </div>
      <div className="w-[50vh]">
        <label className="form-control w-[50vh]">
          <div className="label pt-4">
            <span className="label-text">Total Ticket</span>
          </div>
          <Field
            type="text"
            name="totalTicket"
            placeholder="Type Total Ticket"
            className="input input-bordered w-[50vh]"
          />
        </label>
      </div>
      <div className="w-[50vh]">
        <label className="form-control w-[50vh]">
          <div className="label pt-4">
            <span className="label-text"> Type Ticket</span>
          </div>
          <Field
            type="text"
            name="typeTicket"
            placeholder="Type Ticket Type"
            className="input input-bordered w-[50vh]"
          />
        </label>
      </div>
      <div className="w-[50vh]">
        <label className="form-control w-[50vh]">
          <div className="label pt-4">
            <span className="label-text"> Price</span>
          </div>
          <Field
            type="text"
            name="price"
            placeholder="Type Price"
            className="input input-bordered w-[50vh]"
          />
        </label>
      </div>
      <div className="w-[50vh]">
        <label className="form-control w-[50vh]">
          <div className="label pt-4">
            <span className="label-text"> Event Name</span>
          </div>
          <Field
            type="text"
            name="eventId"
            placeholder="Type Event Name"
            className="input input-bordered w-[50vh]"
          />
        </label>
      </div>

      <button className="btn bg-blue-500 w-[50vh] hover:bg-blue-700 text-white mt-4">
        Submit
      </button>
    </div>
      </Form>
    </Formik>
    
  );
}
