$(document).ready(function(){

    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=7ad2a304f0316b598282a7f6f4c48984&units=metric",
        context: document.body
      }).done(function(data) {
          
          console.log(data)
          $(".thesearch").html(data.search)
          success: function (result, status, xhr) {
            var table = $("<table><tr><th>Weather Description</th></tr>");

            table.append("<tr><td>City:</td><td>" + result["name"] + "</td></tr>");
            table.append("<tr><td>Country:</td><td>" + result["sys"]["country"] + "</td></tr>");
            table.append("<tr><td>Current Temperature:</td><td>" + result["main"]["temp"] + "°C</td></tr>");
            table.append("<tr><td>Humidity:</td><td>" + result["main"]["humidity"] + "</td></tr>");
            table.append("<tr><td>Weather:</td><td>" + result["weather"][0]["description"] + "</td></tr>");

            $("#itm2").html(table);
            
        }
        function Validate() {
            var errorMessage = "";
            if ($("#citySelect").val() == "Select") {
                errorMessage += "► Select City";
            }
            return errorMessage;
        }
          
        // $( this ).addClass( "done" );
      });
})

