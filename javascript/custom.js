// this is using async/await
async function getLyrics(e){
     e.preventDefault();
    var songName = $("#song-name").val();
    var artistName = $("#artist-name").val();
    console.log(artistName);
    console.log(songName);
     let response = await fetch(`https://api.lyrics.ovh/v1/${artistName}/${songName}`);
     let data = await response.json();
     console.log(data);
     $(".empty-space").text(data.lyrics);
 }

//  this is using .then 
//  fetch(`https://api.lyrics.ovh/v1/${artistName}/${songName}`)
//  .then(response => response.json())
//  .then(data => {
    //  $(".empty-space").text("loading...")
    //   console.log(data);
    //  $(".empty-space").text(data.lyrics);

$("form").on("submit",function(e){
$(".empty-space").text("loading...")
  getLyrics(e);
});
