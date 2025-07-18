import React from "react";
import { IoMdClose } from "react-icons/io";
import RequestDemoForm from "./RequestDemoForm";

const RequestDemoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed m-10 inset-0  bg-opacity-40 flex justify-center items-center z-50 ">
      <button
        onClick={onClose}
        className="absolute -top-5 right-110 text-2xl hover:text-[#00C48C] text-gray-600"
      >
        <IoMdClose />
      </button>
      <RequestDemoForm />
    </div>
  );
};

export default RequestDemoModal;
