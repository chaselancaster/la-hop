import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import TagButtons from 'react-tag-buttons';
import Button from '../Styles/Button'
import DatePicker   from '../DatePicker'

// StepTwo CSS
import './StepTwo.css'

const tagsList = [
    {id:1, text:"Clothing"},
    {id:2, text:"General Assistance"},
    {id:3, text:"Mental Health Care"},
    {id:4, text:"ID"},
    {id:5, text:"Physical Healthcare"},
    {id:6, text:"Phone"},
    {id:7, text:"Food"}
];

{/* <TagButtons
dataSource={tagsList}
selectedDataSource={this.props.tags}
onTagClick={this.props.onTagClick}
/> */}

class StepTwo extends Component {
    render() {
        return (
            <div>
                {/* <h1>This is the StepTwo Component</h1> */}
                <form className="stepTwoForm">
                    <div>
                        <h4>Date last seen *</h4>
                        <DatePicker />
                    </div>
                    <br/>
                    <div>
                        <h4>Number of people *</h4>
                        <input type="number" placeholder="peopleCount" name="peopleCount" onChange={this.props.changeHandler} value={this.props.peopleCount}/>
                    </div>
                    <br/>
                    <div>
                        <h4>Name of person/people requiring outreach *</h4>
                        <input type="text" placeholder="peopleNames" name="peopleNames" onChange={this.props.changeHandler} value={this.props.peopleNames}/>
                    </div>
                    <br/>
                    <div>
                        <h4>Description of person/people *</h4>
                        <textarea type="text" placeholder="physicalDescript" name="physicalDescript" onChange={this.props.changeHandler} value={this.props.physicalDescript}/>
                    </div>
                    <br/>
                    <div>
                        <h4>What is needed? *</h4>
                        <div>
                            <button className="btnTag">Clothing</button>
                            <button className="btnTag">General Assistance</button>
                            <button className="btnTag">Mental Health Care</button>
                        </div>
                        <div>
                            <button className="btnTag">ID</button>
                            <button className="btnTag">Physical Healthcare</button>
                            <button className="btnTag">Phone</button>
                            <button className="btnTag">Food</button>
                        </div>
                    </div>
                    <div>
                        <Button onClick={this.props.changeProgress}>Next Step</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default StepTwo