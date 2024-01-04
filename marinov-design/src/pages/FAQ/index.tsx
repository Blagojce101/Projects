import { FAQType } from "@/Interfaces/interfaces";
import Collapse from "@/components/Collapse/Collapse";
import { GetStaticProps, NextPage } from "next";
import React from "react";

interface Props {
  FAQData: FAQType;
}

const FAQPage: NextPage<Props> = ({ FAQData }) => {
  return (
    <>
      <div className="container" style={{ paddingTop: 80 }}>
        <div className="row">
          <div className="col-6 p-0">
            <p className="FAQ-text pl-3 bg-transparent">{FAQData.PageTitle}</p>
            <img src="/images/FAQPAGE/faq_bg_vector.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="container bg-white text-dark my-3">
        <div className="row">
          {FAQData.questionsAndAnswers.map((item, idx) => {
            return (
              <Collapse
                key={`${item.id}-${idx}`}
                answer={item.answer}
                question={item.question}
              />
            );
          })}
        </div>
      </div>
      <div className="container bg-white py-5 my-2">
        <div className="row px-3">
          <div className="col-12 p-0">
            <p className="m-0 askQuestion">
              Didn’t find the answer you were looking for?
            </p>

            <button className="ask-question-btn border-0 my-3">
              <div className="ask-question-btn-font">Ask Us Directly</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;

export const getStaticProps: GetStaticProps = async () => {
  const FAQRes = await fetch(`http://localhost:5001/FAQ`);
  const FAQData = await FAQRes.json();

  return {
    props: { FAQData },
  };
};
