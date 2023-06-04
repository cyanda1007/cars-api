const vehicleTemplateText = document.querySelector(".vehicleTemplate");
const userTemplate = Handlebars.compile(vehicleTemplateText.innerText);
const colorsTemplateSource = document.querySelector(".colorsTemplate");
const colorsTemplate = Handlebars.compile(colorsTemplateSource.innerHTML);
const brandsTemplateSource = document.querySelector(".brandsTemplate");
const brandsTemplate = Handlebars.compile(brandsTemplateSource.innerHTML);
const carsElem = document.querySelector(".cars");
const makeElem = document.querySelector(".make");
const colorElem = document.querySelector(".colors");
axios.get("https://api-tutor.herokuapp.com/v1/cars").then((result) => {
  const cars = result.data;
  carsElem.innerHTML = userTemplate({ cars });
});
axios
  .get("https://api-tutor.herokuapp.com/v1/colors")
  .then(function (response) {
    const colorsElem = document.querySelector(".colors");
    colorsElem.innerHTML = colorsTemplate({ colors: response.data });
  });
axios.get("https://api-tutor.herokuapp.com/v1/makes").then(function (response) {
  const brandsElem = document.querySelector(".brands");
  brandsElem.innerHTML = brandsTemplate({ brands: response.data });
});
