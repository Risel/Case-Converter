function toProperCase(value) {
    return value.charAt(0).toUpperCase() + value.substring(1).toLowerCase();
};
let textArea = document.querySelector("textarea");
document.getElementById("upper-case").addEventListener("click", function () {
    textArea.value = textArea.value.toUpperCase();
});
document.getElementById("lower-case").addEventListener("click", function () {
    textArea.value = textArea.value.toLowerCase();
});
document.getElementById("proper-case").addEventListener("click", function () {
    textArea.value = textArea.value.split(" ").map(toProperCase).join(" ");
});
document.getElementById("sentence-case").addEventListener("click", function () {
    textArea.value = textArea.value.split(". ").map(toProperCase).join(". ");
});
document.getElementById("save-text-file").addEventListener("click", function(){
    let text = document.querySelector("textarea").value;
    let filename = "text.txt"
    download(filename,text)
});
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
document.getElementById("save-text-file").addEventListener("click", function() {
    let text = document.getElementById("text").value;
    let filename = "text.txt"
    download(filename ,text);
});