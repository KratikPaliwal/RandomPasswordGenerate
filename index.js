function strongPassword()
{
    let pass ="";
    for(let i=0; i<2; i++)
    {
        pass+=Upcase[Math.floor(Math.random()*Upcase.length)];
        pass+=Lowcase[Math.floor(Math.random()*Lowcase.length)];
        pass+=digits[Math.floor(Math.random()*digits.length)];
        pass+=symbols[Math.floor(Math.random()*symbols.length)];
    }
    var1.value=pass;
    
}

let var1 = document.getElementById("pass");
const len = 8;
const Upcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Lowcase = "abcdefghijklmnoprstuvwxyz";
const digits = "0123456789";
const symbols = "@#$%^&*!|}{/><.;";
const allcharacter = Upcase+Lowcase+digits+symbols;


strongPassword();
