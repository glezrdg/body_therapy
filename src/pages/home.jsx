import { Galleria } from "primereact/galleria";

import { useState, useEffect } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import { IoLogoWhatsapp } from "react-icons/io";

// Utils
import { carouselImages } from "../utils/carouselImages";
import Section from "../components/Section";
import Card from "../components/Card";

const Home = () => {
  const [images, setImages] = useState(carouselImages);

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
        style={{ width: "40vw", height: "35vh" }}
        className=" "
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
      <div className="flex justify-center  items-center w-full h-[100vh] ">
        <div className="w-2/5 h-[40vh] ">
          <h1 className=" text-6xl font-semibold">
            Controla tu cuerpo, mente y alma.
          </h1>
          <p className="text-xl mt-5 w-4/5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            repellat at quos reprehenderit vel natus quisquam quam maxime e
          </p>
          <div className="flex mt-5 ">
            <button className="bg-lime-600 px-4 py-2 rounded-sm shadow-sm font-bold">
              Reserva tu cita
            </button>

            <a
              href="https://wa.me/18493409960"
              className="flex px-4 py-2 ml-10 items-center border border-black font-bold"
            >
              Escribenos
              <IoLogoWhatsapp className="ml-2" />
            </a>
          </div>
        </div>
        <Galleria
          value={images}
          responsiveOptions={responsiveOptions}
          numVisible={5}
          style={{
            maxWidth: "40vw",
          }}
          showItemNavigators
          showThumbnails={true}
          item={itemTemplate}
          thumbnail={thumbnailTemplate}
          className=" shadow-sm shadow-stone-600 "
          circular
          autoPlay
          transitionInterval={2500}
        />
      </div>

      <Section
        title="Controla tus emociones"
        reverse
        bg
        image="/svg/masaje.svg"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem velit
        eius quo, tempore sapiente quam modi nam commodi facere quis voluptatum,
        est quae ullam? Aliquid autem praesentium nostrum dolore corporis."
      />

      <Section
        title="Relaja la mente"
        image="/svg/meditando.svg"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem velit
        eius quo, tempore sapiente quam modi nam commodi facere quis voluptatum,
        est quae ullam? Aliquid autem praesentium nostrum dolore corporis."
      />
      {/* <Section
        title={"Transforma tu espiritu"}
        image="/svg/meditando.svg"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem velit
        eius quo, tempore sapiente quam modi nam commodi facere quis voluptatum,
        est quae ullam? Aliquid autem praesentium nostrum dolore corporis."
      /> */}
      <div className="h-[100vh] w-full bg-slate-200 grid grid-cols-4 place-items-center  p-28">
        <Card url="acupuntura.jpg" />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
