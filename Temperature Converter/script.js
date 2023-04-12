let cel = document.getElementById("cel");
let fah = document.getElementById("fah");

cel.addEventListener('input', function(){
    let c = this.value;
    let f = (c * 9/5) + 32;
    fah.value = f;
});

fah.addEventListener('input', function(){
    let f = this.value;
    let c = (f-32) * 5/9;
    if(!Number.isInteger(c)){
        c = c.toFixed(4);
    }
    cel.value = c;
});

let clear = document.getElementById("btn");
clear.addEventListener('click', function(){
    fah.value = "";
    cel.value = "";
});
