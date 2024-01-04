import { IProductProps } from '@/types/ProjectTypes';
import React, { useEffect, useState } from 'react'

const PaymentInformation = () => {
  const [parsedObject, setParsedObject] = useState<IProductProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (typeof localStorage !== "undefined") {
        const storedObjects = localStorage.getItem("productsInCart");
        const parsedData = storedObjects ? JSON.parse(storedObjects) : [];
        setParsedObject(parsedData);
      }
    };

    fetchData();
  }, []);
  return (
    <div
    className="col-11 ml-auto mr-auto"
    style={{
      color: `#3c1913`,
      border: `1px solid #3c1913`,
      borderRadius: `32px 0px 32px 0px`,
    }}
  >
    <div className="p-2">
      <h2 className="pb-3 mt-3">Payment Information</h2>
      <p className="m-0">Merchant</p>
      <p className="pb-1" style={{ fontWeight: `700` }}>
        Marinov Design
      </p>
      <p className="m-0">Website</p>
      <p className="pb-1" style={{ fontWeight: `700` }}>
        www.marinovdesign.com
      </p>
      <p className="m-0">Amount</p>
      {
          parsedObject.map((prod)=> {
            return (
              <p className="pb-1" style={{ fontWeight: `700` }}>
        ${prod.price + 10}
      </p>
            )
          })
        }
      
    </div>
  </div>
  )
}

export default PaymentInformation
