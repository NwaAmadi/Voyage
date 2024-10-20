import React, { Component } from "react";

class Welcome extends Component {
    render() {
        return (
            <div>
                <h1>This is a class component</h1>
                <p>This is a paragraph</p>
                <p>Multiple elements must be wrapped in a single div when its being returned from a function</p>
            </div>
        );
    }
}

export default Welcome;
