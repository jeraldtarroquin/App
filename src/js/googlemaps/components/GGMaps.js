import React from 'react'
import ReactDOM from 'react-dom'
import CurrentLocation from '../stores/CurrentLocation'
import GlobeStores from '../stores/GlobeStores'
import Map from './Map'
//import Mapvs from './layout/Mapsvs'
import Footer from './layout/footer.js'

 const app = document.getElementById("app")
// const element = <div>sample jerald</div>


class App extends React.Component {

    // componentDidMount(){
    //
    // //CurrentLocation.lat
    // console.log('GGMAPS jerald')
    // //console.log(CurrentLocation.lat)
    // }

    render() {

        // const marker = [
        //     {
        //         location: {
        //           lat: 14.6760413,
        //           lng: 121.0437003
        //         }
        //     }
        // ]

        return(

            <div>
              sample jerald pogi

              <div style={{width: 800, height:800, background: 'red'}}>

              <Map currentlocation={ CurrentLocation } globeStores={ GlobeStores }/>

              </div>

              <Footer />
            </div>
        )

    }

}

 ReactDOM.render(<App />, app)
