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
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
  Button,
  toggle,
  UncontrolledCollapse,
  CardBody
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";

class Ordenes extends React.Component {
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
                        Requerimiento de compra Accesorios
                        </Button>
                        <UncontrolledCollapse toggler="#toggler">
                        <Card>
                            <CardBody>
                            <div class="embed-responsive embed-responsive-1by1">
                            <iframe class="embed-responsive-item" src="https://datastudio.google.com/embed/reporting/cce6abb2-dee9-46da-a7c9-4c4852746c04/page/q68aB" allowfullscreen></iframe>
                            </div>
                            </CardBody>
                        </Card>
                        </UncontrolledCollapse>
                        <br/>
                        
                    </div>
                    
                    <div>
                        <Button color="primary" id="toggler2" style={{ marginBottom: '1rem' }}>
                        Requerimiento de compra Insumos
                        </Button>
                        <UncontrolledCollapse toggler="#toggler2">
                        <Card>
                            <CardBody>
                            <div class="embed-responsive embed-responsive-1by1">
                            <iframe class="embed-responsive-item" src="https://datastudio.google.com/embed/reporting/c5c28b8b-7bbf-4764-8d3d-aaf8ada71221/page/q68aB" allowfullscreen></iframe>
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

export default Ordenes;
