
console.log('check');
var TITLE = ``;

function deleteMovie(index,moviename,identifier,collectionList){
	let d,dd;
	console.log('sdsad');
	for(let i=0;i<collectionList.length;i++){
		if(collectionList[i].id==index){
			d=i;
			break;
		}
	}
	let movies = collectionList[d].movies;

	for(let i=0;i<movies.length;i++){
		if(movies[i]==moviename){
			dd = i;
			break;
		}
	}
	collectionList[d].movies.splice(dd,1);

	let element = document.getElementById(identifier);
	element.style.display = "none";
	console.log(collectionList);
	return collectionList;
}

export function editCollection2(collectionList){
	console.log(TITLE);
	let newTitle = document.getElementById('updatedCollectionName').value;
	for(let i=0;i<collectionList.length;i++){
		if(collectionList[i].title==TITLE){
			collectionList[i].title = newTitle;
			break;
		}
	}
	document.getElementById('updatedCollectionName').value = "";
	console.log(collectionList);
	//let element = document.getElementById('hide2')
	//element.innerHTML = "Collection's Name changed";
	alert("Collection's Name changed");
	return collectionList;
}

function editCollection(title,identifier,collectionList){
	console.log(title);
	TITLE = title;
	return collectionList;
}

function deleteCollection(index,identifier,collectionList){

	let d;
	for(let i=0;i<collectionList.length;i++){
		if(collectionList[i].id==index){
			d = i;
			break;
		}
	}
	collectionList.splice(d,1);
	console.log(collectionList);
	let element = document.getElementById(identifier);
	element.style.display = "none";
	return collectionList;
}


function listMoviesInCollection(n,collectionList){
	console.log('dekho');
	let element = document.getElementById('iid');
	let d,i;

	for(i=0;i<collectionList.length;i++){
		if(collectionList[i].id==n){
			d = i;
			break ;
		}
	}

	let htmlString = ``;
	if(collectionList[d].movies.length==0){
		htmlString += `<p>No Movies in Collection</p>`;
		console.log(htmlString);
		element.innerHTML = htmlString;
	}

	else{
		htmlString += `<ol>`;
		for(i=0;i<collectionList[d].movies.length;i++){
			let str = collectionList[d].movies[i];
			console.log(str);
			htmlString += `<li id='i${i}'><strong>${collectionList[d].movies[i]}<strong>`;
			htmlString += `<button id='z${i}' type="button" class="btn btn-default pull-right">
          		<span class="glyphicon glyphicon-trash" ></span> 
        		</button></li><hr>`;
		}
		htmlString += `</ol>`;
		console.log(htmlString);
		element.innerHTML = htmlString;

		for(i=0;i<collectionList[d].movies.length;i++){
			let t = `z${i}`;
			let tee = `i${i}`;
			let moviedelete = document.getElementById(t);
			moviedelete.onclick = function(){
 	       		collectionList = deleteMovie(collectionList[d].id,collectionList[d].movies[i],tee,collectionList);
			}	
		}
	}
	return collectionList;

}

export function collectionPage(collectionList){

	let element = document.getElementById('Collectionsdisplay');
	let htmlString = ``;

	if(collectionList.length==0){
		htmlString += `<p>No Collections</p>`;
		htmlString += `<button type="button" class="btn btn-default" data-toggle="modal" data-target="#myModal2" data-dismiss="modal">Create New collection</button>`;
		element.innerHTML = htmlString;
	}
	
	else{
		htmlString += `<ul>`;
		for(let i=0;i<collectionList.length;i++){
			htmlString += `<li id="iid${i}"><button type="button" id="xid${i}" class="btn btn-info" data-toggle="collapse" data-target="#iid" ">${collectionList[i].title}</button>`
		//htmlString += `<input type="submit" value="Delete">`;
			htmlString += `<button type="button"  id="yid${i}" class="btn btn-default pull-right"  >
          		<span class="glyphicon glyphicon-trash"></span> 
        		</button>`;
        	htmlString += `<button type="button"  id="zid${i}" class="btn btn-default pull-right" data-toggle="modal" data-target="#myModal4" data-dismiss="modal">
          		<span class="glyphicon glyphicon-edit"></span> 
         		</button></li><hr>`;
		}

		htmlString += `</ul>`;
		htmlString += `<div id="iid" class="collapse"></div>`
		element.innerHTML = htmlString;

		let listIDs = [] ;
		for(let i=0;i<collectionList.length;i++){
			listIDs.push(collectionList[i].id);
		}

		for(let i=0;i<collectionList.length;i++){
			let t = `xid${i}`;
			let tee = `iid${i}`;
			let collectiondetail = document.getElementById(t);
			collectiondetail.onclick = function(){
 	       		collectionList = listMoviesInCollection(collectionList[i].id,collectionList);
			}	

			let tt = `yid${i}`;
			let collectionedit = document.getElementById(tt);
			collectionedit.onclick = function(){
 	       		collectionList = deleteCollection(listIDs[i],tee,collectionList);
			}	

			let ttt = `zid${i}`;
			let collectiondelete = document.getElementById(ttt);
			collectiondelete.onclick = function(){
 	       		collectionList = editCollection(collectionList[i].title,tee,collectionList);
			}	

		}
	}
	return collectionList;
}

function addMovieToCollection(id,movieName,collectionList,collectionName){

	console.log(movieName);
	console.log(collectionName);

	for(let i=0;i<collectionList.length;i++){
		if(collectionList[i].title==collectionName){
			collectionList[i].movies.push(movieName);
		}
	}
	console.log(collectionList);

	let btn = document.getElementById(`cid${id}`);
	btn.innerHTML = 'Added' ;
	return collectionList ;

}

export function addNewCollection(count , collectionList){

	console.log('ghusa');
	alert('Added');

	let collectionName = document.getElementById('newCollectionName').value;
	//var collectionbtn = document.getElementById('newCollectionbtn');
	//let modal = document.getElementById('hideModal');
	//modal.innerHTML = `<p>Created</p>`;

	count++;
	let dict ={} ;

	dict["id"] = count;
	dict["title"] = collectionName;
	dict["movies"] = [];

	collectionList.push(dict);
	console.log(collectionList);
	document.getElementById('newCollectionName').value = "";
	//setTimeOut(alert('New Collection Added'),100);
	//alert('New Collection Added');
	return [count , collectionList];
}

export function fun(str,collectionList){

	console.log(str);
	let modalbody = document.getElementById("Collectionslist");
	//var htmlString = `<div class="btn-group">`;
	let htmlString = ``;

	for(let i=0;i<collectionList.length ;i++){
		htmlString += `<button type="button" id="cid${i}" class="btn btn-primary" onclick="addMovieToCollection('${i}','${str}','${collectionList[i].title}')">Add to '${collectionList[i].title}'</button>`;

	}

	if(collectionList.length == 0) htmlString += `<p>You have not created any collection</p>`;
	htmlString += `<button type="button" class="btn btn-default" data-toggle="modal" data-target="#myModal2" data-dismiss="modal">Create New collection</button>`;

	//htmlString +=`</div>`;

	modalbody.innerHTML = htmlString;

	for(let i=0;i<collectionList.length;i++){
		let t = `cid${i}`;
		let collectionBtn = document.getElementById(t);
		collectionBtn.onclick = function(){
 	       collectionList = addMovieToCollection(i,str,collectionList,collectionList[i].title);
		}
	}
    return collectionList;
}

/*<div class="btn-group">
  <button type="button" class="btn btn-primary">Apple</button>
  <button type="button" class="btn btn-primary">Samsung</button>
  <button type="button" class="btn btn-primary">Sony</button>
</div>*/