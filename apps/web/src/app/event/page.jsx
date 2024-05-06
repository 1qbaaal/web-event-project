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
          startDate: '',
          endDate: '',
          startTime: '',
          endTime: '',
          location: '',
          description: '',
          eventCategoryId: '',
          typeEvent: '',
        }}
        onSubmit={(values) => {
          const fd = new FormData();
          fd.append(
            'data',
            JSON.stringify({
              name: values.name,
              price: parseInt(values.price),
              startDate: new Date(values.startDate),
              endDate: new Date(values.endDate),
              startTime: new Date(),
              endTime: new Date(),
              location: values.location,
              description: values.description,
              eventCategoryId: parseInt(values.eventCategoryId),
              typeEvent: values.typeEvent,
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
                <div>
                  <p>REGISTER EVENT</p>
                </div>
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
                  <span className="label-text">Start Date</span>
                </div>
                <Field
                  type="date"
                  name="startDate"
                  placeholder="Type Start Date"
                  className="input input-bordered w-[50vh]"
                />
              </label>
            </div>
            <div className="w-[50vh]">
              <label className="form-control w-[50vh]">
                <div className="label">
                  <span className="label-text">End Date</span>
                </div>
                <Field
                  type="date"
                  name="endDate"
                  placeholder="Type End Date"
                  className="input input-bordered w-[50vh]"
                />
              </label>
            </div>
            <div className="w-[50vh]">
              <label className="form-control w-[50vh]">
                <div className="label">
                  <span className="label-text">Start Time</span>
                </div>
                <Field
                  type="time"
                  name="startTime"
                  placeholder="Type Start Time"
                  className="input input-bordered w-[50vh]"
                />
              </label>
            </div>{' '}
            <div className="w-[50vh]">
              <label className="form-control w-[50vh]">
                <div className="label">
                  <span className="label-text">End Time</span>
                </div>
                <Field
                  type="time"
                  name="endTime"
                  placeholder="Type End Time"
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
                  name="eventCategoryId"
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
