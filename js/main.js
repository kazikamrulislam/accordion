let acc = document.getElementsByClassName("accordion");

let i;

for(i = 0; i < acc.length; i++ ) {
    acc[i].addEventListener("click", function(){
    this.classList.toggle("active");
    let txt = this.nextElementSibling;

    if(txt.style.display === "block") {
        txt.style.display = "none";
    } else {
        txt.style.display = "block";
        }

    /*if (txt.style.maxHeight) {
        txt.style.maxHeight = null;
    } else {
        txt.style.maxHeight = txt.scrollHeight + "px";
    }*/

    });
}