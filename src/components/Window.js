
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import WindowBar from './WindowBar';
import WindowContent from './WindowContent';

const Window = (props) => {
    const [windowHeight, setWindowHeight] = useState(props.height);

    const windowStyles = {
        marginTop: props.marginTop,
        width: props.width,
        height: 'auto',
        fontFamily: 'Courier New',
        marginBottom: props.marginBottom,
        border: '1px solid black', 
        webkitBoxShadow: '0px 0px 28px 0px rgba(0,0,0,0.25)',
        mozBoxShadow: '0px 0px 28px 0px rgba(0,0,0,0.25)',
        boxShadow: '0px 0px 28px 0px rgba(0,0,0,0.25)',
    }

    return (
        <div class="window" style={windowStyles}>
            <WindowBar icon={props.icon} name={props.name} onClick={()=>{windowHeight == props.height ? setWindowHeight(props.maxHeight) : setWindowHeight(props.height)}}/>
            <WindowContent height={windowHeight}>
                {props.children}
            </WindowContent>
        </div>
      );
  };

export default Window;

Window.defaultProps = {
    width: 400,
    marginTop: 30,
    marginBottom: 15,
    maxHeight: '1000px'
}