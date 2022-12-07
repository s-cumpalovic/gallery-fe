import Carousel from "react-bootstrap/Carousel";

export default function CarouselComponent({ images }) {
  return (
    <Carousel>
      {images.map((image) => (
        <Carousel.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <img
              key={image.id}
              className="d-block w-50"
              src={image.image_url}
              alt={image.title}
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
