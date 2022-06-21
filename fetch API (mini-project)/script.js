console.log("This is a fetch covid-19 tracker API demo")

// for console log

// fetch('	https://data.covid19india.org/v4/min/data.min.json').then((apidata) => {
//      console.log(apidata); //getting data
// return apidata.json(); 
// }).then((actualdata) => { //showing data
//      console.log(actualdata); // complete data of india
//      console.log(actualdata.GJ); //data of gujarat
//      console.log(actualdata.GJ.districts);//all districts 
//      console.log(actualdata.GJ.districts.Rajkot); //rajkot district.

// }).catch((error)=> { //catchung error if any
//      console.log(error);
// });





// For showing in browser

fetch('	https://api.covid19api.com/summary')
.then((apidata) => {
            //  console.log(apidata); //getting response
   return apidata.json();              
})
.then((actualdata)=> {
               //  console.log(actualdata);
                 console.log(actualdata.Countries[77]);
   const myData = actualdata.Countries[77];

    document.getElementById('covid-data').innerHTML= `The name of the country is ${myData.Country}.  Total Confirmed Cases is ${myData.TotalConfirmed} 
     , Total Deaths: ${myData.TotalDeaths} and Total Reovered: ${myData.TotalRecovered} `;
})
.catch((error) => {
  console.log(`Error is: ${error}`);
});