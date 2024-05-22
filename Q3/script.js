// Display all the country names,region,subregion and population:-

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();

function reqListener() {
  let Result = JSON.parse(this.responseText);
  //   console.log(Result);

  //For of loop:-
  for (let country of Result) {
    console.log(
      "Country Name:" +
        " " +
        country.name.common +
        "\n" +
        "Region:" +
        " " +
        country.region +
        "\n" +
        "Subregion:" +
        " " +
        country.subregion +
        "\n" +
        "Population:" +
        " " +
        country.population
    );
  }

  // For loop:-
  // for (let i = 0; i < Result.length; i++) {
  //   console.log(
  //     "Country Names:" +
  //       " " +
  //       Result[i].name.common +
  //       "\n" +
  //       "Region:" +
  //       " " +
  //       Result[i].region +
  //       "\n" +
  //       "Subregion:" +
  //       " " +
  //       Result[i].subregion +
  //       "\n" +
  //       "Populatiom:" +
  //       " " +
  //       Result[i].population
  //   );
  // }
}
