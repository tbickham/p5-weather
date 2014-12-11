$(document).ready(function(){
	var deg = $('h1.currentTemp').text();

	$.simpleWeather({
		location: 'Spokane, WA',
		woeid: '',
		unit: 'f',
		success: function(weather){
			$('h1.currentTemp').text(weather.temp + deg + weather.units.temp);
			$('img.weatherIcon').attr("src", weather.image);
			$('h2.condition').text(weather.currently);
			$('h2.highTemp').text('High: ' + weather.high + deg + weather.units.temp);
			$('h2.lowTemp').text('Low: ' + weather.low + deg + weather.units.temp);
			console.log(weather);
		}
	});

	$('div.button').click(function(){
		console.log($('input.newLocation').val());
		$.simpleWeather({
			location: $('input.newLocation').val(),
			woeid: '',
			unit: 'f',
			success: function(weather){
				$('h1.currentTemp').text(weather.temp + deg + weather.units.temp);
				$('img.weatherIcon').attr("src", weather.image);
				$('h2.condition').text(weather.currently);
				$('h2.highTemp').text('High: ' + weather.high + deg + weather.units.temp);
				$('h2.lowTemp').text('Low: ' + weather.low + deg + weather.units.temp);
			},
			error: function(error){
				$('input.newLocation').val('Invalid Location');
			}
		});
	});
});