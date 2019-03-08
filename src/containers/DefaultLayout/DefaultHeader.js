import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Container,  Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <Container>
        <Nav className="" navbar>
          <NavItem className="px-3">
            <Link to="/vouchers" className="nav-link" >Danh sách Voucher</Link>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/voucher-code">Danh sách mã Voucher</Link>
          </NavItem>
        </Nav>
        </Container>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
