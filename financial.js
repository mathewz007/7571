function calculateValue(){

// get input values
var profit = parseInt(document.getElementById("profit").value);
var assets = parseInt(document.getElementById("assets").value);
var liab = parseInt(document.getElementById("liab").value);
var intan = parseInt(document.getElementById("intan").value);
var pps= parseFloat(document.getElementById("pps").value);
var ans = parseInt(document.getElementById("ans").value); 
var growth = parseFloat(document.getElementById("growth").value);

// declare the output variables 
var EPS ;
var PB;
var PE;
var PEG;

// calculate the variables 
EPS = profit/ans;
PB = pps/(assets-(intan +liab));
PE = pps/EPS;
PEG = PE/(growth);


// output to textbox 
document.getElementById("EPS").value = EPS;
document.getElementById("PB").value = PB; 
document.getElementById("PE").value = PE;
document.getElementById("PEG").value = PEG;
 }


