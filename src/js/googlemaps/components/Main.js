import React from 'react'
import ReactDOM from 'react-dom'
import Footer from './layout/footer.js'
import MapAllStores from './MapAllStores'
import Header from './layout/header'
import AddressInput from './input/AddressInput'

const app = document.getElementById("app")


class App extends React.Component {

  constructor(){
    super()
    this.state={
        address: ''
    }
  }


    onFilterAddress(address){
      //console.log(address)
      this.setState({address: address})
    }


    render() {

        return(

            <div style={{width: 800, background: 'pink'}}>
              <Header />
              <div  style={{ padding: '10px 10px'}}>
                <AddressInput onFilterAddress={this.onFilterAddress.bind(this)}/>
              </div>
              <div style={{width: 800, height:800, background: 'pink'}}>
                <MapAllStores address={this.state.address}/>
              </div>
              <Footer />
            </div>
        )
    }
}

ReactDOM.render(<App />, app)
