import Carousel from "react-bootstrap/Carousel";
import style from "./style.module.css";

export interface ImageProps {
  imageUrl: string;
  id: number;
}

export interface CarouselProps {
  images: ImageProps[];
}

const CarouselComponent: React.FC<CarouselProps> = (props) => {
  const { images } = props;

  return (
    <Carousel className={style.Carousel}>
      {images.map((img) => (
        <Carousel.Item key={img.id}>
          <img className="d-block w-100" src={img.imageUrl} alt="" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
