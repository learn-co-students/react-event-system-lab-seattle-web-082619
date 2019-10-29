import React, {Component} from 'react';

class EyesOnMe extends Component {
    handleOnBlur(e) {
        console.log('Hey! Eyes on me!')
    }

    handleOnFocus(e) {
        console.log('Good!')
    }
    
    render() {
        return(
            <button onFocus={this.handleOnFocus} onBlur={this.handleOnBlur}></button>
        );
    }
}

export default EyesOnMe