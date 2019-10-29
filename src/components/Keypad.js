import React, {Component} from 'react';

class Keypad extends Component {
    
    handleOnKeyUp(e) {
        console.log('Entering password...')
    }

    render() {
        return <input type="password" onKeyUp={this.handleOnKeyUp}/>
    }

}

export default Keypad