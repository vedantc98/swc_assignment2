function validate_form() {
	var form = document.forms['main_form'];
	var name = form['booker'].value;
	var date = form['booking-date'].value;
	var from = form['booking_from'].value;
	var to = form['booking_to'].value;
	var ground = form['ground'].value;
	var activity = form['activity'].value;
	alert("HI");

	if (true) {
		alert("Name of booker must only be alphabetical");
		return false;
	}

	return true;

}