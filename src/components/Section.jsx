import React from "react";

function Section({ reverse, image, text, title, bg }) {
  return (
    <section
      className={`flex px-40 ${
        reverse && "flex-row-reverse"
      }  items-center h-[100vh] ${bg && "bg-slate-200"}`}
    >
      <img alt="meditando" src={image} className=" w-1/2" />

      <div
        className={`flex flex-col w-1/2 ${
          !reverse ? "text-right" : "text-left"
        }`}
      >
        <h2 className="text-5xl mb-4">{title}</h2>
        <p className={`w-full ${!reverse && "ml-auto"} leading-7 text-xl`}>
          {text}
        </p>
      </div>
    </section>
  );
}

export default Section;
