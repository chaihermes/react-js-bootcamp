import React, { Component } from 'react';

//classes são mais fáceis de testar
class MyComponent extends Component {
    myClickFunc = () => {
        console.log('clickity clickcty')
    }

    sum = (valueA, valueB) => {
        return valueA + valueB
    }

    render() {
        return (
        <div className="MyComponent">
            <p className="MyComponent-intro" onClick={this.myClickFunc}>Texto qualquer</p>
        </div>
        );
    }
}

export default MyComponent;