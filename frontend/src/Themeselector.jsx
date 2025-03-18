import React from 'react'
import Client from './components/Themes/Client';

const Themeselector = (props) => {
    const {cl} = props;
    let Theme = 1;
    switch (Theme) {
        case 1:
            return ( <Client cl = {cl}/>);
        case 2:
            return ( <div>Value</div> );
        default:
            break;
    }
}

export default Themeselector