const url = "https://www.googleapis.com/youtube/v3/search"


function handleSubmit(){
	$(".js-search-form").on("submit", function(event){
		event.preventDefault()
		const searchTerm = $(".jquery-text").val();
		getYoutubeData(searchTerm, displayYoutubeData);
	})
}

function getYoutubeData(search, callback) {
	const params = {
		part: "snippet",
		key: "AIzaSyBoH3ob0S7PoeyFy_OswhXE4hPMTKrDtA8",
		q: search,
		maxResults: 10
	}

	$.getJSON(url, params, callback)
}

function generateHTML(item){
	console.log(item);

	shorterTitle = item.snippet.title;
	if (item.snippet.title.length > 20) {
		shorterTitle = item.snippet.title.substring(0,20)+"...";
	}


	return (
		`<a class="js-result-name" href="https://www.youtube.com/watch?v=${item.id.videoId}" target="_blank">
			<h2>
				${shorterTitle}
			</h2>
			<img src="${item.snippet.thumbnails.medium.url}">
		</a>`
	);
}

function displayYoutubeData(data){
	console.log(data);
	const results = data.items.map((item, index) => generateHTML(item));
	$('.js-search-results').html(results);
}

$(handleSubmit);
