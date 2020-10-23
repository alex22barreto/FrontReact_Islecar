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

class Inventario extends React.Component {
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
                        Kardex Materia Prima
                        </Button>
                        <UncontrolledCollapse toggler="#toggler">
                        <Card>
                            <CardBody>
                            <div class="embed-responsive embed-responsive-1by1">
                            <iframe class="embed-responsive-item" src="https://datastudio.google.com/embed/reporting/5f9b7def-1c8b-4989-928d-42f157437567/page/cJVbB" allowfullscreen></iframe>
                            </div>
                            </CardBody>
                        </Card>
                        </UncontrolledCollapse>
                        <br/>
                        
                    </div>
                    
                    <div>
                        <Button color="primary" id="toggler2" style={{ marginBottom: '1rem' }}>
                        Kardex Producto Terminado
                        </Button>
                        <UncontrolledCollapse toggler="#toggler2">
                        <Card>
                            <CardBody>
                            <div class="embed-responsive embed-responsive-1by1">
                            <iframe class="embed-responsive-item" src="https://datastudio.google.com/embed/reporting/cb7e0cf4-88a8-43bd-8173-03bc904c31ab/page/cJVbB" allowfullscreen></iframe>
                            </div>
                            </CardBody>
                        </Card>
                        </UncontrolledCollapse>
                        <br/>
                    </div>
                    <div>
                        <Button color="primary" id="toggler3" style={{ marginBottom: '1rem' }}>
                        Kardex Insumos
                        </Button>
                        <UncontrolledCollapse toggler="#toggler3">
                        <Card>
                            <CardBody>
                            <div class="embed-responsive embed-responsive-1by1">
                            <iframe class="embed-responsive-item" src="https://datastudio.google.com/embed/reporting/fb9eef97-f852-44bf-b284-37684c221349/page/cJVbB" allowfullscreen></iframe>
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

export default Inventario;
