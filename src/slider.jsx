import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Slider extends Component {
    render() { 
        return (
            <div>
                <Link to="/subject1" id="subject1">subject1</Link> <br/>
                <Link to="/subject2" id="subject2">subject2</Link> <br/>
                <Link to="/subject3" id="subject3">subject3</Link> <br/>
                <Link to="/subject4" id="subject4">subject4</Link> <br/>
                <Link to="/subject5" id="subject5">subject5</Link> <br/>
                <Link to="/subject6" id="subject6">subject6</Link>
            </div> 
         );
    }
}

export default Slider;
