let span = document.querySelector(".up");

window.onscroll = function(){
    // if(this.scrollY >=300){
        
    // }
    // else{
        
    // }
    this.scrollY >=10 ? span.classList.add("show") : span.classList.remove("show");
};
span.onclick = function(){
    window.scrollTo({
        top:0,
        behavior: "smooth",
    });

};