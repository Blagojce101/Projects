import Wrapper from "@/Components/Wrapper";
import Link from "next/link";
import React from "react";

const ProfileInfo = () => {
  return (
    <>
      <Wrapper>
        <div className="col-12 my-3 d-flex justify-content-center align-items-center flex-column">
          <div>
            <img src="/profile-pic.png" alt="" />
          </div>
          <div className="custom-border my-2">
            <p className="m-0">Одбери слика</p>
          </div>
        </div>

        <div className="col-12 my-3">
          <form className="log-in-form">
            <label htmlFor="adress">Адреса</label>
            <input type="text" id="adress" placeholder="ул.Пере Тошев бр.25" />

            <label htmlFor="number">Телефонски број</label>
            <input type="number" id="number" placeholder="пр: 075/123-145" />

            <label htmlFor="biography">Биографија</label>
            <textarea
              name=""
              id="biography"
              placeholder="Нешто за тебе.."></textarea>

            <button className="register-btn my-3">Заврши</button>
          </form>

          <Link href={"/"}>
            <p className="skip text-dark">Прескокни</p>
          </Link>
        </div>
      </Wrapper>
    </>
  );
};

export default ProfileInfo;
