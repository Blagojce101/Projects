import React from "react";

const ReportsPage = () => {
  return (
    <>
      <div className="container py-4">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-12">
            <h6 className="text-uppercase">Мои Пријави</h6>
          </div>
        </div>
      </div>
      <div className="conteiner">
        <div className="row d-flex justify-content-center align-items-center flex-row text-center">
          <div className="col-6 d-flex justify-content-center align-items-center flex-row text-center">
            <i className="fa-solid fa-sliders mr-2"></i>
            <p className="mb-1">Филтрирај</p>
          </div>
          <div className="col-6">3 Пријави</div>
        </div>
      </div>
      <div className="conteiner">
        <div className="row d-flex justify-content-center align-items-center text-center flex-row mb-3">
          <div className="col-6 bg-img"></div>
          <div className="col-6">
            <h6>Ул. Басил Ѓоргов бр.19</h6>
            <p>Капиштец Скопје</p>
            <p>29.10.2023 &nbsp; бр.1</p>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center text-center flex-row mb-3">
          <div className="col-6 bg-img"></div>
          <div className="col-6">
            <h6>Ул. Басил Ѓоргов бр.19</h6>
            <p>Капиштец Скопје</p>
            <p>29.10.2023 &nbsp; бр.1</p>
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center text-center flex-row mb-3">
          <div className="col-6 bg-img"></div>
          <div className="col-6">
            <h6>Ул. Басил Ѓоргов бр.19</h6>
            <p>Капиштец Скопје</p>
            <p>29.10.2023 &nbsp; бр.1</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportsPage;
