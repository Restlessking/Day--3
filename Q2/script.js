// Display all the country Flags:-

const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();

function reqListener() {
  let Result = JSON.parse(this.responseText);
  //   console.log(Result);

  //For of loop:-
  for (let country of Result) {
    console.log(country.name.common+" "+"Flag:" + " " + country.flags.png);
  }

  // For loop:-
//   for (let i = 0; i < Result.length; i++) {
//     console.log(Result[i].name.common+" "+"Flags:" + " " + Result[i].flags.png);
//   }
}
