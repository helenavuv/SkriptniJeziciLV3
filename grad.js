function Grad(nazivGrada, brojStanovnika, Latituda, Longituda)
{
    this.naziv_grada = nazivGrada,
    this.broj_stanovnika = brojStanovnika,
    this.lat = Latituda,
    this.long = Longituda
}

var Virovitica = new Grad("Virovitica",21291,45.83194, 17.38389);
var Slatina = new Grad("Slatina",10208,45.70333, 17.70278);
var Bjelovar = new Grad("Bjelovar",36433,45.89861, 16.84889);
var Osijek = new Grad("Osijek",96848,45.55111, 18.69389);
var Zagreb = new Grad("Zagreb",769944,45.815399, 15.966568);

Grad.prototype.dajVelicinuGrada = function()
{
    if (this.broj_stanovnika<30000) {return 1;}
    if (this.broj_stanovnika>30000 && this.broj_stanovnika<200000) {return 2;}
    if (this.broj_stanovnika>30000) {return 3;}
}

console.log(Zagreb.dajVelicinuGrada());
console.log(Bjelovar.dajVelicinuGrada());
console.log(Slatina.dajVelicinuGrada());

function dajUdaljenost(grad1, grad2)
{
    const R = 6371;
    var lat1 = grad1.lat * Math.PI/180; 
    var lat2 = grad2.lat * Math.PI/180;
    var razlika_lat = (grad2.lat-grad1.lat) * Math.PI/180;
    var razlika_long = (grad2.long-grad1.long) * Math.PI/180;

    var a = Math.sin(razlika_lat/2) * Math.sin(razlika_lat/2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(razlika_long/2) * Math.sin(razlika_long/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    
    return R * c; //km
}

console.log(dajUdaljenost(Osijek,Zagreb));