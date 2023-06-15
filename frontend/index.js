
var botao = true;

$("#botao").click(function(){
    if (botao == true){
        $("body").css("background", "#282626");
        $("p,h1,h2").css("color","white");
        $("h1").css("border","2px solid white");
        $(this).text("Modo Claro");
        botao = false;}
    else{
        $("body").css("background", "#FFFFFF");
        $("p").css("color","black");
        $("h1").css("color","rgb(32, 23, 156)");
        $("h1").css("border","2px solid rgb(32, 23, 156)");
        $(this).text("Modo Escuro");
        botao = true;}
    
})

$("p,h1,h2").mouseover(function(){
    if (botao == true){
        $(this).css("color", "#97ced3");}
    else{
        $(this).css("color", "#9f9ad0");}
})


$("h1").mouseout(function(){
    if (botao == true){
        $(this).css("color", "rgb(32, 23, 156)");}
    else{
        $(this).css("color", "white");} 
});

$("p").mouseout(function(){
    if (botao == true){
        $(this).css("color", "black");}
    else{
        $(this).css("color", "white");} 
});

$("a").mouseout(function(){
    if (botao == true){
        $(this).css("color", "white");}
    else{
        $(this).css("color", "white");} 
});

$("a").mouseover(function(){
    if (botao == true){
        $(this).css("color", "#97ced3");}
    else{
        $(this).css("color", "#9f9ad0");}
})

$.ajax({
    url:"/formacao",
    TYPE: "GET",
    success:(res) => {
        let text = ""
        res.forEach(formacao => {
            text += `<strong> ${formacao.nome_curso} </strong><br> (${formacao.ano_inicio} - ${formacao.ano_fim})<br> ${formacao.descricao_curso}<br><br>`;
        });
        $("#formacao").html(text);
        
    },
    error:()=> {
        $("#formacao").text("Ocorreu um erro ao careegar essa seção");
    }
});