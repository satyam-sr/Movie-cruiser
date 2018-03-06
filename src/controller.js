import $ from 'jquery'
import {filteredSearch} from './dropDownSearch'
import {movieDetailFun} from './movieDetailDisplay'
import {addNewCollection, modal2view, collectionPage, editCollection2, editView} from './collection'
//import renderHTML from 'tmdb.js';

let moviesId = {} ;
let collectionList = [];
let count = 0 ;


$("#query").keyup(function(){
    filteredSearch($("#query").val(),moviesId);
});

$("#search-button").click(function(){
    collectionList = movieDetailFun(moviesId,collectionList);
});

$("#newCollectionbtn").click(function(){
    let essentials = addNewCollection(count,collectionList);
    console.log(essentials);
    count = essentials[0];
    collectionList = essentials[1];
});

$("#modal2").click(function(){
    modal2view();
});

$("#btnToRight").click(function(){
    collectionList = collectionPage(collectionList);
});

$("#updatedCollectionbtn").click(function(){
    collectionList = editCollection2(collectionList);
});

$("#change").click(function(){
    editView();
});