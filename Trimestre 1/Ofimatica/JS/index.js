function area ()
{
    var n1 = parseFloat(document.getElementById('n1').value); 
    var n2 = parseFloat(document.getElementById('n2').value);
    var n3 = parseFloat(document.getElementById('n3').value);
    var res = (n1+n2+n3)
    var res2 = res/3
    //alert(res3);

    if (res2 > 7)
    {
        alert("aprobo con: " + res2 )

    }else if (res2 < 7 && res2 > 4)
    {
        alert("regular")
    }
    else
    {
        alert("reprobo con: " + res2)
    }
}



