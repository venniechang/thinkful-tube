const url = "https://www.googleapis.com/youtube/v3/search"

function handleSubmit(){
	$(".js-search-form").on("submit", function(e){
		e.preventDefault();
		const searchTerm = $(".jquery-text").val();
		getYoutubeData(searchTerm, showResults)
	})
}

function getYoutubeData(search, callback) {
	const params = {
		part: "snippet",
		key: "AIzaSyBoH3ob0S7PoeyFy_OswhXE4hPMTKrDtA8",
		q: search
	}
	$.getJSON(url, params, callback)
}

function showResults(data){
	console.log(data);
}
handleSubmit();