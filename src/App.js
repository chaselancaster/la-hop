import React, {Component }           from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import { PacmanLoader }              from 'react-spinners'

import NavBar       from './components/Nav'
import MapContainer from './components/MapContainer'
import LearnMore    from './components/LearnMore'
import Form         from './components/Form'
import DatePicker   from './components/DatePicker'
import StepProgressBar  from './components/ProgressBar'


import * as routes  from './constants/routes'
import './App.css'
import 'react-tag-buttons/lib/css/styles.css'


class App extends Component {

  state = {
    // loading: true
  }

  render(){
    // const { loading } = this.state

    return(

      <div className="grid-container">
        <div className="grid-mobile"><img src="status_bar.png" /></div>
        <div className="grid-header">
          <div className="top-left"><img src="grid_mobile.png"></img></div>
          <div className="mid-left">LA-HOP</div><div className="mid-right"></div>
          <div className="top-right">Contact</div>
          {/* <PacmanLoader color={'gold'} size={10} /> */}
        </div>
        <div className="grid-desktop">
          <div className="top-left"><img src="grid_desktop.png"></img></div>
          <div className="mid-left">LAHSA</div><div className="mid-right">Los Angeles Homeless Outreach Portal
        </div>
        <div className="top-right">Contact</div>
          {/* <PacmanLoader color={'gold'} size={10} /> */}
        </div>

        <div className="grid-logo">
          <h1>LA - HOP</h1>
          <h2>Homeless Outreach Portal</h2>
          <span>LA-HOP is designed to assist people experiencing homelessness in LA County with outreach services.</span>
        </div>

        <div className="grid-main">
        <Switch>
          <Route exact path={routes.INFO} render={() =>
            <LearnMore />
          }/>
          <Route exact path={routes.REQUEST} render={() => <>
            <MapContainer />
            <DatePicker />
            <div className="barContainer">
            <StepProgressBar />
            </div>
            <Form />
          </> }/>
          <Route exact path={routes.ROOT} render={() => <></> }/>
        </Switch>
        </div>

        <div className="grid-footer"></div>

      </div>

    )
  }
}

export default App;
