export default function TicketPage() {
  return (
    <div className="flex flex-col items-center px-5 py-4 gap-3">
      <div className="w-[50vh]">
        <label className="form-control w-[50vh]">
          <div className="label pt-4">
            <span className="label-text">Total Ticket</span>
          </div>
          <input
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
          <input
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
            <span className="label-text"> Event Name</span>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Type Event Name"
            className="input input-bordered w-[50vh]"
          />
        </label>
      </div>
      <div className="w-[50vh]">
        <label className="form-control w-[50vh]">
          <div className="label pt-4">
            <span className="label-text"> Event Name</span>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Type Event Name"
            className="input input-bordered w-[50vh]"
          />
        </label>
      </div>
      <div className="w-[50vh]">
        <label className="form-control w-[50vh]">
          <div className="label pt-4">
            <span className="label-text"> Event Name</span>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Type Event Name"
            className="input input-bordered w-[50vh]"
          />
        </label>
      </div>
      <div className="w-[50vh]">
        <label className="form-control w-[50vh]">
          <div className="label pt-4">
            <span className="label-text"> Event Name</span>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Type Event Name"
            className="input input-bordered w-[50vh]"
          />
        </label>
      </div>

      <button className="btn bg-blue-500 w-[50vh] hover:bg-blue-700 text-white ">
        Submit
      </button>
    </div>
  );
}
