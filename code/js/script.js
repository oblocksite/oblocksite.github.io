


menu.onclick = function myFunction () {
    var x = document.getElementById('mytopNav');
    if (x.className === "mynav") {
        x.className += " responsive";
    } else {
        x.className = "mynav"
    }
}