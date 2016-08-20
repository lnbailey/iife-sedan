var Sedan = (function(newSedan){
	var max_occupancy = 6;
	var current_occupancy = 0;

	newSedan.getOccupaney = function() {
		return current_occupancy;
	};

	newSedan.setOccupancy = function(occupancy) {
		current_occupancy = occupancy;
	}
	return newSedan;
	
})(Sedan || {});
