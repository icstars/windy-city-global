'use strict'

$(document).ready(function(){
	$('#hiddenMessageBtn').click(function(val){
		var name = $('#name').val();
		$('#hiddenMessage').show();
		$('#insertName').html(name);
	});
});
