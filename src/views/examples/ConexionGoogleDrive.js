import React, { Component } from 'react';
import GooglePicker from 'react-google-picker';
import {
  Container,
  table
} from "reactstrap";
import Header from "components/Headers/Header.js";
import { gapi } from 'gapi-script';
const fs = require('fs');

const SCOPE = 'https://www.googleapis.com/auth/drive.file';
const discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';
const API_KEY = "AIzaSyBAcwcGyaYCpmcXwg4yJOIPhckE1l-DEHE";
const CLIENT_ID ="351197940319-60vnm0dm6dc9tlv33k2r01k5lurohk3c.apps.googleusercontent.com";

class ConexionGoogleDrive extends Component {
  state = {
    name: '',
    googleAuth: '',
    selectedFile: null
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
    var isAuthorized = user.hasGrantedScopes(SCOPE);
    
    console.log(isAuthorized)


    /*if(false){
      console.log("user is autorized")
        
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
    }*/
  }

  // On file select (from the pop up) 
  onFileChange = event => { 
   
    // Update the state 
    this.setState({ selectedFile: event.target.files[0] }); 
    console.log(event.target.files[0]);
  }; 
   

  // On file upload (click the upload button) 
  onFileUpload = () => { 
   
    // Create an object of formData 
    const boundary='foo_bar_baz';

    var fileMetadata = {
      'name': this.state.selectedFile.name 
    };
    var media = {
      mimeType: this.state.selectedFile.type,
      body: this.state.selectedFile
    };
    console.log("***************************************");
    console.log(fileMetadata);
    console.log(media);
    console.log("***************************************");
    var multipartRequestBody =
        
        JSON.stringify(fileMetadata) +
        'Content-Type: ' + this.state.selectedFile.type + '\r\n\r\n' +
        media;

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
    /*drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: 'id'
    }, function (err, file) {
      if (err) {
        // Handle error
        console.error(err);
      } else {
        console.log('File Id: ', file.id);
      }
    });*/
   
  }; 

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
      <div>
      <GooglePicker clientId={"351197940319-60vnm0dm6dc9tlv33k2r01k5lurohk3c.apps.googleusercontent.com"}
              developerKey={"AIzaSyBAcwcGyaYCpmcXwg4yJOIPhckE1l-DEHE"}
              scope={['https://www.googleapis.com/auth/drive.file']}
              onChange={data => console.log('on change:', data)}
              onAuthFailed={data => console.log('on auth failed:', data)}
              multiselect={true}
              navHidden={true}
              authImmediate={false}
              viewId={'DOCS'}
              mimeTypes={['image/png', 'image/jpeg', 'image/jpg']}
              createPicker={ (google, oauthToken) => {
                const googleViewId = google.picker.ViewId.DOCS;
                const uploadView = new google.picker.DocsUploadView();
                const docsView = new google.picker.DocsView(googleViewId)
                    .setIncludeFolders(true)
                    .setSelectFolderEnabled(true);

                const picker = new window.google.picker.PickerBuilder()
                .enableFeature(google.picker.Feature.SIMPLE_UPLOAD_ENABLED)
                  .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
                    .addView(docsView)
                    .addView(uploadView)/*DocsUploadView added*/
                    .setOAuthToken(oauthToken)
                    .setDeveloperKey("AIzaSyBAcwcGyaYCpmcXwg4yJOIPhckE1l-DEHE")
                    .setCallback((data)=>{
                      if (data.action == google.picker.Action.PICKED) {
                          var fileId = data.docs[0].id;
                          alert('File ID: ' + fileId);
                          //picker();
                      }
                    });
                picker.build().setVisible(true);
            }}>
            
            <button > 
            <span>Google Drive</span>
                </button>
            <div className="google"></div>
        </GooglePicker>
      </div>
      </div>
        </Container>
      </>
    );
  }
}

export default ConexionGoogleDrive;