const getLocationCoordinates = async (req, res) => {
  console.log(req);
  const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${req.body.location};${req.body.dropoffCoordinates}.json?access_token=pk.eyJ1Ijoic2FnYXJsbTEwIiwiYSI6ImNsMGpyMGZpODAzYjUzZHM4djk1bjUzNmkifQ.uIUHmBUBgKAAUvX1LC7org`;
  console.log(mapboxUrl);
  try {
    const response = await fetch(mapboxUrl);
    const data = await response.json();

    res.status(200).send({ message: "success", data: data.features[0].center });
  } catch (error) {
    res.status(500).send({ message: "error", data: error.message });
  }
};

export default getLocationCoordinates;
