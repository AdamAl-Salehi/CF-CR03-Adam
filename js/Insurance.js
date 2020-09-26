
function calculateInsurance() {
	var name = document.getElementsByClassName('inputbox')[0].value;
	var age = document.getElementsByClassName('inputbox')[1].value;
	var horsepower = document.getElementsByClassName('inputbox')[3].value;
	var agenum = Number(age);
	var horsepowernum = Number(horsepower);
	var insurance = 0;
	var countries = document.getElementById('dropdown');
	var country = countries.options[countries.selectedIndex].value;
   
    if (country == "austria") {
        var insurance = horsepowernum * 100 / agenum + 50;
    } else if (country == "hungary") {
        var insurance = horsepowernum * 120 / agenum + 50;
    } else {
        var insurance = horsepowernum * 150 / agenum  + 50;
    }
   document.getElementById('rescalc').innerHTML= ` ${name}, your insurance costs ${insurance} `;
    
}
document.getElementById('calcbtn').addEventListener("click", calculateInsurance, false);
