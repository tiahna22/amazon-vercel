import React, { useEffect, useState } from "react";

function LocationApi() {
  const [location, setlocation] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.ipdata.co/?api-key=a398e61f67573d65867b1d74aad51e31156cec2408d90c685b67ad17"
    )
      .then((response) => response.json())
      .then((data) => {
        const locationdata = data.country_name;
        setlocation(locationdata);
      });
  }, []);

  // console.log(location)
  const yourLocation = location;
//   https://ipdata.co/

  return (
  <div className="location">
    {yourLocation}
    </div>)
}

export default LocationApi;
