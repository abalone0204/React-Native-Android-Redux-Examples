/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
var MOCKED_MOVIES_DATA = [
  {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];
var movie = MOCKED_MOVIES_DATA[0];
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView
} = React;

var AwesomeProject = React.createClass({
  getInitialState: function () {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2 
      }),
      loaded: false
    };
  },
  componentDidMount: function () {
    this.fetchData();
  },
  fetchData: function () {
     fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true
        });
      })
      .done();
  },
  render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    };
    // var movie = this.state.movies[0];
    // return this.renderMovie(movie);
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.listView}
      />
      );
  },
  renderLoadingView: function() {
     return (
        <View style={styles.container}>
          <Text>
            Loading movies...
          </Text>
        </View>
      );
  },
  renderMovie: function(movie) {
    return (
      <View style={styles.container}>
        <Image 
          style={styles.thumbnail} 
          source={{uri: movie.posters.thumbnail}} 
          />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
      );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  rightContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 53, 
    height: 81
  },
   title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  listView: {
    paddingTop: 20,
    backgroundColor: "#F5FCFF"
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
