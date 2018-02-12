$(document).ready(function () {
    //Dropdown selected Item
    $('#ddlEnv').change(function () {
        var doc = document.getElementById("ddlEnv");
        console.log("You selected " + doc.options[doc.selectedIndex].value);
    });
    //Fetching data from external JSON 
    $('#retrieve-resources').click(function () {
        var output = " ";
        var displayResources = $('#showResourcesBox');

        displayResources.text('Loading data from JSON source...');

        $.ajax({
          type: "GET",
          dataType: "json",
          url: "../data/resources.json",
          success: function(result)
          {
            console.log(result);
            output="<table class='container'><thead><tr><th><h1>Name</h1></th><th><h1>Provider</h1></th><th><h1>URL</h1></th></thead><tbody>";
            for (var i in result)
            {
                output+="<tr><td>" + result[i].name + "</td><td>" + result[i].provider + "</td><td>" + result[i].url + "</td></tr>";
            }
            output+="</tbody></table>";

            displayResources.html(output);
            $("table").addClass("table");
          }
        });
    });
});