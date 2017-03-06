
  export function getCurrentLocation(callback){

      if( navigator.geolocation ){
              console.log('Geolocation1')
               // Call getCurrentPosition with success and failure callbacks
               //navigator.geolocation.getCurrentPosition( success, fail );

              navigator.geolocation.getCurrentPosition(
                function(position){

                  console.log('Geolocation2')
                  console.log(position.coords.latitude)
                  console.log(position.coords.longitude)

                  var pos = {
                      lat: position.coords.latitude,
                      lng: position.coords.longitude
                  }

                  console.log('value of pos' + pos.lat + ' : ' + pos.lng)

                  callback(pos)
                }
              )
        } else{
           console.log("Sorry, your browser does not support geolocation services.");
        }

      // if (navigator.geolocation) {
      //     navigator.geolocation.getCurrentPosition(showPosition, showError);
      // } else {
      //     console.log("Geolocation is not supported by this browser.");
      // }


  }


  // showPosition(position) {
  //   console.log("Latitude: " + position.coords.latitude +
  //   "<br>Longitude: " + position.coords.longitude)
  // }
  //
  // showError(error) {
  //     switch(error.code) {
  //         case error.PERMISSION_DENIED:
  //             console("User denied the request for Geolocation.")
  //             break;
  //         case error.POSITION_UNAVAILABLE:
  //             console.log("Location information is unavailable.")
  //             break;
  //         case error.TIMEOUT:
  //             console.log("The request to get user location timed out.")
  //             break;
  //         case error.UNKNOWN_ERROR:
  //             console.log("An unknown error occurred.")
  //             break;
  //     }
  // }
