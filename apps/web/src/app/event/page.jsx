'use client';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { useCrateEventMutate } from '../../hooks/useCreateEventMutate';

export default function CreateEventPage() {
  const [eventPage, setEventPage] = useState([]);
  const { mutationCreateEvent } = useCrateEventMutate();

  const onSetFiles = (event) => {
    try {
      const acceptedFormat = ['jpg', 'jpeg', 'png', 'webp'];
      const files = [...event.target.files];

      files.forEach((file) => {
        if (
          !acceptedFormat.includes(
            file.name.split('.')[file.name.split('.').length - 1],
          )
        ) {
          throw { message: `${file.name} Format Not Acceptable` };
        }
        if (file.size > 1000000) {
          throw { message: `${file.name} is Too Large! Max Filesize is 100kb` };
        }
      });

      if (files.length > 3) throw { message: `Selected File More Than 3` };

      setEventPage(files);
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          price: '',
          schedule: '',
          location: '',
          description: '',
          category: '',
          typeEvent: '',
          userId: '',
        }}
        onSubmit={(values) => {
          const fd = new FormData();
          fd.append(
            'data',
            JSON.stringify({
              name: values.name,
              price: parseInt(values.price),
              schedule: new Date(values.schedule),
              location: values.location,
              description: values.description,
              category: values.category,
              typeEvent: values.typeEvent,
              userId: values.userId,
            }),
          );
          eventPage.forEach((file) => {
            fd.append('images', file);
          });

          mutationCreateEvent(fd);
        }}
      >
        <Form>
          <div className="flex flex-col items-center px-5 py-10 gap-3">
            <div className="w-[50vh]">
              <label className="form-control w-[50vh]">
                <div className="label">
                  <span className="label-text"> Event Name</span>
                </div>
                <Field
                  type="text"
                  name="name"
                  placeholder="Type Event Name"
                  className="input input-bordered w-[50vh]"
                />
              </label>
            </div>
            <div className="w-[50vh]">
              <label className="form-control w-[50vh]">
                <div className="label">
                  <span className="label-text">Price </span>
                </div>
                <Field
                  type="text"
                  name="price"
                  placeholder="Type Enter Price"
                  className="input input-bordered w-[50vh]"
                />
              </label>
            </div>
            <div className="w-[50vh]">
              <label className="form-control w-[50vh]">
                <div className="label">
                  <span className="label-text">Schedule</span>
                </div>
                <Field
                  type="text"
                  name="schedule"
                  placeholder="Type Schedule"
                  className="input input-bordered w-[50vh]"
                />
              </label>
            </div>
            <div className="w-[50vh]">
              <label className="form-control w-[50vh]">
                <div className="label">
                  <span className="label-text">Location</span>
                </div>
                <Field
                  type="text"
                  name="location"
                  placeholder="Type Location"
                  className="input input-bordered w-[50vh]"
                />
              </label>
            </div>
            <div className="w-[50vh]">
              <label className="form-control w-[50vh]">
                <div className="label">
                  <span className="label-text">Category</span>
                </div>
                <Field
                  type="text"
                  name="category"
                  placeholder="Type Event Category"
                  className="input input-bordered w-[50vh]"
                />
              </label>
            </div>
            <div className="w-[50vh]">
              <label className="form-control w-[50vh]">
                <div className="label">
                  <span className="label-text">Event Type</span>
                </div>
                <Field
                  type="text"
                  name="typeEvent"
                  placeholder="Type Event Type"
                  className="input input-bordered w-[50vh]"
                />
              </label>
            </div>
            <div className="w-[50vh]">
              <label className="form-control w-[50vh]">
                <div className="label">
                  <span className="label-text">User</span>
                </div>
                <Field
                  type="text"
                  name="userId"
                  placeholder="Type User"
                  className="input input-bordered w-[50vh]"
                />
              </label>
            </div>
            <div className="w-[50vh]">
              <label className="form-control w-[50vh]">
                <div className="label">
                  <span className="label-text">Description</span>
                </div>
                <Field
                  type="text"
                  name="description"
                  placeholder="Type Description"
                  className="input input-bordered w-[50vh]"
                />
              </label>
            </div>

            <div className="w-[50vh]">
              <label className="form-control w-[50vh]">
                <div className="label">
                  <span className="label-text">Select Images Profile</span>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(event) => onSetFiles(event)}
                  placeholder="Enter Product Stock"
                  className="input input-bordered rounded-md w-[50vh] px-2 py-2"
                />
              </label>
            </div>
            <button className="btn bg-indigo-500 text-white w-[50vh]">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
