'use client';
import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import { useCrateEventMutate } from '../../hooks/useCreateEventMutate';
import { useCategoryLocationAndTypeQuery } from '../../hooks/useGetCategoryQuery';

export default function CreateEventPage() {
  const [eventPage, setEventPage] = useState([]);
  const { mutationCreateEvent } = useCrateEventMutate();
  const { dataCategory, dataLocation, dataEventType} = useCategoryLocationAndTypeQuery();

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
          locationId: '',
          description: '',
          eventCategoryId: '',
          eventTypeId: '',
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
              locationId: parseInt(values.locationId),
              description: values.description,
              eventCategoryId: parseInt(values.eventCategoryId),
              eventTypeId: parseInt(values.eventTypeId),
            }),
          );
          eventPage.forEach((file) => {
            fd.append('images', file);
          });

          mutationCreateEvent(fd);
        }}
      >
        <Form>
          <div className="flex flex-col items-center px-5 py-32 gap-3">
            <div className="text-center font-bold">
              <p>REGISTER EVENT</p>
            </div>
            <div className="flex flex-col-2 gap-10">
              <div className="w-full">
                <div className="w-[50vh]">
                  <label className="form-control w-[50vh]">
                    <div className="label pt-4">
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
                <div className="w-full">
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Location</span>
                    </div>
                    <Field
                      component="select"
                      id="locationId"
                      name="locationId"
                      className="select select-bordered w-full text-black"
                    >
                      <option>Choose Location</option>
                      {dataLocation?.map((location, index) => {
                        return (
                          <option value={location.id} key={index}>
                            {' '}
                            {location.city}{" "}-{" "}{location.province}
                          </option>
                        );
                      })}
                    </Field>
                  </label>
                </div>
                <div className="w-full">
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Category</span>
                    </div>
                    <Field
                      component="select"
                      id="eventCategoryId"
                      name="eventCategoryId"
                      className="select select-bordered w-full text-black"
                    >
                      <option>Choose Category</option>
                      {dataCategory?.map((category, index) => {
                        return (
                          <option value={category.id} key={index}>
                            {' '}
                            {category.category}{' '}
                          </option>
                        );
                      })}
                    </Field>
                  </label>
                </div>
                <div className="w-full">
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Type Event</span>
                    </div>
                    <Field
                      component="select"
                      id="eventTypeId"
                      name="eventTypeId"
                      className="select select-bordered w-full text-black"
                    >
                      <option>Choose Type Event</option>
                      {dataEventType?.map((type, index) => {
                        return (
                          <option value={type.id} key={index}>
                            {' '}
                            {type.name}{' '}
                          </option>
                        );
                      })}
                    </Field>
                  </label>
                </div>
              </div>

              <div className="w-full pt-2">
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
                      <span className="label-text">Description</span>
                    </div>
                    <Field
                      as="textarea"
                      type="text"
                      name="description"
                      placeholder="Type Description"
                      className="input input-bordered w-[50vh] h-[20vh] pt-2"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className=" flex justify-center">
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Select Images Profile</span>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(event) => onSetFiles(event)}
                  placeholder="Enter Product Stock"
                  className="input input-bordered rounded-md w-[108vh] px-2 py-2 "
                />
              </label>
            </div>
            <button className="btn bg-blue-500 w-[108vh] hover:bg-blue-700 text-white ">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
