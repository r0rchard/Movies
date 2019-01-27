// Components/FilmDetail.js

import React from "react";
import { StyleSheet, View, ActivityIndicator,ScrollView,Text } from "react-native";
import { getFilmDetailFromApi } from "../API/TMDBApi";

class FilmDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film: undefined,
      isLoading: true
    };
  }
  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
  }
  _displayFilm() {
    if (this.state.film != undefined) {
      return (
        <ScrollView style={styles.scrollview_container}>
          <Text style = {styles.title_text}> {this.state.film.title}</Text>
          <Text style = {styles.description_text} >{this.state.film.overview}</Text>
         </ScrollView>
      );
    }
  }
  render() {
    return (
      <View style={styles.main_container}>
        {this._displayLoading()}
        {this._displayFilm()}
      </View>
    );
  }
  componentDidMount() {
    getFilmDetailFromApi(this.props.navigation.state.params.idFilm).then(
      data => {
        this.setState({
          film: data,
          isLoading: false
        });
      }
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  },
  loading_container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  description_text: {
    fontStyle: "italic",
    color: "#666666"
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 20,
    flex: 1,
    flexWrap: "wrap",
    paddingRight: 5
  },
});

export default FilmDetail;
