function newOne(){
    var a = parseInt(document.getElementById('one').value);
    var b =  parseInt(document.getElementById('one').value);
    var c = parseInt(document.getElementById('one').value);


    if(a && b && c > 0){

        var wynik = ((a*b)/c);

        document.writeln("<h1>" + wynik +" </h1>");
    }

}