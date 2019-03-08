import React, { Component, } from 'react';
import {
  Col,
  Row,
} from 'reactstrap';




class Dashboard extends Component {
  con
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
        <h1>Trang không tồn tại !</h1>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
