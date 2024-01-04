import { useRouter } from "next/router";
import React from "react";

const MovingText = () => {
  const router = useRouter();

  const displayNoneRoutes =
    router.pathname === "/login" ||
    router.pathname === "/signup" ||
    router.pathname === "/signup/create-profile" ||
    router.pathname === "/signup/create-profile/profile-info" ||
    router.pathname === "/profile" ||
    router.pathname === "/profile/change-password";

  return (
    <>
      {!displayNoneRoutes && (
        <>
          <div className="moving-text d-flex justify-content-start py-2 border-dark border-top border-bottom">
            <div className="text-moving  d-flex justify-content-start">
              <p className="m-0 font-1">Нова Колекција</p>
              <img
                src="/vector.png"
                className="mx-2"
                style={{ width: "23.73px", height: "23.73px" }}
              />

              <p className="m-0 font-2">Valentines Winter Collection 2023</p>
              <img
                src="/vector.png"
                className="mx-2"
                style={{ width: "23.73px", height: "23.73px" }}
              />

              <p className="m-0 font-1">Нова Колекција</p>
              <img
                src="/vector.png"
                className="mx-2"
                style={{ width: "23.73px", height: "23.73px" }}
              />

              <p className="m-0 font-2">Valentines Winter Collection 2023</p>
              <img
                src="/vector.png"
                className="mx-2"
                style={{ width: "23.73px", height: "23.73px" }}
              />

              <p className="m-0 font-1">Нова Колекција</p>
              <img
                src="/vector.png"
                className="mx-2"
                style={{ width: "23.73px", height: "23.73px" }}
              />

              <p className="m-0 font-2">Valentines Winter Collection 2023</p>
              <img
                src="/vector.png"
                className="mx-2"
                style={{ width: "23.73px", height: "23.73px" }}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MovingText;
