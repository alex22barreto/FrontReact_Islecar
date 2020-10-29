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
    Button,
    UncontrolledCollapse,
    CardBody,
    Container
  } from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

class KardexProductoTerminado extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
        <div  >
            <Card>
                <CardBody>
                    
                    
                    
                            <div class="embed-responsive embed-responsive-1by1">
                            <iframe class="embed-responsive-item" src="https://datastudio.google.com/embed/reporting/cb7e0cf4-88a8-43bd-8173-03bc904c31ab/page/cJVbB" allowfullscreen></iframe>
                            </div>
                            
                    
                    
                </CardBody>
            </Card>
        </div>
        </Container>
      </>
    );
  }
}

export default KardexProductoTerminado;
