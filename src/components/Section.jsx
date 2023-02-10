import React from "react";

function Section({ reverse, image, text, title, bg }) {
  return (
    <section
      className={`flex ${
        reverse && "flex-row-reverse"
      } justify-around items-center h-[90vh] ${bg && "bg-slate-200"}`}
    >
      <img alt="meditando" src={image} className=" w-2/5" />

      <div className={`flex flex-col ${!reverse ? "text-right" : "text-left"}`}>
        <h2 className="text-2xl mb-4">{title}</h2>
        <p className={`w-3/4 ${!reverse && "ml-auto"} leading-7`}>{text}</p>
      </div>
    </section>
  );
}

export default Section;
