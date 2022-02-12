//Function to display the location in map and marker with a popup

function initMap(){
  //Coordinate plotting section
  const loc = { lat: 22.575511932, lng: 88.450668335 };
  const map = new google.maps.Map(
    document.getElementById("map"),
    {
      zoom: 13,
      center: loc,
    }
  );

  //Popup section
  const contentString = '<h1> WELCOME !! YOUR DEVICE IS HERE </h1>';

  const infowindow = new google.maps.InfoWindow({
    
    content: contentString,
  });

  //Marker section
  const marker = new google.maps.Marker({
    position: loc,
    map,
    title: "Device Location",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });
}
