console.log("Hi");

function displayDataInMyPage(data_as_an_object) {

    var description = document.getElementById("description");
    description.innerHTML = data_as_an_object.weather[0].description;

    var temp_min = document.getElementById("temp_min");
    temp_min.innerHTML = data_as_an_object.main.temp_min - 273.15;

    var country = document.getElementById("country");
    country.innerHTML = data_as_an_object.sys.country;

};

function search() {
    
    // GETTING USER INPUT
    var user_input = document.getElementById("user_input").value;
    console.log(user_input);

    // CALLING THE API

    // UNDERSTAND THE FOLLOWING
    var endpoint = "https://api.openweathermap.org/data/2.5/weather?";  // who (www.example.com) - what server
    var query = "q=" + user_input;                                      // what data do you want ?
    var key = "&appid=7816d9f235c88adc096427a68ca872f2";                // key to identify yourself to the server: who is asking data ?
    var the_url = endpoint + query + key                                // ELEMENTS FOR ALL API CALL (maybe not the key if open api)    


    // Building the request object
    // ADMIT THE FOLLOWING
    var api_request = new XMLHttpRequest();
    api_request.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {

            // Understand: function to be called upon receiving a successful response
            the_response = api_request.responseText; // response = data

            // THE RESPONSE YOU GET BACK IS OF STRING TYPE
            console.log(typeof the_response);

            // WE NEED TO CONVERT IT TO AN OBJECT --> Using JSON.parse()
            data_as_an_object = JSON.parse(the_response); 
        
            displayDataInMyPage(data_as_an_object);

        } else {

            // Understand: function te be called upon receiving an error response
            console.log("This stuff is not working");

        }

    };

    api_request.open("GET", the_url, true); // ADMIT "GET" (method) AND "true"
    api_request.send();                    

}


