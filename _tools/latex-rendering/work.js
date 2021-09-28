function render(){
    var type = $(".is-inline").prop('checked');
    var st, ed;
    switch(type){
        case false:
            st = "\\[";
            ed = "\\]";
            break;
        case true:
            st = "\\(";
            ed = "\\)";
            break;
    }
    $(".output").text(st + $(".input").val() + ed);
    renderMathInElement($(".output").get(0));
}

$("button").click(render);
$("textarea, input").on("input", function(){
    if($(".is-auto").prop('checked')){
        render();
    }
})