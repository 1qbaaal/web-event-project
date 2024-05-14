'use client';
import { Formik, Form, Field } from 'formik';
import { useCreatePromotionMutate } from '../../../hooks/useCreatePromotionMutate';
import { useGetEventMutate } from '../../../hooks/useGetEventQuery';

export default function Promotion() {
  const { mutationCreatePromotion } = useCreatePromotionMutate();
  const { data } = useGetEventMutate()

  return (
    <Formik
      initialValues={{
        codeVoucher: '',
        totalVoucher: '',
        discount: '',
        startDate: '',
        endDate: '',
        eventId: '',
      }}
      onSubmit={(values) => {
        mutationCreatePromotion({
          codeVoucher: values.codeVoucher,
          totalVoucher: parseInt(values.totalVoucher),
          discount: parseInt(values.discount),
          startDate: new Date(values.startDate),
          endDate: new Date(values.endDate),
          eventId: parseInt(values.eventId),
        });
      }}
    >
      <Form>
        <div className="flex flex-col items-center px-5 py-32 gap-3">
          <div className="text-center font-bold">
            <p>ADD PROMOTION</p>
          </div>

          <div className="flex flex-col-2 gap-10">
            <div className="w-full">
              <div className="w-[50vh]">
                <label className="form-control w-[50vh]">
                  <div className="label pt-4">
                    <span className="label-text"> Code Voucher</span>
                  </div>
                  <Field
                    type="text"
                    name="codeVoucher"
                    placeholder="Type Code Voucher"
                    className="input input-bordered w-[50vh]"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col-2 gap-10">
            <div className="w-full">
              <div className="w-[50vh]">
                <label className="form-control w-[50vh]">
                  <div className="label pt-4">
                    <span className="label-text"> Total Voucher</span>
                  </div>
                  <Field
                    type="text"
                    name="totalVoucher"
                    placeholder="Type Total Voucher"
                    className="input input-bordered w-[50vh]"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col-2 gap-10">
            <div className="w-full">
              <div className="w-[50vh]">
                <label className="form-control w-[50vh]">
                  <div className="label pt-4">
                    <span className="label-text"> Discount</span>
                  </div>
                  <Field
                    type="text"
                    name="discount"
                    placeholder="Input Discount"
                    className="input input-bordered w-[50vh]"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col-2 gap-10">
            <div className="w-full">
              <div className="w-[50vh]">
                <label className="form-control w-[50vh]">
                  <div className="label pt-4">
                    <span className="label-text"> Start Date</span>
                  </div>
                  <Field
                    type="date"
                    name="startDate"
                    placeholder="Type Start Date"
                    className="input input-bordered w-[50vh]"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col-2 gap-10">
            <div className="w-full">
              <div className="w-[50vh]">
                <label className="form-control w-[50vh]">
                  <div className="label pt-4">
                    <span className="label-text"> End Date</span>
                  </div>
                  <Field
                    type="date"
                    name="endDate"
                    placeholder="Type End Date"
                    className="input input-bordered w-[50vh]"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col-2 gap-10">
            <label className="form-control w-[50vh]">
              <div className="label">
                <span className="label-text">Event</span>
              </div>
              <Field
                component="select"
                id="eventId"
                name="eventId"
                className="select select-bordered w-full text-black"
              >
                <option>Choose Event</option>
                {data?.data?.data?.map((data, index) => {
                  return (
                    <option value={data.id} key={index}>
                      {data.name}
                    </option>
                  );
                })}
              </Field>
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
