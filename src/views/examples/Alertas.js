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

class Alertas extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
        <div  >
            <Card>
                <CardBody>
                    <div>
                        <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                            Insumos desabastecidos
                        </Button>
                        <UncontrolledCollapse toggler="#toggler">
                        <Card>
                            <CardBody>
                            <div class="embed-responsive embed-responsive-1by1">
                            <iframe class="embed-responsive-item" src="https://datastudio.google.com/embed/reporting/4f67e4d8-87d7-43a6-8322-459ce46c8a43/page/MtcbB" allowfullscreen></iframe>
                            </div>
                            </CardBody>
                        </Card>
                        </UncontrolledCollapse>
                        <br/>
                        
                    </div>
                    
                    <div>
                        <Button color="primary" id="toggler2" style={{ marginBottom: '1rem' }}>
                            Insumos sobre-abastecidos
                        </Button>
                        <UncontrolledCollapse toggler="#toggler2">
                        <Card>
                            <CardBody>
                            Los insumos sobre-abastecidos son los que su saldo actual supera las salidas del insumo en los últimos dos meses.
                            <br/>
                            <br/>
                            <div class="embed-responsive embed-responsive-1by1">
                                <iframe class="embed-responsive-item" src="https://datastudio.google.com/embed/reporting/780a66e6-b744-4834-b7b1-165f4ef46637/page/U9cbB" allowfullscreen></iframe>
                            </div>
                            </CardBody>
                        </Card>
                        </UncontrolledCollapse>
                        <br/>
                    </div>
                    
                    
                </CardBody>
            </Card>
        </div>
        </Container>
      </>
    );
  }
}

export default Alertas;
