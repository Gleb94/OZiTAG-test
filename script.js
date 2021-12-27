function modifyText() {
    var t2 = document.getElementById("12");
    if (t2.firstChild.nodeValue == "Z") {
        t2.firstChild.nodeValue = "O";
    } else {
        t2.firstChild.nodeValue = "Z";
    }
}

function initDoc() {
    oDoc = document.getElementById("textBox");
    sDefTxt = oDoc.innerHTML;
    if (document.compForm.switchBox.checked) { setDocMode(true); }
}

function formatDoc(sCmd, sValue) {
    if (validateMode()) { document.execCommand(sCmd, false, sValue); oDoc.focus(); }
}

function validateMode() {
    if (!document.compForm.switchBox.checked) { return true ; }
    alert("Uncheck \"Показать HTML\"."); /* убрать галочку из "Показать HTML" */
    oDoc.focus();
    return false;
}

function setDocMode(bToSource) {
    var oContent;
    if (bToSource) {
        oContent = document.createTextNode(oDoc.innerHTML);
        oDoc.innerHTML = "";
        var oPre = document.createElement("pre");
        oDoc.contentEditable = false;
        oPre.id = "sourceText";
        oPre.contentEditable = true;
        oPre.appendChild(oContent);
        oDoc.appendChild(oPre);
    } else {
        if (document.all) {
        oDoc.innerHTML = oDoc.innerText;
        } else {
            oContent = document.createRange();
            oContent.selectNodeContents(oDoc.firstChild);
            oDoc.innerHTML = oContent.toString();
        }
        oDoc.contentEditable = true;
    }
    oDoc.focus();
}


var el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);