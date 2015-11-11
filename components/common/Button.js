import React, {
    Component, PropTypes
}
from 'react-native';
var {
    StyleSheet,
    Text,
    TouchableHighlight
} = React;

export default class Button extends Component {

    render() {
        let {
            btnStyle, underlayColor, text, textStyle,
            onPress
        } = this.props;
        return (
            <TouchableHighlight 
                    style={btnStyle}
                    underlayColor={underlayColor}
                    onPress={onPress}
                >
                <Text style={textStyle}>{text}</Text>
            </TouchableHighlight>
        );
    }
}

var styles = StyleSheet.create({
    btnStyle: {
        width: 120,
        padding: 10,
        borderRadius: 5
    }, 
    textStyle: {
        color: '#fff',
        textAlign: 'center'
    }
});

Button.defaultProps = {
    btnStyle: styles.btnStyle,
    text: 'Click',
    underlayColor: '#fff',
    textColor: styles.textStyle,
    onPress: () => console.log('nothing')
}


