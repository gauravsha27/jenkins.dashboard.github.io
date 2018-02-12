var xmlhttp = new XMLHttpRequest();
var url = "https://jsonplaceholder.typicode.com/posts/1";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        document.getElementById("json").innerHTML = JSON.stringify(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' + arr[i].display + '</a><br>';
    }
    //document.getElementById("id01").innerHTML = out;
    document.getElementById("id01").innerHTML = out);
}






































var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        document.getElementById("json").innerHTML = JSON.stringify(myArr);
    }
};
xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
xmlhttp.send();

function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += '<a href="' + arr[i].url + '">' + 
        arr[i].display + '</a><br>';
    }
    console.log(out);
    document.getElementById("json").innerHTML = out;
}



function GetSelectedTextValue(ddlEnv) {
	var selectedText = ddlEnv.options[ddlEnv.selectedIndex].innerHTML;
    var selectedValue = ddlEnv.value;
    alert("Selected Text: " + selectedText + " Value: " + selectedValue);
    console.log("10.31.40.141"+obj[selectedText]);
}

//var url_141 = "";
//var json_141 = url_141;

var json_141 = JSON.stringify( {"extName": {"message": "Managed Bookmarks","description": "The extension name." },"extDescription": {"message": "Adds bookmarks configured by your system administrator to Chrome.",
    "description": "The extension description."}}),
json_142 = JSON.stringify({"extName": {"message": "Managed Bookmarks 142","description": "The extension name." },"extDescription": {"message": "Adds bookmarks configured by your system administrator to Chrome.",
    "description": "The extension description."}})


var obj = {
"10.31.40.141": json_141,
"10.31.40.142": json_142
}

