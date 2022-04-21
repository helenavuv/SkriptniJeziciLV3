function KompleksniBroj(realni, imaginarni)
{
    this.real = realni,
    this.imag = imaginarni
}
var broj1 = new KompleksniBroj(1,3);
var broj2 = new KompleksniBroj(3,4);
var broj3 = new KompleksniBroj(12,54);
var broj4 = new KompleksniBroj(5,9);
var broj5 = new KompleksniBroj(7,3);

var _kb={
    ispisiKompleksniBroj: function(broj)
    {
        return "z = " + broj.real + " + " + broj.imag + "i";
    },
    zbroji : function(a, b)
    {
        rezrel = a.real + b.real;
        rezimg = a.imag + b.imag;
        var rez = new KompleksniBroj(rezrel,rezimg);
        return _kb.ispisiKompleksniBroj(rez);
    },
    pomnozi : function(a,b)
    {
        rezrel = a.real*b.real - a.imag*b.imag;
        rezimg = a.real*b.imag + a.imag*b.real;
        var rez = new KompleksniBroj(rezrel,rezimg);
        return _kb.ispisiKompleksniBroj(rez);
    }
}

console.log(_kb.ispisiKompleksniBroj(broj1));
console.log(_kb.ispisiKompleksniBroj(broj2));
console.log(_kb.ispisiKompleksniBroj(broj3));
console.log(_kb.ispisiKompleksniBroj(broj4));
console.log(_kb.ispisiKompleksniBroj(broj5));

console.log(_kb.zbroji(broj1,broj2));
console.log(_kb.pomnozi(broj1,broj2));

function racunaj()
{
    console.log("Funkcija pozvana");
    var real1 = parseFloat(document.getElementById("z1real").value);
    var real2 = parseFloat(document.getElementById("z2real").value);
    var imag1 = parseFloat(document.getElementById("z1img").value);
    var imag2 = parseFloat(document.getElementById("z2img").value);
    var operacija = document.getElementById("operacija").value;
    var rezultat = document .getElementById("rez");

    var htmlbroj1 = new KompleksniBroj(real1,imag1);
    var htmlbroj2 = new KompleksniBroj(real2,imag2);

    if(operacija == 1)
    {
        rezultat.innerHTML = _kb.zbroji(htmlbroj1,htmlbroj2);
    }
    else if(operacija==2)
    {
        rezultat.innerHTML = _kb.pomnozi(htmlbroj1,htmlbroj2);
    }
    else
    {
        rezultat.innerHTML = "Niste odabrali operaciju";
    }
}