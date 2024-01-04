import Wrapper from "@/Components/Wrapper";
import { UserContext } from "@/Context/userContext";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";

const ProfilePage = () => {
  const { currentLoggedInUser, handleUpdateUser } = useContext(UserContext);
  const [biography, setBiography] = useState<string>("");

  const nameRef = useRef<HTMLInputElement>(null);
  const lastnameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const adressRef = useRef<HTMLInputElement>(null);
  const contactNumberRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (currentLoggedInUser) {
      nameRef.current &&
        (nameRef.current.value = currentLoggedInUser.name || "");
      lastnameRef.current &&
        (lastnameRef.current.value = currentLoggedInUser.lastname || "");
      emailRef.current &&
        (emailRef.current.value = currentLoggedInUser.email || "");
      passwordRef.current &&
        (passwordRef.current.value = currentLoggedInUser.password || "");
      adressRef.current &&
        (adressRef.current.value = currentLoggedInUser.adress || "");
      contactNumberRef.current &&
        (contactNumberRef.current.value =
          currentLoggedInUser.contactNumber || "");
      setBiography(currentLoggedInUser.biography);
    } else {
      nameRef.current && (nameRef.current.value = "");
      lastnameRef.current && (lastnameRef.current.value = "");
      emailRef.current && (emailRef.current.value = "");
      passwordRef.current && (passwordRef.current.value = "");
      adressRef.current && (adressRef.current.value = "");
      contactNumberRef.current && (contactNumberRef.current.value = "");
      setBiography("");
    }
  }, [currentLoggedInUser]);

  return (
    <>
      <Wrapper>
        <div className="col-12 my-3 d-flex justify-content-center align-items-center flex-column">
          {currentLoggedInUser && currentLoggedInUser.image ? (
            <img
              src={currentLoggedInUser.image}
              alt=""
              className="profile-img"
            />
          ) : (
            <div>
              <img src="/profile-pic.png" alt="" />
            </div>
          )}
          <div className="custom-border my-2">
            <p className="m-0">Одбери слика</p>
          </div>
        </div>

        <div className="col-12 my-3">
          <form
            className="log-in-form"
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              handleUpdateUser(
                adressRef.current?.value!,
                contactNumberRef.current?.value!,
                biography
              );
            }}>
            <label htmlFor="name">Име</label>
            <input type="text" id="name" placeholder="Ивана" ref={nameRef} />

            <label htmlFor="surname">Презиме</label>
            <input
              type="text"
              id="surname"
              placeholder="Голабоска"
              ref={lastnameRef}
            />

            <label htmlFor="email">Емаил адреса</label>
            <input
              type="email"
              id="email"
              placeholder="example@example.com"
              ref={emailRef}
            />

            <label htmlFor="password">Лозинка</label>
            <input
              type="password"
              id="password"
              placeholder="************"
              ref={passwordRef}
            />

            <Link href={"/profile/change-password"}>
              <p className="mb-2 skip text-dark">Промени лозинка</p>
            </Link>

            <label htmlFor="adress">Адреса</label>
            <input
              type="text"
              id="adress"
              placeholder="ул.Пере Тошев бр.25"
              ref={adressRef}
            />

            <label htmlFor="number">Телефонски број</label>
            <input
              type="number"
              id="number"
              placeholder="пр: 075/123-145"
              ref={contactNumberRef}
            />

            <label htmlFor="biography">Биографија</label>
            <textarea
              name="biography"
              id="biography"
              placeholder="Нешто за тебе.."
              value={biography}
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                setBiography(event.target.value);
              }}></textarea>

            <div className="d-flex jusrify-content-start my-3">
              <img
                src="/check-mark.png"
                alt=""
                className="mr-1"
                style={{ width: "20px", height: "20px" }}
              />
              <p style={{ fontSize: "13.6px" }}>
                Испраќај ми известувања за нови зделки и промоции.
              </p>
            </div>

            <button className="register-btn mb-5">Зачувај</button>
          </form>
        </div>
      </Wrapper>
    </>
  );
};

export default ProfilePage;
