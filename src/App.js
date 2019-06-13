import React, {Component }           from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import { PacmanLoader }              from 'react-spinners'

import NavBar       from './components/Nav'
import MapContainer from './components/MapContainer'
import LearnMore    from './components/LearnMore'
import Form         from './components/Form'
import DatePicker   from './components/DatePicker'
import StepProgressBar  from './components/ProgressBar'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree'



import * as routes  from './constants/routes'
import './App.css'
import 'react-tag-buttons/lib/css/styles.css'


class App extends Component {

  state = {
    message: "",
    location: '',
    date: '',
    peopleCount: 0,
    peopleNames: '',
    physicalDescript: '',
    needsDescript: '',
    tags: [],
    name: '',
    org: '',
    selfDescript: '',
    email: '',
    phone: '',
    agreement: false,
    loading: true,
    percent: 0
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // Change progress function for progress bar 
  changeProgress = () => {
    console.log("changeProgress function hit")
    let currentNum = this.state.percent
    this.setState({
        percent: currentNum + 50
    });
}

onTagClick = (currSelectedState, id, text) => {
  let {tags} = this.state;
  if(!currSelectedState){
      tags.push({id:id, text:text});
  }else{
      tags = tags.filter((item)=>{return item.id !== id});
    // loading: true
  }
  this.setState({
      tags: tags
  });
};

  onSubmit = async e => {
    e.preventDefault();
    try{
        const createTicket = await fetch("http://localhost:3001/ticket/create", {
            method: "POST",
            // credentials: "include",
            body: JSON.stringify(this.state),
            headers: {
              "Content-Type": "application/json"
            }
          });
          const parsedResponse = await createTicket.json();
          if (parsedResponse.success) {
            // setting localStorage on front end so user remains logged in
            // logout = localStorage.clear()
            // and clear sessions in back
            this.setState({
              message: parsedResponse.message,
              location: '',
              date: '',
              peopleCount: 0,
              peopleNames: '',
              physicalDescript: '',
              needsDescript: '',
              tags: [],
              name: '',
              org: '',
              selfDescript: '',
              email: '',
              phone: '',
              agreement: false
            });
          } 
    } catch(err) {
        console.log(err)
    }
  };

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
            {/* <MapContainer changeHandler={this.changeHandler} location={this.state.location} changeProgress={this.changeProgress}/> */}
            {/* <DatePicker /> */}
            <div className="barContainer">
            {/* <StepProgressBar percent={this.state.percent}/> */}
            </div>
            {/* <StepTwo onTagClick={this.onTagClick} tags={this.state.tags} peopleCount={this.state.peopleCount} peopleNames={this.state.peopleNames} changeHandler={this.changeHandler} physicalDescript={this.state.physicalDescript} changeProgress={this.changeProgress}/> */}
            <StepThree />
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
