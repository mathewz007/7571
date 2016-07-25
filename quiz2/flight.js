function recordFlight() {
	// getting input values 

	var flightnumber = document.getElementById("flight").value;
	var miles = document.getElementById("miles").value;

	console.log(flightnumber,miles);

	// gettig dispaly id's 

	//grab the output variable 
			var message = document.getElementById('msg');
			var Results = document.getElementById('flyingmiles');
			var status = document.getElementById('results');



//create variable to hold input data
			var flightmiles;

	var flightmiles = [];
			if(localStorage.getItem('flightNumber'))
			{
				flightmiles = parse(localStorage.getItem('flightNumber'));
			}
			console.log(flightmiles);

 message.innerHTML= " ";
}

// spitting out the input variable 


function table(flightmiles)

		{  
			var Table = '';
			Table += '<table>';
			Table += '<tr><th>Flight Number</th><th>Miles Flown</th></tr>';
			for(var i=0; i<miles.length; i++)
			{
				Table += '<tr><td>'+flightmiles[i].flightNumber+'</td><td>'+flightmiles.miles+'</td></tr>';
			}
			Table += '</table>';
			
			return Table;
			console.log(Table);

}

		// function to store the values into local storage 

function saveFlight(flightmiles) {

	local.storage.setItem(flightnumber,miles);
}

// spitting out the  medallion status 

function calculateMembership()
		{
			console.log("calculate membership");
			var entries;
			var points = 0;
			
			if(localStorage.getItem('flightmiles'))
			{
				entries = parse(localStorage.getItem('flightmiles'));
				
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




// checking for duplicat entry 

