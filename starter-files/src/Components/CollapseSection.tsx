import React, { useState } from "react";

interface Props {
  text: string;
}

const CollapseSection: React.FC<Props> = ({ text }) => {
  const [collapseOne, setCollapseOne] = useState<boolean>(false);
  const [collapseTwo, setCollapseTwo] = useState<boolean>(false);
  const [collapseThree, setCollapseThree] = useState<boolean>(false);
  const [collapseFour, setCollapseFour] = useState<boolean>(false);

  const handleCollapseOne = () => {
    setCollapseOne(!collapseOne);
    setCollapseTwo(false);
    setCollapseThree(false);
    setCollapseFour(false);
  };

  const handleCollapseTwo = () => {
    setCollapseOne(false);
    setCollapseTwo(!collapseTwo);
    setCollapseThree(false);
    setCollapseFour(false);
  };

  const handleCollapseThree = () => {
    setCollapseOne(false);
    setCollapseTwo(false);
    setCollapseThree(!collapseThree);
    setCollapseFour(false);
  };

  const handleCollapseFour = () => {
    setCollapseOne(false);
    setCollapseTwo(false);
    setCollapseThree(false);
    setCollapseFour(!collapseFour);
  };

  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center flex-wrap">
        <div className="row px-3">
          <div className="col-sm-12 col-md-6 col-lg-6 custom-collapse mb-2">
            <div
              className="d-flex justify-content-between align-items-center"
              onClick={() => {
                handleCollapseOne();
              }}>
              <img src="/box1.png" alt="" className="mr-2" />
              <p className="m-0 collapse-title-font">Контрола на квалитет</p>
              <img
                src="/plus.png"
                alt=""
                className={`${
                  collapseOne === true ? "rotate-plus" : "rotate-plus-back"
                } ml-auto plus-bg`}
              />
            </div>
            <div
              className={`${
                collapseOne === false ? "slide-up" : "slide-down"
              } collapse-desc-font`}>
              {text}
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 custom-collapse mb-2">
            <div
              className="d-flex justify-content-between align-items-center"
              onClick={() => {
                handleCollapseTwo();
              }}>
              <img src="/box2.png" alt="" className="mr-2" />
              <p className="m-0 collapse-title-font">Политика на враќање</p>
              <img
                src="/plus.png"
                alt=""
                className={`${
                  collapseTwo === true ? "rotate-plus" : "rotate-plus-back"
                } ml-auto plus-bg`}
              />
            </div>
            <div
              className={`${
                collapseTwo === false ? "slide-up" : "slide-down"
              } collapse-desc-font`}>
              {text}
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 custom-collapse mb-2">
            <div
              className="d-flex align-items-center"
              onClick={() => {
                handleCollapseThree();
              }}>
              <img src="/box3.png" alt="/box3.png" className="mr-2" />
              <p className="m-0 collapse-title-font">Достава</p>
              <img
                src="/plus.png"
                alt=""
                className={`${
                  collapseThree === true ? "rotate-plus" : "rotate-plus-back"
                } ml-auto plus-bg`}
              />
            </div>
            <div
              className={`${
                collapseThree === false ? "slide-up" : "slide-down"
              } collapse-desc-font`}>
              {text}
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 custom-collapse mb-2">
            <div
              className="d-flex align-items-center"
              onClick={() => {
                handleCollapseFour();
              }}>
              <img src="/box4.png" alt="/box5.png" className="mr-2" />
              <p className="m-0 text-left collapse-title-font">Помош</p>
              <img
                src="/plus.png"
                alt="/plus.png"
                className={`${
                  collapseFour === true ? "rotate-plus" : "rotate-plus-back"
                } ml-auto plus-bg`}
              />
            </div>
            <div
              className={`${
                collapseFour === false ? "slide-up" : "slide-down"
              } collapse-desc-font`}>
              {text}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollapseSection;
