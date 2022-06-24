const Map = () => {
  const { REACT_APP_GOOGLE_API } = process.env;

  return (
    <div className="map-container">
      <iframe
        className="map-frame"
        title="contact_map"
        width={512}
        height={512}
        src={`https://www.google.com/maps/embed/v1/place?key=${REACT_APP_GOOGLE_API}&q=19.06011111,73.00280556`}
      ></iframe>
    </div>
  );
};

export default Map;
