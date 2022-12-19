import React, { Component } from "react";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
//import Header from "./component/header";
//import Content from "./component/content";


class App extends Component {


  render() {

    return (

      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;