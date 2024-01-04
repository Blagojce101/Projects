import React from "react";

interface Props {
  content: string;
  onClick: () => void;
}

const Modal: React.FC<Props> = ({ content, onClick }) => {
  return (
    <>
      <div className="custom-modal">
        <div className="content text-center m-3 d-flex justify-content-center align-items-center flex-wrap">
          <p className="m-0">{content}</p>
          <button className="footer-button px-4 py-2" onClick={onClick}>
            Во ред.
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
