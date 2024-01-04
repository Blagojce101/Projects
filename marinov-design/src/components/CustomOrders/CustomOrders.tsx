import React from 'react';
import style from "./style.module.css";

export interface Image {
    id: number;
    imageUrl: string;
  }
  export interface CustomOrdersProps {
    images: Image[];
  }

const CustomOrders: React.FC<CustomOrdersProps> = ({images}) => {
  return (
    <div className={style.CustomOrders}>
        <div className={style.CustomOrdersTitle}><h1>Custom Made</h1></div>
        <div className={style.Container}>
            <h5>You dream it, we'll make it!</h5>
            <p>Whether it's a piece of jewelry, an ornament or something entirely your own, share your idea with us and we'll do our best to bring it to life.</p>
            <p>Don't forget to attach photos or provide a link from the internet to help us better understand your vision.</p>
            <p>Once we receive your request, we'll reach out to discuss all the details with you.</p>
            <img src="/images/icon-svgs/Group 23.svg" alt="" />

            <form>
                <label htmlFor="name">Name <small>(optional)</small></label>
                <input type="text" placeholder='Your name here...'/>
                <label htmlFor="email">Email <small>(required)</small></label>
                <input type="email" name="email" placeholder='Your email address here...'/>
                <label htmlFor="message">Message<small>(required)</small></label>
                <textarea name="message" placeholder='Your message here...'></textarea>
                <label htmlFor="uploadImage">Upload Image <small>(optional)</small></label>
                <button className={style.AttachImg}>+ Attach Images</button>
                <label htmlFor="sendLink">Send Link <small>(optional)</small></label>
                <input type="text" placeholder='https://www.example.com'/>
                <p>* Due to the nature of handcrafted products, keep in mind that the replicated piece may not appear exactly as shown on the photos. However, we will try our best to ensure it closely resembles the original!</p>
                <button type='submit' className={style.Submit}>Send Request</button>
            </form>

        </div>
        <div className={style.GalleryDiv}>
          <h3>Gallery</h3>
          <div>
          {images && images.length > 0 ? (
            images.map((image) => (
              <img key={image.id} src={image.imageUrl} alt='' />
            ))
          ) : (
            <p>No images found</p>
          )}
          </div>
        </div>
    </div>
  )
};

export default CustomOrders