const Map = () => {
  const { REACT_APP_GOOGLE_API } = process.env;

  return (
    <div>
      <iframe title="contact_map"
      width={512}
      height={512}
        src={`https://www.google.com/maps/embed/v1/place?key=${REACT_APP_GOOGLE_API}&q=19.0694943,73.0017511`}
      ></iframe>
    </div>
  );
};

export default Map;
