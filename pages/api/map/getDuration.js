const getDuration = async (req, res) => {
    console.log(req);
    const mapboxUrl = `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${req.body.pickupCoordinates};${req.body.dropoffCoordinates}.json?access_token=pk.eyJ1Ijoic2FnYXJsbTEwIiwiYSI6ImNsMGpyMGZpODAzYjUzZHM4djk1bjUzNmkifQ.uIUHmBUBgKAAUvX1LC7org`;
    console.log(mapboxUrl);
  try {
    const response = await fetch(mapboxUrl);
    const data = await response.json();

    res.status(200).send({ message: "success", data: data.routes[0].duration });
  } catch (error) {
    res.status(500).send({ message: "error", data: error.message });
  }
};

export default getDuration;
