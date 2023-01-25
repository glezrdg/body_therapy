import { Galleria } from "primereact/galleria";

import { useState, useEffect } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
const Home = () => {
  const [images, setImages] = useState([
    {
      itemImageSrc: "../../home_slide_1.jpg",
      thumbnailImageSrc: "../../home_slide_1.jpg",
      alt: "Description for Image 1",
      title: "Title 1",
    },
    {
      itemImageSrc: "../../home_slide_2.jpg",
      thumbnailImageSrc: "../../home_slide_2.jpg",
      alt: "Description for Image 2",
      title: "Title 2",
    },
    {
      itemImageSrc: "../../terapias-naturales.jpg",
      thumbnailImageSrc: "../../terapias-naturales.jpg",
      alt: "Description for Image 3",
      title: "Title 3",
    },
    {
      itemImageSrc: "../../home_slide_3.jpg",
      thumbnailImageSrc: "../../home_slide_3.jpg",
      alt: "Description for Image 3",
      title: "Title 3",
    },
  ]);

  // useEffect(() => {
  //   galleriaService.getImages().then((data) => setImages(data));
  // }, []);
  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 5,
    },
    {
      breakpoint: "768px",
      numVisible: 3,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
    },
  ];
  const itemTemplate = (item) => {
    return (
      <img
        src={`images/${item.itemImageSrc}`}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        alt={item.alt}
        style={{ width: "80vw", height: "65vh" }}
        className="rounded-t-lg "
      />
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <img
        src={`images/${item.thumbnailImageSrc}`}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        alt={item.alt}
        className=" h-14"
      />
    );
  };

  return (
    <div className="flex flex-col items-center ">
      <Galleria
        value={images}
        responsiveOptions={responsiveOptions}
        numVisible={5}
        style={{
          maxWidth: "80vw",
        }}
        showItemNavigators
        showThumbnails={false}
        item={itemTemplate}
        thumbnail={thumbnailTemplate}
        className=" shadow-xl shadow-stone-600 "
        circular
        autoPlay
        transitionInterval={2500}
      />

      <button className="px-6 py-3 bg-green-700 shadow-lg rounded-md text-stone-100 text-xl mt-10 text-center">
        Reserva tu cita!
      </button>
    </div>
  );
};

export default Home;
