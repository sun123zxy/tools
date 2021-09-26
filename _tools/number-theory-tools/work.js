$("#factorization button").click(function(){
    var fc = new Factorization(parseInt($("#factorization input").val()));
    text = "\\( =";
    for(var i=1;i<=fc.sN;i++){
        text += fc.p[i] + "^" + fc.c[i];
        if(i!=fc.sN) text += " \\times ";
    }
    text += "\\)";
    $("#factorization p").text(text);
    renderMathInElement($("#factorization p").get(0))
});