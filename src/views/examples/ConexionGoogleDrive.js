import React, { Component } from 'react';
import {
  Container
} from "reactstrap";
import Header from "components/Headers/Header.js";
import { gapi } from 'gapi-script';

const SCOPE = 'https://www.googleapis.com/auth/drive.metadata.readonly';
const discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';
const API_KEY = "AIzaSyBAcwcGyaYCpmcXwg4yJOIPhckE1l-DEHE";
const CLIENT_ID ="351197940319-60vnm0dm6dc9tlv33k2r01k5lurohk3c.apps.googleusercontent.com";

class ConexionGoogleDrive extends Component {
  state = {
    name: '',
    googleAuth: ''
  }
  componentDidMount(){
    var script = document.createElement('script');
    script.onload=this.handleClientLoad;
    script.src="https://apis.google.com/js/api.js";
    document.body.appendChild(script);
  }


  initClient = () => {
    try{
       gapi.client.init({
          'apiKey': API_KEY,
          'clientId': CLIENT_ID,
          'scope': SCOPE,
          'discoveryDocs': [discoveryUrl]
        }).then(() => {
          this.setState({
            googleAuth:  gapi.auth2.getAuthInstance()
          })
          this.state.googleAuth.isSignedIn.listen(this.updateSigninStatus);  
         document.getElementById('signin-btn').addEventListener('click', this.signInFunction);
         document.getElementById('signout-btn').addEventListener('click', this.signOutFunction);

      });
    }catch(e){
      console.log(e);
      console.log("error al alll");
    }
  }


  signInFunction =()=>{
    this.state.googleAuth.signIn();
    this.updateSigninStatus()
  }

  signOutFunction =()=>{
    this.state.googleAuth.signOut();
    this.updateSigninStatus()
  }

  updateSigninStatus = ()=> {
    this.setSigninStatus();
  }


  setSigninStatus= async ()=>{
    var user = this.state.googleAuth.currentUser.get();
    console.log(user)
    if (user.wc == null){
      this.setState({
        name: ''
      });
    }
    else{
      var isAuthorized = user.hasGrantedScopes(SCOPE);
      if(isAuthorized){
        this.setState({
          name: user.Ot.Cd
        });
        const boundary='foo_bar_baz'
        const delimiter = "\r\n--" + boundary + "\r\n";
        const close_delim = "\r\n--" + boundary + "--";
        var fileName='mychat123';
        var fileData='this is a sample data';
        var contentType='text/plain'
        var metadata = {
          'name': fileName,
          'mimeType': contentType
        };

        var multipartRequestBody =
          delimiter +
          'Content-Type: application/json; charset=UTF-8\r\n\r\n' +
          JSON.stringify(metadata) +
          delimiter +
          'Content-Type: ' + contentType + '\r\n\r\n' +
          fileData+'\r\n'+
          close_delim;

          console.log(multipartRequestBody);
          var request =  gapi.client.request({
            'path': 'https://www.googleapis.com/upload/drive/v3/files',
            'method': 'POST',
            'params': {'uploadType': 'multipart'},
            'headers': {
              'Content-Type': 'multipart/related; boundary=' + boundary + ''
            },
            'body': multipartRequestBody});
        request.execute(function(file) {
          console.log(file)
        });
      }
    }
  }

  handleClientLoad = ()=>{
     gapi.load('client:auth2', this.initClient);
  }
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
        <div  >
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
      <div className="App">
        <div>UserName: <strong>{ this.state.name}</strong></div>
        <button id="signin-btn">Sign In</button>
        <button id="signout-btn">Sign Out</button>
      </div>
      </div>
        </Container>
      </>
    );
  }
}

export default ConexionGoogleDrive;