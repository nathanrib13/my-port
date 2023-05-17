import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#119194] mb-8">
        Contact
      </h1>
      <form
        action="https://getform.io/f/60364911-f519-4381-afc5-2f87fcec4630"
        method="POST"
      >
        <div className="grid md:grid-cols-2 gap-8 w-full py-3">
          <div className="flex flex-col">
            <label className=" text-md py-2 text-[#f17b21]" htmlFor="">
              Name
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-[#010101] bg-gray-300"
              type="text"
              name="name"
              id=""
            />
          </div>
          <div className="flex flex-col">
            <label className=" text-md py-2 text-[#f17b21]" htmlFor="">
              Phone
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-[#010101] bg-gray-300"
              type="text"
              name="phone"
              id=""
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className=" text-md py-2 text-[#f17b21]" htmlFor="">
            Email
          </label>
          <input
            className="border-2 rounded-lg p-3 flex border-[#010101] bg-gray-300"
            type="text"
            name="mail"
            id=""
          />
        </div>
        <div className="flex flex-col py-2">
          <label className=" text-md py-2 text-[#f17b21]" htmlFor="">
            Subject
          </label>
          <input
            type="text"
            name="subeject"
            className="border-2 rounded-lg p-3 flex border-[#010101] bg-gray-300"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className=" text-md py-2 text-[#f17b21]" htmlFor="">
            Message
          </label>
          <textarea
            className="border-2 rounded-lg p-3 border-[#010101] bg-gray-300"
            rows={10}
            name="message"
          ></textarea>
        </div>

        <button className="bg-[#119194] text-white mt-4 w-full p-4 rounded-lg hover: bg-black">
          Submit
        </button>
      </form>
    </div>
  );
};
