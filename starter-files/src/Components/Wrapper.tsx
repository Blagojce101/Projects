import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div
        className="container d-flex justify-content-center"
        style={{ minHeight: "90vh" }}>
        <div className="row">
          <div className="col-12">
            <div className="my-4 text-center">
              <Link href={"/"}>
                <img src="/Logo.png" alt="" style={{ maxWidth: "80%" }} />
              </Link>
            </div>
          </div>

          {children}
        </div>
      </div>
    </>
  );
};

export default Wrapper;
