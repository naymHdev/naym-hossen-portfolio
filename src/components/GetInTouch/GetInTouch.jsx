"use client";
import { MdMail, MdOutlineClose } from "react-icons/md";
import { FaPenFancy } from "react-icons/fa";
const GetInTouch = () => {
  return (
    <>
      <button
        className=" text-primaryColor font-extrabold text-xl flex items-center gap-2"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        <MdMail className="text-2xl" />
        Get in touch
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-card text-foreground">
          <div className=" flex items-center justify-between">
            <div className="flex items-center gap-4">
              <FaPenFancy className=" text-3xl text-title" />
              <h2 className="text-title font-extrabold text-4xl">
                Write to me
              </h2>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button>
                  <MdOutlineClose className=" text-2xl text-title" />
                </button>
              </form>
            </div>
          </div>
          {/* Form starts here */}
          <form method="dialog" className="mt-6">
            <div className="form-control">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-inherit focus:outline-none border-title border-b p-2 text-white"
                required
              />
            </div>

            <div className="form-control mt-6">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-inherit focus:outline-none border-title border-b p-2 text-white"
                required
              />
            </div>

            <div className="form-control mt-8">
              <textarea
                placeholder="Your Message"
                className="w-full bg-inherit focus:outline-none border-title border-b p-2 text-white"
                required
              ></textarea>
            </div>

            {/* Modal actions */}
            <div className="modal-action mt-12">
              <button
                type="submit"
                className=" text-black bg-primaryColor px-5 py-2 rounded-sm font-bold hover:text-white"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default GetInTouch;
