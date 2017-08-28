// wait for DOM to load before running JS
$(document).ready( function() {

  // check to make sure JS is loaded
  console.log('JS is loaded!');
  let searchInput = 'Drake';
  let type = 'track' ;

$('form').on('submit', function () {
	//This function will get the information for the artist upon 
		event.preventDefault();
		let searchInput = $('#search').val();
		console.log(searchInput);	
 
  $('form')[0].reset() // for some reason this feature is not working 
  $('#results').empty();
 $.ajax({
    type: "GET",
    url: "https://api.spotify.com/v1/search",
    data: {
        q: searchInput,
        type: type
    },
    headers: {
        "Authorization": "Bearer BQAAjEwkvm5ZWHJhJLYzRqu2ojBvShZtbDJWIvnWy_BCZAUhbAEo1hWlS3aoDCurrBYj9OhUi8a0LCzjAtU7nQ"
    }
}).then(function (data) {
	
	let loaded = data.tracks.items;

	loaded.forEach(function(tracks){
		  let cover = tracks.album.images[1].url;
          let songName = tracks.name;
          let artistName = tracks.album.artists[0].name;
          let link= tracks.preview_url;





		$('#results').append(`<div class="col-xs-4">
			<div class="thumbnail">
			<img src="${cover}"><div class="caption">
			<h3><strong>${songName}</strong></h3>
			<p>by ${artistName}</p>
			<p><a class="btn" class="btn btn-default" role="button" href="${link}">
			<span class="glyphicon glyphicon-play glyphicon-align-right" aria-hidden="true"></span>
			Preview</a></p></div></div></div>`);

		console.log(tracks);

	});
   console.log(data);
}).catch(function (err) {

	console.log(err);

		});	

	});

});
