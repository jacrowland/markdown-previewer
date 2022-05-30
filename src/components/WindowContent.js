

const WindowContent = (props) => {
    const contentStyles = {
        height: props.height,
        backgroundColor: '#fafafa',
        minHeight: props.minHeight,
    }

    return (
        <div className="window-content" style={contentStyles}>
            {props.children}
        </div>
    );
}

export default WindowContent;

WindowContent.defaultProps = {
    minHeight : 200,
    height: 'auto'
}