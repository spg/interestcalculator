$(document).ready(function(){
	calculate();

	$("#montant, #i, #N").keyup(function() {
		calculate();
	});

	$("#methode").change(function() {
		calculate();
	});
});

function calculate(){
	var methode = $('#methode').find(":selected").text();

	var montant = $("#montant").val();
	var i = $("#i").val()/100;
	var N = $("#N").val();

	var result;
	var facteur;
	
	switch (methode) {
		case "F/P":
		facteur = Math.pow((1 + i), N);
		break;
		case "P/F":
		facteur = Math.pow((1 + i), -N);
		break;
		case "F/A":
		facteur = ((Math.pow(1+i, N))-1)/i;
		break;
		case "A/F":
		facteur = i/((Math.pow(1+i, N))-1);
		break;
		case "P/A":
		facteur = (Math.pow(1+i, N) - 1)/(i*Math.pow(1+i, N));
		break;
		case "A/P":
		facteur = ap(i, N);
		break;
		case "A/G":
		facteur = pg(i, N)*ap(i, N);
		break;
		case "P/G":
		facteur = pg(i, N);
		break;
	}

	$("#result").html(montant * facteur);
	$("#facteur").html(facteur);
}

function ap(i, N){
	return (i*Math.pow(1+i, N))/(Math.pow(1+i, N) - 1);
}

function pg(i, N){
	return (Math.pow(1+i, N) - i*N - 1)/(i*i*Math.pow(1+i, N));
}