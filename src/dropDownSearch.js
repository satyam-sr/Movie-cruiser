export function filteredSearch(q,moviesId){

const API_KEY = `bba03ad38004e3e05cb420aa0cdc0299`;

//btn.addEventListener("click", function() {
  let ourRequest = new XMLHttpRequest();
  let qval = q.toString().replace(/ /g,'%20') ;
  let mydata;
  console.log('wddd');
  console.log(qval);
  
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${qval}&page=1`)
       .then((res) => {
           res.json()
               .then((data) => {

                    mydata = data.results;
                    console.log(mydata);

                    let animalContainer = document.getElementById("animal-info");
                    let htmlString = `<datalist id='movieList'>`;

                    for (let i = 0; i < mydata.length; i++) {
                        let id = `aid${i}`;
                        let title = `${mydata[i].title}`;
                        let movieId = `${mydata[i].id}`;
                        htmlString += `<option value='${mydata[i].title}' >`; //id=${id} ><a href='#' > ${data[i].title} has an id of ${data[i].id}.</li>` ;
                        if(!moviesId[title]) moviesId[title] = movieId;
                    }

                    htmlString += `</datalist>`;

                    animalContainer.innerHTML = htmlString;

                }
               )
             });
//});

}