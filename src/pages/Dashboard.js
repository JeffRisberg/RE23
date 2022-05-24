import React from "react";
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import "./Dashboard.css"

import { logout } from '../actions/user';

function Dashboard(props) {

   const navigate = useNavigate(); // <-- call hook to get navigate function

   function doLogout() {
     props.logout();
     navigate("/")
   }

   return (
   <div className="dashboard-container">
        OK
        <br/>
        {props.user != null ? props.user.firstName : ""}
        {props.user != null ? props.user.lastName : ""}
        <br/>
        <a onClick={doLogout}>Logout</a>
   </div>
 )
}

const mapStateToProps = (state) => ({
  user: state.app.user,
});

export default connect(
  mapStateToProps,
  { logout }
)(Dashboard);
