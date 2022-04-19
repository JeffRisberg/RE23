import React, {Component} from "react";

import Login from "../components/Login/Login"

class Home extends Component {

   render() {
     return (
     <div className="home-container">
       <div className="row">
          <div className="col-md-12">
             <h2>Coach.ai</h2>
          </div>
       </div>
       <div className="row">
          <div className="col-md-9" style={{background: "wheat"}}>
          </div>
          <div className="col-md-3">
             <Login />
          </div>
       </div>
     </div>
     )}
}

export default Home;
