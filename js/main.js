(function() {
	"use strict";
	var filmUrl ;

	function StarWarsFetch() {
		var url = "https://swapi.dev/api/people/?format=json";

		fetch(url)
		.then(function(response){
			//console.log(response);
			return response.json();

		}).then(function(people){
			//console.log(people.results[0].cell);
			

			var peopleList = document.querySelector("#peopleList");

			for (var i=0; i< people.results.length; i++){
				peopleList.innerHTML +=
				'<li>' +
				`<a  id="${i}" href="#">`+ people.results[i].name + '</a>'
				'</li>';
			}
			var charName = document.querySelectorAll("#peopleList a");
			
			for (var i=0; i< charName.length; i++) {
				charName[i].addEventListener("click", function(e) {
					filmUrl = people.results[e.target.id].films[0];
					console.log(filmUrl);
					FilmFetch();
				}, false);
			}


		}).catch(function(error){
			console.log(error);
		});
	}

	StarWarsFetch();

	function FilmFetch() {
		console.log('FilmFetch');

		fetch(filmUrl)
		.then(function(response){
			//console.log(response);
			return response.json();
		}).then(function(film){
			var filmDetail = document.querySelector("#filmDetail");

            filmDetail.innerHTML = '<h2>Episode:'+film.episode_id+' '+film.title+' </h2>' +
            '<img id="poster" src="./images/'+film.episode_id+'.jpg" >'+ 
			'<h3>Opening Crawl: '+film.opening_crawl+'</h3>' 
			

		}).catch(function(error){
			console.log(error);
		});
	}
})();
