import Wrapper from "@/Components/Wrapper";
import { UserContext } from "@/Context/userContext";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useRef } from "react";

const ChangePassword = () => {
  const { handleChangePassword } = useContext(UserContext);

  const router = useRouter();

  const newPasswordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Wrapper>
        <div className="col-12 mt-4 mb-1">
          <form
            className="log-in-form"
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              handleChangePassword(
                newPasswordRef.current?.value!,
                confirmPasswordRef.current?.value!
              );
              router.push("http://localhost:3000/profile");
            }}>
            <label htmlFor="old-password">Стара лозинка</label>
            <input
              type="password"
              id="old-password"
              placeholder="************"
            />

            <label htmlFor="new-password">Нова лозинка</label>
            <input
              type="password"
              id="new-password"
              placeholder="************"
              ref={newPasswordRef}
            />

            <label htmlFor="confirm-password">Повтори нова лозинка</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="************"
              ref={confirmPasswordRef}
            />

            <button className="register-btn my-3">Зачувај</button>

            <Link href={"/profile"}>
              <p className="m-0 skip text-dark mb-5">Откажи</p>
            </Link>
          </form>
        </div>
      </Wrapper>
    </>
  );
};

export default ChangePassword;
