import { FAQPageType } from "@/interfaces/interfaces";
import { GetStaticProps, NextPage } from "next";
import React from "react";

interface Props {
  FAQData: FAQPageType;
}

const FAQPage: NextPage<Props> = ({ FAQData }) => {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center flex-wrap my-3">
        <div className="row">
          <div className="col-12 text-center d-flex justify-content-center align-items-center">
            <h4 className="m-0">{FAQData.title}</h4>
            <img src={FAQData.stars_image} alt="" className="sparks" />
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-center align-items-center mb-4">
        <div className="row">
          <div className="container d-flex justify-content-center align-items-center flex-wrap rounded-FAQ-container bg-white p-0">
            <div className="row">
              <div className="col-12 px-3 pt-3">
                <h5 className="question-style pl-2">1. {FAQData.question}</h5>
                <p className="answer-style">{FAQData.answer}</p>
                <div className="border-FAQ m-0"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 px-3 pt-3 background-color-FAQ">
                <h5 className="question-style pl-2">2. {FAQData.question}</h5>
                <p className="answer-style">{FAQData.answer}</p>
                <div className="border-FAQ m-0"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 px-3 pt-3">
                <h5 className="question-style pl-2">3. {FAQData.question}</h5>
                <p className="answer-style">{FAQData.answer}</p>
                <div className="border-FAQ m-0"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 px-3 pt-3 background-color-FAQ">
                <h5 className="question-style pl-2">4. {FAQData.question}</h5>
                <p className="answer-style">{FAQData.answer}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;

export const getStaticProps: GetStaticProps = async () => {
  const FAQRes = await fetch(`http://localhost:5001/FAQ_page`);
  const FAQData: FAQPageType = await FAQRes.json();
  return {
    props: { FAQData },
  };
};
