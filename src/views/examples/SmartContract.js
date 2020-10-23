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
  ButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Container,
  Row,
  Button,
  CardBody,
  Form, FormGroup, Label, Input, 
  Col
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";

class SmartContract extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          actions: [],
          dropDownValue: 'Seleccione producto',
          dropdownOpen: false
        };

        this.toggle = this.toggle.bind(this);
        this.changeValue = this.changeValue.bind(this);
        
      }

      toggle(event) {

        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    changeValue(e) {
        this.setState({dropDownValue: e.currentTarget.textContent});
        let id = e.currentTarget.getAttribute("id");
        console.log(id);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        fetch("https://southamerica-east1-test-ips-8ebdf.cloudfunctions.net/ConsultarInventarioBigQuery", {
            method: 'POST',
            mode: "no-cors", 
            headers,
            crossDomain: true,
            useDefaultXhrHeader: false,
            body: JSON.stringify({
                'message' : id
              })
            })
          .then(res => res.json())
          .then(
            (result) => {
              /*this.setState({
                isLoaded: true,
                items: result
              });*/
              console.log('I was triggered during componentDidMount');
              console.log(result);
              
            },
            (error) => {
                console.log('I was triggered during componentDidMount error');
              this.setState({
                isLoaded: true,
                error
              });
            }
          )

    }
    
      componentDidMount() {
        fetch("https://southamerica-east1-test-ips-8ebdf.cloudfunctions.net/listaProductosTerminados")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                items: result
              });
              console.log('I was triggered during componentDidMount');
              console.log(result);
              
            },
            (error) => {
                console.log('I was triggered during componentDidMount error');
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
    return (
        <>
        <Header />
        
        <Container className="mt--7" fluid>
    <div>Error: {error.message}</div>
    </Container>
          </>
);
      } else if (!isLoaded) {
      return (
        <>
        <Header />
        
        <Container className="mt--4" fluid>
        <div>Loading...</div>
        </Container>
          </>
        );
      } else {
        return (
            <>
        <Header />
        
        <Container className="mt--7" fluid>
        <div>
        <Row>
        <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">
                <CardBody>
                  <Form>
                    
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              producto:
                            </label>
                            <br/>
                            <ButtonDropdown isOpen={this.state.dropdownOpen} id="input-username" className="" toggle={this.toggle}>
                                <DropdownToggle caret>
                                    {this.state.dropDownValue}
                                </DropdownToggle>
                                <DropdownMenu>
                                    {items.map(e => {
                                        return <DropdownItem id={e.CodigoProducto} key={e.CodigoProducto} onClick={this.changeValue} >{e.CodigoProducto}</DropdownItem>
                                    })}
                                </DropdownMenu>

                            </ButtonDropdown>
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Descripcion:
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="jesse@example.com"
                              type="email"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Precio Unitario:
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="jesse@example.com"
                              type="email"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-cantidad"
                            >
                              cantidad:
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-cantidad"
                              placeholder="0"
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Descuento:
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Jesse"
                              id="input-last-name"
                              placeholder="Last name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Precio Total:
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Jesse"
                              id="input-last-name"
                              placeholder="Last name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-cantidad-disponible"
                            >
                              Cantidad Disponible:
                            </label>
                            <br/>
                            <label
                              className="form-control-label"
                              id="input-cantidad-disponible"
                            >
                              Cantidad Disponible:
                            </label>
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-fecha-prevista"
                            >
                              Fecha Prevista:
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-fecha-prevista"
                              
                              type="date"
                            />
                          </FormGroup>
                        </Col>
                        
                      </Row>
                      <Row>
                        
                      <Col className="text-center" xs="12">
                        <Button
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            size="sm"
                        >
                            Ordenar
                        </Button>
                        </Col>
                        
                      </Row>
                    </div>
                    
                  </Form>
                </CardBody>
              </Card>
            </Col>
        </Row>
            
            
        
            
            

            </div>
          </Container>
          </>
        );
      }
    /*return (
      <>
        <Header />
        
        <Container className="mt--7" fluid>
        <div  >
            <Card>
                <CardBody>
                    <div>
                        <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                        Ordenes de venta
                        </Button>
                        <UncontrolledCollapse toggler="#toggler">
                        <Card>
                            <CardBody>
                            
                            <ul>
                            {items.map(item => (
                                <li key={item.name}>
                                {item.name} 
                                </li>
                            ))}
                            </ul>


                            <div class="embed-responsive embed-responsive-1by1">
                            <iframe class="embed-responsive-item" src="https://datastudio.google.com/embed/reporting/b779490f-965f-481e-9373-04707a1fb358/page/ml8aB" allowfullscreen></iframe>
                            </div>
                            </CardBody>
                        </Card>
                        </UncontrolledCollapse>
                        <br/>
                        
                    </div>
                    
                    <div>
                        <Button color="primary" id="toggler2" style={{ marginBottom: '1rem' }}>
                        Ordenes de compra
                        </Button>
                        <UncontrolledCollapse toggler="#toggler2">
                        <Card>
                            <CardBody>
                            

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
    );*/
  }
}

export default SmartContract;