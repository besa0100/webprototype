var coll = document.getElementsByClassName("collapsible");
var i;

/** document.getElementsByClassName returns an array-like object of all child elements which have all of the given class names. In your case you should modify your code like this. getElementsByClassName returns a HTMLCollection which doesn't have classList property, you should iterate through the collection.**/


for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
