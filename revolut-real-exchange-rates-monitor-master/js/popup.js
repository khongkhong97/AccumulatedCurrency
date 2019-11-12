document.addEventListener('click', function(event) {
    var t = event.target;
    var parentRow = t.parentNode.parentNode;
    var table = parentRow.parentNode;
    var rowCount = table.rows.length;
    if(t.id=="addRowBtn"){
        if(rowCount <13){
        var row = table.insertRow(rowCount);
        var cell1 = row.insertCell(0);
       var baseOption = document.getElementById("base");
       var element1 = document.createElement("select");
       for(var i=0;i < baseOption.options.length ; i++){

            var option = document.createElement("option");
            option.value = baseOption.options[i].value;
            option.innerHTML = baseOption.options[i].text;
            element1.appendChild(option);
        }
        cell1.appendChild(element1);

        var cell2 = row.insertCell(1);
        var element2 = document.createElement("input");
        element2.type = "number";
        element2.size = 15;
        cell2.appendChild(element2);

        var cell3 = row.insertCell(2);
        var element3 = document.createElement("button");
        element3.type = "button";
        element3.innerHTML = "-";
        element3.onclick = function (){delRow(element3)};
        cell3.appendChild(element3);
        }
    else{
        alert("cannot exceed 10");
    }
}
});
var totalAmount=0;
document.addEventListener('keyup', function(event) {
    var t = event.target;
    var parentRow = t.parentNode.parentNode;
    var table = parentRow.parentNode;
    var rowCount = table.rows.length;
    var amountInput = 0;
    var base = document.getElementById("base").value;
    var xmlhttp = new XMLHttpRequest();
    var url = "http://data.fixer.io/api/latest?access_key=3bfaec96b9dfbf3e32b70426f4065c74";
    xmlhttp.open("GET",url,true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
    for(var x = 1; x < rowCount; x++){
        if(x!=2){
            if(parseFloat(table.rows[x].cells[1].getElementsByTagName('input')[0].value) > 0){
            amountInput = parseFloat(table.rows[x].cells[1].getElementsByTagName('input')[0].value);
            }
            else if(parseFloat(table.rows[x].cells[1].getElementsByTagName('input')[0].value) < 0){
                alert("Only postive number");
            }
            else{
                amountInput =0;
            }
        var to = table.rows[x].cells[0].getElementsByTagName('select')[0].value;
        
            var result = xmlhttp.responseText;
            var jsResult = JSON.parse(result);
            var oneUnit = (jsResult.rates[base]/jsResult.rates[to]);
            var amtInput = (parseFloat((oneUnit*amountInput).toFixed(2)));
            totalAmount = (totalAmount+amtInput);
            }
        }
        }
    }
    async function display() {
        let promise = new Promise((resolve, reject) => {
          setTimeout(() => resolve("done!"), 100)
        });
        let result = await promise; // wait till the promise resolves (*)
        document.getElementById("TotalAmount").value = totalAmount;
        totalAmount =0;
      }
      display();

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
      document.getElementById("dateTextBox").innerHTML = today;
});

function delRow(btn){
    var rowIndex = btn.parentNode.parentNode.rowIndex;
    var parentRow = btn.parentNode.parentNode;
    var table = parentRow.parentNode;
    table.deleteRow(rowIndex);
    // console.log(rowIndex);
}