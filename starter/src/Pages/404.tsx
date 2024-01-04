import React from "react";

const ErrorPage = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center text-center">
        <div className="col-12 my-5 py-5">
          <h3 className="text-danger">404 page..</h3>
          <span className="bg-green">Page not found. Please try again.</span>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
