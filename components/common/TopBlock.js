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
                    <TouchableWithoutFeedback
                        style={styles.highlight}
                        underlayColor="white" 
                    >
                        <Image
                            style={styles.head}
                            source={require('../../my-icon.png')}
                        />
                    </TouchableWithoutFeedback>
                </View>             
            );
    }
}
TopBlock.defaultProps = {
    text: "Title"
}
var styles = StyleSheet.create({
    'title': {
        flex: 1,
        marginTop: 50,
        color: '#50e3c2',
        textAlign: 'center',
        fontSize: 30
    },
    'highlight': {
        borderRadius: 100
    },
    'head': {
        flex: 1,
        width: 200,
        height: 200,
        borderRadius: 100
    },
    'topBlock': {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#23263a'
    }
});