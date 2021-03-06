import React from 'react';

import AppHeader from 'src/layout/app-header';
import TopNav from 'src/layout/top-nav';
import SideNav from 'src/layout/side-nav';
import SideNavToggle from 'src/layout/side-nav/toggle';
import SideNavLogo from 'src/layout/side-nav/logo';
import SideNavItem from 'src/layout/side-nav/item';
import Collapsible from 'src/collapsible/collapsible';
import CollapsibleSection from 'src/collapsible/section';
import InputWrapper from 'src/forms/input-wrapper';
import Alert from 'src/alert';
import Modal from 'src/modal';
import Row from 'src/row';
import Col from 'src/col';
import AutoCols from 'src/auto-cols';
import Table from 'src/table';
import Card from 'src/card';
import Waves from 'src/waves';

const HomePage = React.createClass({

  getInitialState() {
    return {
      collapsed : true,
      open : false,
      modal : false,
    };
  },

  toggleModal() {
    this.setState({ modal : ! this.state.modal });
  },

  onCollapseToggle() {
    this.setState({ collapsed : ! this.state.collapsed });
  },

  sideNavToggle() {
    this.setState({ open : ! this.state.open });
  },

  render() {

    return (
      <div>
        <div className="app-content">

          <AppHeader fixedNav={true}>
            <TopNav>
              <SideNavToggle onClick={this.sideNavToggle} />
              <a className="page-title">Page Title</a>
              <div className="user-menu">Hello, User! (logout)</div>
            </TopNav>
            <SideNav open={this.state.open} onDismiss={this.sideNavToggle}>
              <SideNavLogo>asdf</SideNavLogo>
              <SideNavItem bold={true} active={true}>
                <a>asdf</a>
              </SideNavItem>
              <SideNavItem bold={true}>
                <a>asdf</a>
              </SideNavItem>

              <Collapsible>

                <CollapsibleSection header="Waves!"
                                    open={this.state.collapsed}
                                    onToggle={this.onCollapseToggle}>
                  <ul>
                    <Waves>
                      <SideNavItem>
                        <a>Plain</a>
                      </SideNavItem>
                    </Waves>
                    <Waves color="orange">
                      <SideNavItem>
                        <a>Orange</a>
                      </SideNavItem>
                    </Waves>
                    <Waves color="red">
                      <SideNavItem>
                        <a>Red</a>
                      </SideNavItem>
                    </Waves>
                    <Waves color="yellow">
                      <SideNavItem>
                        <a>Yellow</a>
                      </SideNavItem>
                    </Waves>
                    <Waves color="purple">
                      <SideNavItem>
                        <a>Purple</a>
                      </SideNavItem>
                    </Waves>
                    <Waves color="green">
                      <SideNavItem>
                        <a>Green</a>
                      </SideNavItem>
                    </Waves>
                    <Waves color="teal">
                      <SideNavItem>
                        <a>Teal</a>
                      </SideNavItem>
                    </Waves>
                  </ul>
                </CollapsibleSection>


              </Collapsible>

              <SideNavItem bold={true}>
                <a>asdf</a>
              </SideNavItem>

              <SideNavItem bold={true}>
                <a>asdf</a>
              </SideNavItem>

            </SideNav>
            <Modal visible={this.state.modal} onBackgroundClick={this.toggleModal}>
              <Modal.Content>asdf</Modal.Content>
              <Modal.Footer>
                <a href="#" className="waves-effect waves-green btn-flat">Agree</a>
              </Modal.Footer>
            </Modal>
          </AppHeader>

          <Row>
            <Col sm={12} md={4} lg={3}>m3
              <a onClick={this.toggleModal}>MODAL!</a>
            </Col>
            <Col sm={12} md={8} lg={9}>m9</Col>
          </Row>
          <Row>
            <Col sm={12}>
              <InputWrapper label="An Input!">
                <input type="text" />
              </InputWrapper>
            </Col>
          </Row>
          <Row>
            <AutoCols md={3}>
              <Waves>
                <button className="btn btn-large">
                  Waves!
                </button>
              </Waves>
              <Waves color="blue">
                <button className="btn btn-large">
                  Waves!
                </button>
              </Waves>
            </AutoCols>
          </Row>
          <Row>
            <Col sm={12} md={8} lg={9}>
              <Card title="This is a test">
                <p>Card contents goes here</p>
              </Card>
            </Col>
          </Row>

          <Row>
            <AutoCols md={12}>
              <Alert color="red">Alert contents!</Alert>
              <Alert color="pink">Alert contents!</Alert>
              <Alert color="purple">Alert contents!</Alert>
              <Alert color="deep-purple">Alert contents!</Alert>
              <Alert color="indigo">Alert contents!</Alert>
              <Alert color="blue">Alert contents!</Alert>
              <Alert color="light-blue">Alert contents!</Alert>
              <Alert color="cyan">Alert contents!</Alert>
              <Alert color="teal">Alert contents!</Alert>
              <Alert color="green">Alert contents!</Alert>
              <Alert color="light-green">Alert contents!</Alert>
              <Alert color="lime">Alert contents!</Alert>
              <Alert color="yellow">Alert contents!</Alert>
              <Alert color="amber">Alert contents!</Alert>
              <Alert color="orange">Alert contents!</Alert>
              <Alert color="deep-orange">Alert contents!</Alert>
              <Alert color="brown">Alert contents!</Alert>
              <Alert color="blue-grey">Alert contents!</Alert>
              <Alert color="grey">Alert contents!</Alert>
            </AutoCols>
          </Row>


          <Row>
            <Col md={12}>
              <ul className="tabs teal darken-1 z-depth-1">
                <Waves>
                  <li className="tab active">Waves Tab!</li>
                </Waves>
                <Waves>
                  <li className="tab">This Is A Stupidly Wide Label</li>
                </Waves>
                <Waves>
                  <li className="tab">Waves Tab!</li>
                </Waves>
                <Waves>
                  <li className="tab">Waves Tab!</li>
                </Waves>
                <Waves>
                  <li className="tab">Waves Tab!</li>
                </Waves>
              </ul>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Table bordered>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>

        </div>
      </div>
    );
  },
});

export default HomePage;
