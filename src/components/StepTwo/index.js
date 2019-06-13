import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import TagButtons from 'react-tag-buttons';

const tagsList = [
    {id:1, text:"Clothing"},
    {id:2, text:"ID"},
    {id:3, text:"Mental Health Care"},
    {id:4, text:"General Assistance"}
];

class StepTwo extends Component {
    render() {
        return (
            <div>
                <h1>This is the StepTwo Component</h1>
                <form>
                    <input type="text" placeholder="peopleCount" name="peopleCount" onChange={this.props.changeHandler} value={this.props.peopleCount}/>
                    <input type="text" placeholder="peopleNames" name="peopleNames" onChange={this.props.changeHandler} value={this.props.peopleNames}/>
                    <textarea type="text" placeholder="physicalDescript" name="physicalDescript" onChange={this.props.changeHandler} value={physicalDescript}/>
                    <TagButtons
                    dataSource={tagsList}
                    selectedDataSource={this.props.tags}
                    onTagClick={this.props.onTagClick}
            />
                </form>
            </div>
        )
    }
}

export default StepTwo