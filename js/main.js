$('.input').easyAutocomplete({
    url: "https://restcountries.com/v2/all?fields=name,flag",
    getValue: "name",
    list: {
		match: {
			enabled: true
		}
	},
    template: {
		type: "iconRight",
		fields: {
			iconSrc: "flag"
		}
	}
});
$("form").on('submit', function(e) {
	e.preventDefault();
	let countryName = $('.input').val();

	$.ajax({
		url: "https://restcountries.com/v2/name/" + countryName
	})
	.done((res) => {
		console.log(res);
	})
})
	
