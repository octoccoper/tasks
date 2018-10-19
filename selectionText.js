var allHtmlData = document.querySelectorAll("p");
var word = "attribute";
allHtmlData.forEach(function(elem, key){
if(elem.textContent.match(word,'gi')){
var index = elem.textContent.match(word, 'gi').index;
var changedData = elem.textContent.slice(0, index);
var changedData2 = elem.textContent.slice(index + word.length, elem.textContent.length);
var str = changedData + "<span style='background:yellow;'>" + elem.textContent.substr(index, word.length) + "</span>" + changedData2;
elem.innerHTML = str;
}
});
