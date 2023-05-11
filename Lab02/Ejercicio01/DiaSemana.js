function diaSemana(n){
	const d = new Date();
	let number = d.getDay();
	var daytext;
	switch(number){
		case 0: daytext="Domingo";
			break;
		case 1: daytext="Lunes";
			break;
		case 2: daytext="Martes";
			break;
		case 3: daytext="Miercoles";
			break;
		case 4: daytext="Jueves";
			break;
		case 5: daytext="Viernes";
			break;
		case 6: daytext="Sabado";			
	}
	return daytext
}
