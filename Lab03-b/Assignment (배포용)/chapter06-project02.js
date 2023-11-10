function addTextAndBoxToElement(node) {
  var newNode = document.createElement("SPAN");
  newNode.className = "hoverNode";
  var t = document.createTextNode(node.tagName);
  newNode.appendChild(t);
  newNode.addEventListener("click", function () {
    msg = `Tag: ${node.tagName}\nClass: ${node.className}\nID: ${node.id}\ninnerHTML: ${node.innerHTML}`
    alert(msg);
  });
  node.appendChild(newNode);
}

function show() {
  var tagNames = ["caption", "thead", "tr", "a", "th", "tfoot", "table", "td", "tbody", "div", "form", "fieldset", "legend", "p", "label"];
  for (var i = 0; i < tagNames.length; i++) {
    var tag = tagNames[i];
    document.querySelectorAll(tag).forEach(function (element) {
      addTextAndBoxToElement(element);
    });
  }
}

window.addEventListener("load", function () {
  show();
});
