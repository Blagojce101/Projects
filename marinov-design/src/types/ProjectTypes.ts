export interface IProductProps {
    id: string;
    deliveryAdress?: number;
    images: string[];
    price: string;
    name: string;
    category: string;
    brand: string;
    accessory: string;
    size: string;
    color: string;
    click: () => void;
  }
export interface CountryType {
    name: {
        common:string,
    },
    flags:{
        png:string
    },
    cca2:string,
    population:number
}
