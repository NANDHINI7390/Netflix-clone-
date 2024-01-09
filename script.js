 window.onload=()=>{
  getOriginals()
  getTrending() 
  getToprated() 
  }
                                         
let domType=document.getElementById ("originals") 
let domType1=document.getElementById ("trending ") 
       
let domType2=document.getElementById ("topRated")
function fetchMovies(url, type, path) {
  
  fetch(url) 
 .then(res=>res. json()) 
 .then (res=> res. results) 
 .then(data =>{
  //  console.log (data)
    
    for(let movies of data) {
  
        
  let movieImg=document.createElement("img")
 
  movieImg.src=`https://image.tmdb.org/t/p/original${movies[path]}`
  domType.append(movieImg)
       
    
  
    movieImg.onclick=()=>  getTrailer(movies.id)
        
        
 
    
        
   } 

    
   }) 
   

.catch (error=>console.log(error)) 

 } 



function fetchMovies1(url, type, path) {
  
  fetch(url) 
 .then(res=>res. json()) 
 .then (res=> res. results) 
 .then(data =>{
    //console.log (data)
    
    for(let movies of data) {

      
  let movieImg1=document.createElement("img")
  movieImg1.src=`https://image.tmdb.org/t/p/original${movies[path]}`
  domType1.append(movieImg1)
      
    
  
  movieImg1.onclick=()=> getTrailer1(movies.id)
     
      } 
    
   }) 
   

.catch (error=>console.log(error)) 

 } 

  function fetchMovies2(url, type, path) {
  
  fetch(url) 
 .then(res=>res. json()) 
 .then (res=> res. results) 
 .then(data =>{
   // console.log (data)
    
    for(let movies of data) {
      

      
  let movieImg2=document.createElement("img")
  movieImg2.src=`https://image.tmdb.org/t/p/original${movies[path]}`

domType2.append(movieImg2)
    
  
    
   movieImg2.onclick=()=>  getTrailer2(movies.id)
    } 
    
   }) 
   

.catch (error=>console.log(error)) 

 }   
   
   

function getOriginals() {
  let url='https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213'
  fetchMovies(url,'.original__movies', 'poster_path') 
 } 

function getTrending() {
  let url='https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045'
  fetchMovies1(url,'#trending ', 'backdrop_path')
 } 
  
function getToprated(){
  let url='https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1 ' 
  fetchMovies2(url,'#top_Rated ', 'backdrop_path')
 } 
async function getTrailer(id) {
  var url=`https://api.themoviedb.org/3/movie/${id}/videos?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US`
  const response =await fetch(url)
  let data =await response.json() 
  let data1=await data.results[0]
  console.log (data1.key) 
 // movies.classList.add("movEl")
  
let Trailer =document.getElementById("iframe") 
 
  Trailer.innerHTML=`<iframe height ="150" width ="245" src="https://www.youtube.com/embed/${data1.key}" ></iframe >`
   
 } 

  async function getTrailer1(id) {
  var url=`https://api.themoviedb.org/3/movie/${id}/videos?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US`
  const response =await fetch(url)
  let data =await response.json() 
  let data1=await data.results[0]
  console.log (data1.key) 
 // movies.classList.add("movEl")
  
let Trailer1 =document.getElementById ("iframe1") 
 
  Trailer1.innerHTML=`<iframe height ="150" width ="245" src="https://www.youtube.com/embed/${data1.key}" ></iframe >`
   
 } 

 async function getTrailer2(id) {
  var url=`https://api.themoviedb.org/3/movie/${id}/videos?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US`
  const response =await fetch(url)
  let data =await response.json() 
  let data1=await data.results[0]
  console.log (data1.key) 
 // movies.classList.add("movEl")
  
let Trailer2 =document.getElementById ("iframe2") 
 
  Trailer2.innerHTML=`<iframe height ="150" width ="245" src="https://www.youtube.com/embed/${data1.key}"  allowfullscreen ></iframe >`
   
 } 
