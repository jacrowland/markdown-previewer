import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from "@fortawesome/free-solid-svg-icons";
const WindowBar = (props) => {

    const [buttonColor, setButtonColor] = useState('black');
    const [cursor, setCursor] = useState("default");

    const barStyles = {
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'rgb(227, 91, 207)',
        fontWeight: 'bolder',
        borderBottom: '1px solid black',
        cursor: cursor
    }

    return (
    <div className="window-bar flex flex-row justify-space-around" style={barStyles} >
        <div>
            <FontAwesomeIcon icon={props.icon} />
            {' ' + props.name}
        </div>
        <div>
            <a onMouseEnter={()=>{setButtonColor('white'); setCursor('pointer')}} onMouseLeave={()=>{setButtonColor('black');setCursor('default')}} onClick={props.onClick}>
                <FontAwesomeIcon icon={faExpand} style={{color: buttonColor}}  />
            </a>
        </div>
    </div>
    );
}

export default WindowBar;


WindowBar.defaultProps = {
    icon: faSquare
}