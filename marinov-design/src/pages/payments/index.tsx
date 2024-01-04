import PaymentCardReview from "@/components/PaymentCardReview/PaymentCardReview";
import PaymentFooter from "@/components/PaymentFooter/PaymentFooter";
import { CountryType } from "@/types/ProjectTypes";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useRef } from "react";
interface Props {
  countries:CountryType[]
}

const PaymentsPage: NextPage<Props> = ({countries}) => {
const nameRef = useRef<HTMLInputElement>(null)
const emailRef = useRef<HTMLInputElement>(null)
const postalCodeRef = useRef<HTMLInputElement>(null)
const cityRef = useRef<HTMLInputElement>(null)
const selectCountryRef = useRef<HTMLSelectElement>(null)
const addressRef = useRef<HTMLInputElement>(null)

const route = useRouter()

const handlePayment = () => {
  if(nameRef.current?.value !== `` && emailRef.current?.value !== `` &&postalCodeRef.current?.value !== `` && cityRef.current?.value !== `` &&selectCountryRef.current?.value !== `` && addressRef.current?.value !== ``){
  route.push(`/payments/paymentsInformation`)
  }
}

  return (
    <div className="container-fluid" style={{backgroundColor:`#fbfaf8`}}>
      <div className="row pt-5 pb-3">
        <div className="col-12">
          <h1 style={{ fontSize: `48px`, color: `#3c1913` }}>
            Contact and Shipping Details
          </h1>
          <p className="small" style={{color: `#3c1913` }}>
            Have an account?{" "}
            <Link
              href={``}
              style={{
                textDecoration: `underline`,
                color: `#9b4923
              `,
              }}
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <form action="" className="d-flex flex-column" style={{color:`#3c1913`}} onSubmit={(event: React.FormEvent<HTMLFormElement>)=> {
            event.preventDefault()
            handlePayment()
          }}>
            <label htmlFor="">Full name</label>
            <input
              type="text"
              className="mb-3 py-2 pl-2"
              style={{
                background: `#f5f3f1
`,          
                border: `1px solid #3c1913`,
                color:`#000`
              }}
              placeholder="enter your full name here..."
              ref={nameRef}
            />
            <label htmlFor="">Email</label>
            <input
              type="email"
              className="mb-5 py-2 pl-2"
              style={{
                background: `#f5f3f1
`,
                border: `1px solid #3c1913`,
                color:`#000`
              }}
              placeholder="Your email address here..."
              ref={emailRef}
            />
            <label htmlFor="">Country</label>
            <select className="mb-3 py-2 pl-2" style={{color:`#000`, background: `#f5f3f1`,border: `1px solid #3c1913`,}} ref={selectCountryRef}>
              {
                countries.map((country)=> {
                  return (
                    <option  key={country.name.common} value={country.name.common}>
                      {country.name.common}
                    </option>
                  )
                })
              }
            </select>
            <label htmlFor="">Postal/ZIP Code</label>
            <input
              type="text"
              
              className="mb-3 py-2 pl-2"
              style={{
                background: `#f5f3f1
`,
                border: `1px solid #3c1913`,
                color:`#000`
              }}
              ref={postalCodeRef}
            />
            <label htmlFor="">City</label>
            <input
              type="text"
              className="mb-3 py-2 pl-2"
              style={{
                background: `#f5f3f1
`,
                border: `1px solid #3c1913`,
                color:`#000`
              }}
              ref={cityRef}
            />
            <label htmlFor="">Address</label>
            <input
              type="text"
              className="mb-5 py-2 pl-2"
              style={{
                background: `#f5f3f1
`,
                border: `1px solid #3c1913`,
                color:`#000`
              }}
              placeholder="Your street address here..."
              ref={addressRef}
            />
            <h1 style={{ fontSize: `48px`, color: `#3c1913` }}>Review Order</h1>
            <div className="col-12">
              <div className="row">
                <PaymentCardReview/>
              </div>
            </div>
            <button
                  type="submit"
                  className="w-100 btn mt-5"
                  style={{
                    borderRadius: `16px 0px 16px 0px`,
                    color: `#FBFAF8`,
                    background: `#3c1913`,
                  }}
                >
                  Proceed to Payment
                </button>
          </form>
        </div>
      </div>
      <div className="row" style={{ paddingTop: `150px` }}>
        <PaymentFooter />
      </div>
    </div>
  );
};

export default PaymentsPage;



export const getStaticProps: GetStaticProps = async () => {

  const res = await fetch(`https://restcountries.com/v3.1/all`)
  const countryData = await res.json();

  return {
    props: {
      countries:countryData
    }
  }
}