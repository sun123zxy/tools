$("#prime-table button").click(function(){
    var es = new EulerSieve(parseInt($("#prime-table .input").val()));
    text = "";
    for(var i=1;i<=es.pN;i++){
        text += es.P[i];
        if(i!=es.pN) text += " ";
    }
    $("#prime-table .output").text(text);
});

$("#factorization button").click(function(){
    var fc = new Factorization(parseInt($("#factorization .input").val()));
    text = "\\( =";
    for(var i=1;i<=fc.sN;i++){
        text += fc.p[i];
        if(fc.c[i]>1) text += "^" + fc.c[i];
        if(i!=fc.sN) text += " \\times ";
    }
    text += "\\)";
    $("#factorization .output").text(text);
    renderMathInElement($("#factorization .output").get(0))
});