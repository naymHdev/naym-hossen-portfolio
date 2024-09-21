const RouteTitle = ({ firstP, secondP }) => {
  return (
    <div>
      <h2 className="text-2xl md:text-4xl font-semibold text-title">
        {firstP} <span className="text-primaryColor">{secondP}</span>
      </h2>
    </div>
  );
};

export default RouteTitle;
