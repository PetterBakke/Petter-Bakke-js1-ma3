// Question 2
const url = "https://api.rawg.io/api/games?key=7bd6b93e5f774b79b841954c345574d4&dates=2019-01-01,2019-12-31&ordering=-rating";

let loading = true;

const resultsdiv = document.querySelector(".all-results");
const loadingdiv = document.querySelector(".loading");


async function getGames() {
  const response = await fetch(url);

  return response.json();
};

getGames(url)
.then(data => {
  console.log(data);

  for(let i = 0; i < 8; i++) {
    console.log(data.results[i]);
    console.log(data.results[i].name);
    console.log(data.results[i].tags.length);
    console.log(data.results[i].rating);
    let html ="<div><h2> " + data.results[i].name + "</h2>" ;
    html += "Tags: " + data.results[i].tags.length;
    html += " | Rating: " + data.results[i].rating + "</div>";
    resultsdiv.innerHTML += html;
  }
  loading = false; 
  if(loading === false){
    loadingdiv.style.display = "none"
  }
})
.catch(error => {
  console.error("Error:", error)
});

