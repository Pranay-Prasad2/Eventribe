import React from 'react'
import Client from './components/Themes/Client';
const Themedisplay = (props) => {
    const{s,cl} = props;
    switch (s.Theme) {
        case 1:
            return ( <Client cl = {cl}/>);
        case 2:
            return ( <div>Value</div> );
        default:
            break;
    }
}

export default Themedisplay