const vehicleTemplate = document.querySelector(".vehicleTemplate");
const TemplateForUsers = Handlebars.compile(vehicleTemplate.innerText);

const elemCars = document.querySelector(".cars");
const elemMake = document.querySelector(".make");
const elemColor = document.querySelector(".color");

axios.get("http://api-tutor.herokuapp.com/v1/cars").then((result) => {
  const cars = result.data;

  elemCars.innerHTML = TemplateForUsers({
    cars,
  });
});

axios.get("http://api-tutor.herokuapp.com/v1/colors").then((result) => {
  const color = result.data;

  elemColor.innerHTML = TemplateForUsers({
    color,
  });
});

axios.get("http://api-tutor.herokuapp.com/v1/make").then((result) => {
  const brand = result.data;

  elemMake.innerHTML = TemplateForUsers({
    brand,
  });
});
