import { useCreateLocationMutate } from '../../hooks/useCreateLocationMutate';
import { Formik, Form, Field } from 'formik';

export const CreateLocationModal = () => {
  const { mutationCreateLocation } = useCreateLocationMutate();

  return (
    <div className='pt-4'>
      <button
        className="btn bg-[#70942E] text-white"
        onClick={() => document.getElementById('my_modal_1').showModal()}
      >
        Create New Location!
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Create Location!</h3>
          <Formik
            initialValues={{
              city: '',
              province: '',
              zip: '',
            }}
            onSubmit={(values) => {
              mutationCreateLocation({
                city: values.city,
                province: values.province,
                zip: values.zip,
              });
            }}
          >
            <Form>
              <div className="bg-white  items-center">
                <div className="w-[50vh]">
                  <label className="form-control w-[50vh]">
                    <div className="label pt-4">
                      <span className="label-text"> Type City</span>
                    </div>
                    <Field
                      type="text"
                      name="city"
                      placeholder="Type City"
                      className="input input-bordered w-[50vh]"
                    />
                  </label>
                </div>
                <div className="w-[50vh]">
                  <label className="form-control w-[50vh]">
                    <div className="label pt-4">
                      <span className="label-text"> Type Province </span>
                    </div>
                    <Field
                      type="text"
                      name="province"
                      placeholder="Type Province"
                      className="input input-bordered w-[50vh]"
                    />
                  </label>
                </div>
                <div className="w-[50vh]">
                  <label className="form-control w-[50vh]">
                    <div className="label pt-4">
                      <span className="label-text"> Type Zip Code</span>
                    </div>
                    <Field
                      type="text"
                      name="zip"
                      placeholder="Type Zip Code"
                      className="input input-bordered w-[50vh]"
                    />
                  </label>
                </div>

                <button className="btn bg-blue-500 w-[50vh] hover:bg-blue-700 text-white mt-4">
                  Submit
                </button>

                {/* <div className="modal-box">
            <h3 className="font-bold text-lg">Craete Location!</h3>
            {/* Formik! 
          </div> */}
                {/* <form method="dialog" className="modal-backdrop">
            <button>Close</button>
          </form> */}
              </div>
            </Form>
          </Formik>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
