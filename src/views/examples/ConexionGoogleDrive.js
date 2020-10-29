import React, { Component } from 'react';
import GooglePicker from 'react-google-picker';
import {
  Container,
  table
} from "reactstrap";
import Header from "components/Headers/Header.js";
import { gapi } from 'gapi-script';


class ConexionGoogleDrive extends Component {

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