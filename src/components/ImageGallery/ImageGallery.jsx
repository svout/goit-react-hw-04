import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, modalIsOpen, openModal, closeModal }) => {
  return (
    <ul
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        gap: "15px",
        paddingTop: "100px",
      }}
    >
      {images.map((image) => (
        <li key={image.id} >
          <ImageCard
            image={image}
            modalIsOpen={modalIsOpen}
            openModal={openModal}
            closeModal={closeModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
