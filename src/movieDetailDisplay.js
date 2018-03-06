import {fun} from './collection.js';
export function movieDetailFun(moviesId,collectionList) {

    event.preventDefault();
    let q = document.getElementById("query");
    let movieDeatail = document.getElementById("detail");

    console.log('hgjhhjhlj');
    console.log(moviesId);
    //console.log(moviesId);
    console.log(q.value);
    let ID = moviesId[q.value];
    console.log(ID);


    let URL = `https://api.themoviedb.org/3/movie/${ID}?api_key=bba03ad38004e3e05cb420aa0cdc0299&language=en-US`;
    console.log(URL);

    fetch(URL)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log('data');
            console.log(data);
            console.log("sdfsfefdegthjuteyerwtyjutiy");

            let htmlString = `<div class='container' id='display'>`;

            htmlString += `<h2>`;
            htmlString += data.title;
            htmlString += `</h2>`;
            htmlString += `<img align='center' class='img-responsive' align='middle' height='200' width='200' src=https://image.tmdb.org/t/p/w500/${data.poster_path}></img>`
            htmlString += `<div class='pull-right' id='displaytext'>`
            htmlString += `<p> <strong> Description: </strong>${data.overview} </p>`;
            if (data.genres[0]) htmlString += `<p> <strong> Genre: </strong>${data.genres[0].name} </p>`;
            htmlString += `<p> <strong> Release Date: </strong>${data.release_date} </p>`;
            htmlString += `<button id='Collections' type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Add to Collections</button><hr>`
            htmlString += `</div></div>`

            movieDeatail.innerHTML = htmlString;
            let addToCollectionBtn = document.getElementById('Collections');
            addToCollectionBtn.onclick = function(){
                collectionList = fun(data.title,collectionList);
            }

        })
    /*res.json()
        .then((data) => {
          console.log('data');
          console.log(data);
             renderHTML(data);
            }
        )
      })*/

      return collectionList;
}