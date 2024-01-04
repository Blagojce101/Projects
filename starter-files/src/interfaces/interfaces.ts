export interface AboutPageType {
  title1: string;
  title2: string;
  first_content: string;
  second_content: string;
  about_page_image: string;
}

export interface ContactPageType {
  contact_page_image: string;
  title1: string;
  title2: string;
  small_text: string;
  adress: string;
  contact: string;
  contact_number: string;
  work_time: string;
  monday_to_friday: string;
  weekend: string;
}

export interface ZsDaNePageType {
  title: string;
  zsdane_page_image: string;
  first_content: string;
  li_elements: [
    {
      id: number;
      content: string;
    },
    {
      id: number;
      content: string;
    },
    {
      id: number;
      content: string;
    },
    {
      id: number;
      content: string;
    }
  ];
  second_content: string;
  third_content: string;
}

export interface BrandType {
  id: number;
  brandName: string;
  brand_image: string;
  first_content: string;
  li_elements: [
    {
      id: number;
      content: string;
    },
    {
      id: number;
      content: string;
    },
    {
      id: number;
      content: string;
    },
    {
      id: number;
      content: string;
    }
  ];
  second_content: string;
  third_content: string;
}

export interface FAQPageType {
  title: string;
  stars_image: string;
  question: string;
  answer: string;
}

export interface CollapseType {
  text: string;
}

export interface GiftCardType {
  id: string;
  addToCart: boolean;
  title: number;
}

export interface ProductType {
  id: string;
  isFavourite: boolean;
  addToCart: boolean;
  brand: string;
  title: string;
  category: string;
  price: string;
  img: string;
  images: [string, string, string, string];
  description: string;
  sizeDescription: string;
  size: string;
  color: string;
  material: string;
  maintaining: string;
  dateCreated: string;
}

export interface UserType {
  image: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  adress: string;
  contactNumber: string;
  biography: string;
}
