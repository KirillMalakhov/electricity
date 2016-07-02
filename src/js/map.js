var map = new GMaps({
  div: '#map',
  lat: 59.924980,
  lng: 30.355118,
  scrollwheel: false  
});
var image = {
    url: '../svg/pin.svg',
    size: new google.maps.Size(66, 66),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(15, 50),
    scaledSize: new google.maps.Size(66, 66)
};
var bgimage = {
    url: '../images/pin-map.png'
}
map.addMarker({
  lat: 59.9233746,
  lng: 30.3419006,
  title: 'Lima',
  icon: image,
  infoWindow: {
    icon: bgimage,
    content: '<p>Вы всегда можете найти нас по адресу - ул. Правды 9</p><p>Или связаться по телефону - 980-44-35</p>'  
}
});