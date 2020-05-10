var btn=document.getElementsByClassName("btn-accordion");

for(var i=0; i<btn.length;i++){
    btn[i].addEventListener("click", function(){
        this.classList.add(".is-open");
        var content=this.nextElementSibling; //The nextElementSibling property returns the element immediately following the specified element, in the same tree level.
        if(content.style.display==="block"){
            content.style.display="none";
        }
        else{
            content.style.display="block";
        }
    });
}

