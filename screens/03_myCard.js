import React, { Component } from "react";
import NavDrawer from "../comp/navDrawer";
import { Button, View, Image } from "react-native";
import styles from "../comp/styles.js";

import EditInfo from "../comp/editInfo";
import EditGallery from "../comp/editGallery";
import EditProps from "../comp/editProps";

const ShowScreen = (data) => {
  switch (data.page) {
    case "gallery":
      return <EditGallery />;
    case "info":
      return <EditInfo />;
    case "props":
      return <EditProps />;
    default:
      return <EditGallery />;
  }
};

export default class MyCard extends React.Component {
  constructor(props) {
    super(props);
	this.state = { pager: "info" };
	
  }

  changePage = (p) => {
    //console.log("parent: ", p);
    this.setState({ pager: p });
  }

  render() {
    return (
      <View style={styles.container}>
        <NavDrawer parentChangePage={this.changePage} />
        <ShowScreen page={this.state.pager} />
      </View>
    );
  }
}
