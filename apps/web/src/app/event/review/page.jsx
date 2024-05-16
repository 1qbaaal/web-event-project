'use client';
import { Form, Formik, Field } from 'formik';
import { useCreateReviewMutate } from '../../../hooks/useCreateReviewMutate';
import { useGetEventMutate } from '@/hooks/useGetEventQuery';

export default function ReviewPage() {
  const { mutationCreateReview } = useCreateReviewMutate();
  const { data } = useGetEventMutate();
  return (
    <Formik
      initialValues={{
        rating: '',
        comment: '',
        eventId: '',
        userUid: '',
      }}
      onSubmit={(values) => {
        mutationCreateReview({
          rating: parseInt(values.rating),
          comment: values.comment,
          eventId: parseInt(values.eventId),
          userUid: values.userUid,
        });
      }}
    >
      <Form>
        <div className="flex flex-col items-center px-5 py-32 gap-3">
          <div className="text-center font-bold">
            <p>ADD REVIEW</p>
          </div>
          <div className="w-[50vh]">
            <label className="form-control w-[50vh]">
              <div className="label pt-4">
                <span className="label-text">Rating</span>
              </div>
              <Field
                type="text"
                name="rating"
                placeholder="Type Rating"
                className="input input-bordered w-[50vh]"
              />
            </label>
          </div>

          <div className="w-[50vh]">
            <label className="form-control w-[50vh]">
              <div className="label pt-4">
                <span className="label-text"> User</span>
              </div>
              <Field
                type="text"
                name="userUid"
                placeholder="Type User UID"
                className="input input-bordered w-[50vh]"
              />
            </label>
          </div>

          <div className="flex flex-col-2 gap-10">
            <label className="form-control w-[50vh]">
              <div className="label">
                <span className="label-text">Event Name</span>
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

          <div className="w-[50vh]">
            <label className="form-control w-[50vh]">
              <div className="label pt-6">
                <span className="label-text"> Comment</span>
              </div>
              <Field
                as="textarea"
                name="comment"
                placeholder="Type Comment"
                className="input input-bordered w-[50vh] pt-2"
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
