/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
    Card,
    Container,
    Button,
    UncontrolledCollapse,
    CardBody
  } from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

class RequerimientoCompraAccesorios extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--3" fluid>
        <div  >
            <Card>
                <CardBody>
                    
                            <div class="embed-responsive embed-responsive-1by1">
                            <iframe class="embed-responsive-item" src="https://datastudio.google.com/embed/reporting/cce6abb2-dee9-46da-a7c9-4c4852746c04/page/q68aB" allowfullscreen></iframe>
                            </div>
                            
                    
                   
                    
                </CardBody>
            </Card>
        </div>
        </Container>
      </>
    );
  }
}

export default RequerimientoCompraAccesorios;
