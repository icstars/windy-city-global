'use strict'

var htmlTableRow = function (train) {
	return `<tr><td>${train.trainnumber}</td><td>${train.linecolor}</td><td>${train.inservice}</td></tr>`
}

$(document).ready(function(){
	$.get('/trains/data', function(trainData){
		console.log(trainData);
		var tableHTMLString = trainData.map(htmlTableRow).join('');
		$('#trainData').html(tableHTMLString);
	});
});
