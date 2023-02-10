const Card = ({ url }) => {
  console.log(url);
  return (
    <div
      className={` h-72  w-72 grid place-content-center  bg-cover `}
      style={{ background: `${url}` }}
    >
      <h1 className="text-3xl font-semibold text-white">ACUPUNTURA</h1>
    </div>
  );
};

export default Card;
