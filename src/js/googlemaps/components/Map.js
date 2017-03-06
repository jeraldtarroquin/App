import React, { Component } from 'react'
import {GoogleMapLoader, GoogleMap, Marker} from 'react-google-maps'
import { observer } from 'mobx-react'
import  { fetchStoresGeoCode } from '../services/StoresGeoCode'
import { getCurrentLocation } from '../services/Geolocation'

@observer
export default class Map extends Component {

  componentWillMount() {


        fetchStoresGeoCode(function(response){

          this.props.globeStores.location.push(response)

        }.bind(this))


        //console.log(this.props.currentlocation)

        console.log('jerald is master')

        getCurrentLocation(function(response){

            console.log('getCurrentLocation' + response.lat)

            this.props.currentLocation.lat = response.lat
            this.props.currentLocation.lng = response.lng

        }.bind(this))

    }

componentDidMount(){

  console.log('componentDidMount')

}



    render(){
      const mapContainer = <div style={{height: '100%', width:'100%'}}></div>

      const location = {
          lat: Number(this.props.currentlocation.lat),
          lng: Number(this.props.currentlocation.lng)
      }

      return (
          <GoogleMapLoader
              containerElement = { mapContainer }
              googleMapElement = {
                <GoogleMap
                    defaultZoom={ 10 }
                    defaultCenter={ {lat: Number(this.props.currentlocation.lat), lng: this.props.currentlocation.lng} }
                    options={{streetViewControl: false, mapTypeControl: false}}>

                </GoogleMap>
              }
          />

      )

    }

}
