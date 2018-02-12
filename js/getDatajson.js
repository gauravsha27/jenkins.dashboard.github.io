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
          url: 'https://api.jsonbin.io/b/5a7adc119a230212562a7828/latest',
          type: 'GET',
          contentType: 'application/json',
          headers: { //Required only if you are trying to access a private bin
            'secret-key': '$2a$10$wxHzHZit.Nvrd62JWj4eeOep5bTg4pp2l5RBeJME1BBY9poCxmuo.'
          },
          success: function(result){
            var jsondata = JSON.stringify(result);
            console.log(jsondata);
            //var len = jdata.length;
            //console.log(len);
            var itemCount = 0;
            output="<table class='container'><thead><tr><th><h1>Environment</h1></th><th><h1>IP</h1></th><th><h1>Time Stamp</h1></th><th><h1>Status</h1></th><th><h1>Built By</h1></th><th><h1>Job Type</h1></th></thead><tbody>";
            
                    for (var i in result.buildDetails)
                    {
                        var datestr = new Date(new Date(result.buildDetails[itemCount].timeStamp) + 4*60*60*1000);
                        //console.log(i.length);
                        output+="<tr class="+result.buildDetails[itemCount].status+"><td>"+ result.buildDetails[itemCount].environment + "</td><td>"+ result.buildDetails[itemCount].ip + "</td><td>" + (datestr.toLocaleDateString() + "::" +  datestr.toLocaleTimeString()) + "</td><td class="+result.buildDetails[itemCount].status+">" + result.buildDetails[itemCount].status + "</td><td>" + result.buildDetails[itemCount].builtBy + "</td><td>" + result.buildDetails[itemCount].jobType + "</td></tr>";
                        console.log(output);
                        itemCount = itemCount + 1;
                    }
                    console.log(itemCount);
                    output+="</tbody></table>";

                    displayResources.html(output);
                    $("table").addClass("table");
          },
          error: function(err){
            console.log(err.responseJSON);
          }
        });
    });
});