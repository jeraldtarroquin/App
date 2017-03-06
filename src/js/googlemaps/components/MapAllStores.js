import React, { Component } from 'react'
import { globeAddress } from '../constants/GlobeStoresConst'
import { manila_lat, manila_lng, default_zoom, useFixtures } from '../constants/constants'
import { globeAddressFixtures } from '../constants/GlobeStoresFixtures'
import scriptLoader from 'react-async-script-loader'
import $ from 'jquery';

@scriptLoader(['https://maps.googleapis.com/maps/api/js?key=AIzaSyDnoClyKUL1BvtrScJKznb5xs93EWb_MbA'])
export default class MapAllStores extends Component {

constructor(props){
  super(props);
  this.map = null;

  this.state={
      currentLat: '',
      currentLng: ''
  }

}

componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {

  if(this.props.address && this.props.address != ''){
    //console.log('total number of addresses' + globeAddressFixtures.length)

    var address = this.props.address

    var matchesFilter = new RegExp(address, "i")
    var filteredAddress = globeAddressFixtures.filter(address => address.location.match(matchesFilter))

    //console.log(filteredAddress.length)

    this.map = new google.maps.Map(this.refs.map, {
      center: {lat: this.state.currentLat, lng: this.state.currentLng},
      zoom: default_zoom
    });

    var currentLocationMarker = new google.maps.Marker({
        position: {lat: this.state.currentLat, lng: this.state.currentLng},
        animation: google.maps.Animation.DROP,
        map: this.map,
        icon: './js/googlemaps/static/current.png',
        title: 'This your approximate location!'
    });

    var storeMarkers = []
    var filteredLength = filteredAddress.length


    for(var x = 0; x < filteredLength; x++){
      var pos = {lat: filteredAddress[x].lat, lng: filteredAddress[x].lng}
      storeMarkers[x] = new google.maps.Marker({
          position: pos,
          animation: google.maps.Animation.DROP,
          map: this.map,
          icon: './js/googlemaps/static/current_location.png',
          title: filteredAddress[x].location
      });

      google.maps.event.addListener(storeMarkers[x], 'click', this.markerClicked)


    }

  }else{
    this.defaultLoad()
  }

  if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished
    if (isScriptLoadSucceed) {
      this.defaultLoad()
    }
    else this.props.onError()
  }
}

markerClicked(e){
  console.log("Lat Lat value of clicked pointer" + e.latLng.lng() + " " + e.latLng.lat())
}

defaultLoad(){

  this.map = new google.maps.Map(this.refs.map, {
    center: {lat: manila_lat, lng: manila_lng},
    zoom: default_zoom
  });

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    const pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    this.setState({
      currentLat: pos.lat,
      currentLng: pos.lng
    })

    this.map.setCenter(pos);

    var origin = new google.maps.Marker({
      position: pos,
      map: this.map,
      icon: './js/googlemaps/static/current.png',
      title: 'This your approximate location!'
    });


    if(useFixtures){
        //console.log('useFixtures ' + useFixtures)
        var fixtureLength = globeAddressFixtures.length
        var fixmarks
        for(var x = 0; x < fixtureLength; x++){
          var fixPos = {
              lat: globeAddressFixtures[x].lat,
              lng: globeAddressFixtures[x].lng
          }

        fixmarks  = new google.maps.Marker({
              position:fixPos,
              animation: google.maps.Animation.DROP,
              map: this.map,
              icon: './js/googlemaps/static/current_location.png',
              title: globeAddressFixtures[x].location
          })

        }
    }
    else {
      var marks
      for(var x = 0; x < 3; x++){
        $.getJSON('http://maps.googleapis.com/maps/api/geocode/json?address='+globeAddress[x]+'&sensor=false', null, function (data) {
            var p = data.results[0].geometry.location
            var latlng = new google.maps.LatLng(p.lat, p.lng);
            marks = new google.maps.Marker({
                position: p,
                animation: google.maps.Animation.DROP,
                map: this.map,
                icon: './js/googlemaps/static/current_location.png',
                title: data.results[0].formatted_address
            });

        }.bind(this));
      }
    }

  }, () => {
    console.log('navigator disabled');
  });
} else {
  // Browser doesn't support Geolocation
  console.log('navigator disabled');
}

//console.log(globeAddress.length)
}

  render(){

    return(
      <div>
        <div ref="map" style={{height: '100%', width: '100%'}}></div>
        { !this.map && <div className="center-md">Loading...</div> }
      </div>
    )

  }

}
