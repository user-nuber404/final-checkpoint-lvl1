/*document.getElementById("B1a").addEventListener("click",function(){
    document.getElementById("Tx7").style.fontWeight = 'bold';
})*/
function changeWeight(){
    var getText=document.getElementById("Tx7");
    if(getText.style.fontWeight=="normal"){
        getText.style.fontWeight="bold";

    } 
    else{

        getText.style.fontWeight="normal";  
          
    }
}
function changeita(){
    var getText=document.getElementById("Tx7");
    if(getText.style.fontStyle=="normal"){
        getText.style.fontStyle="italic";

    } 
    else{

        getText.style.fontStyle="normal";  
          
    }
}
function underline(){
    var getText=document.getElementById("Tx7")
    if(getText.style.textDecoration=="none"){
        getText.style.textDecoration="underline";
    }
    else{
        getText.style.textDecoration="none";
    }
}
function changeSize(size){
    var getText=document.getElementById("Tx7");
    if(size=="a"){
        getText.style.fontSize="20px";

    } 
    else if(size=="b"){
        getText.style.fontSize="40px";
    }
    else if(size=="c"){
        getText.style.fontSize="72px";
    }
    else{

        getText.style.fontSize="";  
          
    }
}
function cchangefamily(family){
    if(family=="d"){
        getText.style.fontFamily="Arial";
    }
    else if(family){
        getText.style.fontFamily="Comic sans ms";

    }
    else{
        getText.style.family=""
    }
}