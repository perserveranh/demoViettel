import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {Link} from 'react-router-dom'
import { Container ,Row,Col,Card,CardBody,Form,InputGroup,InputGroupAddon,Input,InputGroupText,CardGroup,Button} from 'reactstrap';
import {
  AppBreadcrumb,
  AppFooter,
  AppHeader,
} from '@coreui/react';
import routes from '../../routes';
// const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense  fallback={this.loading()}>
            <DefaultHeader onLogout={e=>this.signOut(e)}/>
          </Suspense>
        </AppHeader>
        <Container>
          <Row className="justify-content-center mt-5">
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/vouchers" to="/" />
                </Switch>
              </Suspense>
            </Container>
          </Row>
        </Container>
      </div>
       
    );
  }
}

export default DefaultLayout;
