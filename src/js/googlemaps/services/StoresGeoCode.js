import axios from "axios";
import {
    GG_API_KEY,
    GG_GEO_URL
} from '../constants/constants'
import {
    globeAddress
} from '../constants/GlobeStoresConst'

export function fetchStoresGeoCode(callback) {

    console.log('Url ' + GG_GEO_URL)
    var url
    var i = 0
    var results = []
    var length = globeAddress.length

    for (i = 0; i < 3; i++) {
        console.log(globeAddress[i])
        axios.get(GG_GEO_URL, {
                params: {
                    key: GG_API_KEY,
                    address: globeAddress[i]
                }
            })
            .then(function(response) {
                console.log(response.data);
                //results.push(response.data.results)
                if(response.data.results[0].geometry != undefined){
                    callback(response.data.results[0].geometry.location)
                }

            })
            .catch(function(error) {
                console.log(error);

            });

    }

}
// axios.all([
// axios.get(GG_GEO_URL, {
//     params: {
//       key: GG_API_KEY,
//       address: globeAddress[69]
//     }
//   })
// ])
// .then(axios.spread(function (response) {
//   console.log(response.data);
//     results.push(response.data.results)
// }))
// .catch(error => console.log(error));






//return results
