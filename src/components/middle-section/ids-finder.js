export const idsFinder = (geojson) => {
  const listOfCountObjs = geojson.features;
  const numberOfCounties = listOfCountObjs.length;
  let selectedCountIds = [];

  let counter = 0;
  while (counter < 150) {
    selectRandom(selectedCountIds, numberOfCounties, listOfCountObjs);
    counter++;
  }
  //   console.log(selectedCountIds);
  return selectedCountIds;
};

const selectRandom = (selections, numberOfCounties, listOfCountObjs) => {
  const randomNum = Math.floor(Math.random() * numberOfCounties);
  const countyID = listOfCountObjs[randomNum].properties.GEOID;
  if (selections.includes(countyID)) {
    selectRandom(selections, numberOfCounties, listOfCountObjs);
    return;
  }
  selections.push(countyID);
  return selections;
};
