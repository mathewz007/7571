
function recordFlight() {
	// getting input values 

	var flightnumber = document.getElementById("flight").value;
	var miles = document.getElementById("miles").value;

	localStorage.setItem(flightnumber,miles);

	console.log(localStorage)

//create variable to hold data
			var flightmiles = [];
			if(localStorage.getItem('flightnumber'))
			{
				flight = parse(localStorage.getItem('flightnumber'));
			}
			// duplicate check 

				if( !checkDuplicate(flightnumber))
				{
					//  need to fix 
					//var newEntry = flightnumber,miles
					
					document.getElementById("flyingmiles").innerHTML= myTable(flight);;
					
					//save the data the local storage
					localStorage.setItem(flightnumber,miles);
					document.getElementById("result").innerHTML = '<p>'+calculateMembership()+'</p>';
				}
				else
					document.getElementById("msg").innerHTML = "<p <strong>You have entered a flight number that already exists.Please re-enter.</strong></p>"
		
}


function myTable(flight){
	
Table =" " ;
Table += '<table>';
Table += '<tr><th>Flight Number</th><th>Number of Miles Flown</th></tr>';
		for(var i=0; i<flight.length; i++)
			{
				Table += '<tr><td>'+flight.flightNumber+'</td><td>'+flight.miles+'</td></tr>';
			}
Table += '</table>';
console.log (Table);

return Table;
}

function checkDuplicate(flightNumber)
		{
			
			var milesFromstorage;
			
			//retrieve from local storage an existing set of data, if non then just return false
			if(localStorage.getItem('flightnumber'))
				milesFromStorage = parse(localStorage.getItem('flightnumber'));
			else
				return false;
			
			//loop through the return objects to check for a match on the flight number
			for(var i=0; i<milesFromStorage.length; i++)
			{
				if(milesFromStorage[i].flightNumber === flightNumber)
					return true;
			}
			
			return false;
		
		
		console.log(milesFromStorage);
}


// calcualte points
function calculateMembership()
		{
		
			var entries;
			var points = 0;
			
			if(localStorage.getItem('flightnumber'))
			{
				entries = JSON.parse(localStorage.getItem('flightnumber'));
				
				for(var i=0; i<entries.length; i++)
				{
					points += parseInt(entries[i].miles);
				}
			}
			
			if(points < 10000)
				return "Bronze";
			if(points > 10000 && points < 25000)
				return "Silver";
			if(points > 25000)
				return "Gold";
		}

	