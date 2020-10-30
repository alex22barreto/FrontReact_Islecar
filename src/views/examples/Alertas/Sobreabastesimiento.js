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

class Sobreabastesimiento extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--3" fluid>
        <div  >
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
        </div>
        </Container>
      </>
    );
  }
}

export default Sobreabastesimiento;
