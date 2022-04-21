function printer(nivo_tonera,dvostranoispisivanje)
{
    this.dvostranoispisivanje = dvostranoispisivanje,
    this.ukupanBrojStranica = 0;

    if(nivo_tonera<0)
    {
        this.nivoTonera = 0;
    }
    else if(nivo_tonera>100)
    {
        this.nivoTonera=100;
    }
    else
    {

        this.nivoTonera = nivo_tonera
    }
}

var Samsung_M283x = new printer(23,true);
var Epson_Sx105 = new printer(50, false);
var Cannon_Pixma = new printer(-2, false);
var HP_Smart_tank_500 = new printer(103, true);

printer.prototype.dodajBoju = function()
{
    //this.nivoTonera=100;
    var nedostaje = 100 - this.nivoTonera;
    this.nivoTonera=this.nivoTonera + nedostaje;

}
printer.prototype.printaj = function(stranice)
{
    var potrebnoBoje=stranice*0.1;
    if (this.nivoTonera>=potrebnoBoje)
    {
        this.nivoTonera = this.nivoTonera-potrebnoBoje;
        console.log("Ostalo tonera: " + this.nivoTonera);
        console.log("Broj ispisanih stranica je " + stranice);
        if (this.dvostranoispisivanje)
        {
            var listovi = Math.ceil(stranice/2);
            this.ukupanBrojStranica += listovi;
            console.log("Broj potrosenih listova je " + listovi);
            
        }
        else
        {
            this.ukupanBrojStranica += stranice;
            console.log("Broj potrosenih listova je " + stranice);
            
        }
    }
    else{
        console.log("Premalo tonera. Nemoguće printati");
    }
}

Cannon_Pixma.printaj(5); //nema tonera
console.log("\n");
HP_Smart_tank_500.printaj(5); //dvostrano
console.log("\n");
Cannon_Pixma.dodajBoju();
Cannon_Pixma.printaj(5); //jednostrano

