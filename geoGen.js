const geoGen = () => {
  function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  let latitude_main = getRandomArbitrary(8, 34);
  let degree = getRandomArbitrary(1, 60);

  let latitude = `${latitude_main}\xB0${degree}'N`;

  let longitude_main = getRandomArbitrary(68, 97);

  let longitude = `${longitude_main}\xB0${degree}'E`;

  let coordinates = latitude + " " + longitude;

  console.log(coordinates);

  let lat_value = coordinates.slice(0, 2);

  let long_value = coordinates.slice(8, 10);

  if (
    (lat_value == 31 && long_value < 74) ||
    (lat_value == 28 && long_value < 70) ||
    (lat_value == 23 && long_value < 68)
  ) {
    console.log("Area is in Pakistan");
    geoGen();
  } else if (
    (lat_value == 24 && long_value > 88) ||
    (lat_value == 24 && long_value < 92) ||
    (lat_value < 26 && long_value == 88)
  ) {
    console.log("Area is in Bangladesh");
    geoGen();
  } else if (lat_value == 32 && long_value > 78) {
    console.log("Area is in Tibet");
    geoGen();
  } else if (lat_value == 28 && long_value > 80) {
    console.log("Area is in Nepal");
    geoGen();
  } else if (
    (lat_value == 19 && long_value < 72) ||
    (lat_value == 20 && long_value > 86)
  ) {
    console.log("Area is in Coast");
    geoGen();
  } else if (
    (lat_value < 24 && long_value == 91) ||
    (lat_value > 22 && long_value == 91)
  ) {
    return coordinates;
  } else {
    return coordinates;
  }
};

const location = geoGen();
console.log(location);
