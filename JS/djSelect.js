/**
 * Created by elya on 12/03/2016.
 */
function myFunction() {
    var textnode = document.createTextNode("Wateasdfvgmjhasdfkjhfasgkjr");
    var item = document.getElementById("textxx").childNodes[0].firstChild;
    item.replaceChild(textnode, item.childNodes[0].firstChild);
}