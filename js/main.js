// searchbar handler
$(function () {
	var searchField = $('#query');
	var icon = $('#search-btn');

	// focus event handler
	$(searchField).on('focus', function() {
		$(this).animate ({
			width: '100%'
		}, 400);
		$(icon).animate( {
			right: '10px'
		}, 400);
	});

    $('#search-form').click(function(e) {
		e.preventDefault();
	});
	$('#query').empty();
	});

//Javascript, jQuery
	function getData() {

	var input = $('#query').val()
	var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=V89j0MHE98pw2xhPi1oe5pK5zO94n8Q2&limit=15");

	if(input === "") {
		alert("Oops, you need to type something!")
	}
	else {
		xhr.done(function(data) { 
			console.log("success got data", data); 

			var gifs = data.data
			for (i in gifs) {
				$('#success').append('<img src=' + gifs[i].images.original.url + '>')
			};
		});
	};
};
