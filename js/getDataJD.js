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

        //displayResources.text('Loading data from JSON source...');
        $('.heart').removeClass('heartVisible');

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
            output="<table class='responsive-table'><thead><tr><th scope='row'>Environment</th><th scope='row'>IP</th><th scope='row'>Time Stamp</th><th scope='row'>Status</th><th scope='row'>Built By</th><th scope='row'>Job Type</th></thead><tbody>";
            
                    for (var i in result.buildDetails)
                    {
                        var datestr = new Date(new Date(result.buildDetails[itemCount].timeStamp));
                        //console.log(i.length);
                        output+="<tr><td data-title='Environment'>"+ result.buildDetails[itemCount].environment + "</td><td data-title='IP'>"+ result.buildDetails[itemCount].ip + "</td><td data-title='Time Stamp'>" + (datestr.toLocaleDateString() + "::" +  datestr.toLocaleTimeString()) + "</td><td data-title='Status' class="+result.buildDetails[itemCount].status+">" + result.buildDetails[itemCount].status + "</td><td data-title='Build By'>" + result.buildDetails[itemCount].builtBy + "</td><td data-title='Job Type'>" + result.buildDetails[itemCount].jobType + "</td></tr>";
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
