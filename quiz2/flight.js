
function recordFlight() {
	// getting input values 

	var flightnumber = document.getElementById("flight").value;
	var miles = document.getElementById("miles").value;

	localStorage.setItem(flightnumber,miles);

	console.log(localStorage)

//create variable to hold data
			var flightmiles = [];
			if(localStorage.getItem('flightmiles'))
			{
				flightmiles = parse(localStorage.getItem('flightnumber'));
			}
document.getElementById("flyingmiles").innerHTML=myTable(flightmiles);
document.getElementById("result").innerHTML = '<p>'+calculateMembership()+'</p>';

}

//create variable to hold input data


function myTable(flightmiles){
	
Table =" " ;
Table += '<table>';
Table += '<tr><th>Flight Number</th><th>Number of Miles Flown</th></tr>';
		for(var i=0; i<flightmiles.length; i++)
			{
				Table += '<tr><td>'+flightmiles.flightNumber+'</td><td>'+flightmiles.miles+'</td></tr>';
			}
Table += '</table>';
console.log (Table);

return Table;
}


// calcualte points
function calculateMembership()
		{
		
			var entries;
			var points = 0;
			
			if(localStorage.getItem('flightmiles'))
			{
				entries = JSON.parse(localStorage.getItem('flightmiles'));
				
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

	