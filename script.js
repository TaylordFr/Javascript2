
function addRow() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var x = document.getElementById("myTable").rows.length;
    cell1.innerHTML = x;
    cell2.innerHTML = document.getElementById("input1").value;
    table.style.border = '2px solid black';
}

function delRow() {
    document.getElementById("myTable").deleteRow(0);
};

document.getElementById("color-btn").onclick=function()
    {
        var r = Math.round(Math.random()*256); var g = Math.round(Math.random()*256); var b = Math.round(Math.random()*256);
        var random = 'rgb('+r+','+g+','+b+')';
 
    document.getElementById("color-btn").style.backgroundColor = random;
};

var delBtn = document.getElementById("del");
var addBtn = document.getElementById("add");

