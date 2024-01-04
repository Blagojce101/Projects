import React, { useState } from "react";
import style from "./style.module.css";

interface Props {
  question: string;
  answer: string;
}

const Collapse: React.FC<Props> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenCollapse = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="col-12 py-2"
        onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          handleOpenCollapse(event);
        }}>
        <div className={style.plus}>
          {isOpen === false ? (
            <img
              src="/images/FAQPAGE/plus bold.svg"
              alt=""
              className="mr-2 mb-2"
            />
          ) : (
            <img src="/images/FAQPAGE/minus.svg" alt="" className="mr-2 mb-2" />
          )}
          <p className={`${style.questionFont} mb-2`}>{question}</p>
        </div>

        {isOpen && (
          <div className="d-flex justify-content-start align-items-center pl-4 py-3">
            <p className={`${style.answerFont} m-0`}>{answer}</p>
          </div>
        )}

        <div
          style={{ height: 1.5, background: "rgba(60, 25, 19, 0.50)" }}></div>
      </div>
    </>
  );
};

export default Collapse;
