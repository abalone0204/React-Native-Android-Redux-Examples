import React, {Component, PropTypes} from 'react-native';
var {
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableHighlight,
    TouchableWithoutFeedback
} = React;
export default class TopBlock extends Component {
    render() {
        let {text} = this.props;
        return (
                <View style={styles.topBlock}>
                    <Text style={styles.title}>
                        {text}
                    </Text>
                    
                </View>             
            );
    }
}
TopBlock.defaultProps = {
    text: "Title"
}
var styles = StyleSheet.create({
    'title': {
        flex:1,
        color: '#50e3c2',
        textAlign: 'center',
        fontSize: 30
    },
    'topBlock': {
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#23263a'
    }
});