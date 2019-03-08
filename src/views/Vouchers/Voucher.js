import React, { Component, Suspense } from 'react';
import { Card, CardBody, FormGroup, Input, Label, CardHeader, Col, Row, Table, Button, Form, InputGroupText, InputGroupAddon, InputGroup, } from 'reactstrap';
import { api } from '../../views'
import { QRCode } from "react-qr-svg";
import StarRatingComponent from 'react-star-rating-component';
class Voucher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      dataCode: '',
      isLoading: true,
      rating: '',
      phone: '',
      liked: false
    };
  }
  componentDidMount() {
    this.fetchData()
  }
  async fetchData() {
    let voucher = {
      voucher: this.props.match.params.id
    }
    var result = await api.dataService.actGetVoucherInfo(voucher)
    console.log('xxx', result)
    this.setState({ data: result.data.data.voucherInfo });
  }
  async getCode() {
    let data = {
      voucher:  this.props.match.params.id,
      phone: '0961105256'
    }
    var result = await api.dataService.actGetVoucherCode(data)
    console.log('xxx', result)
    if(result.data.code == 0){

      this.setState({ dataCode: result.data.data, isLoading: false })
    }
    else{
      alert(result.data.message)
    }
  }
  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }
  onChange = async (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    await this.setState({
      [name]: value
    });
  }
  onSubmit = async e => {
    e.preventDefault();
    e.target.reset()
    var { phone, rating } = this.state;
    var data = {
      phone,
      voucher: this.props.match.params.id,
      rate: rating,
    }
    var result = await api.dataService.actGetVoucherRate(data)
    console.log('aaa', result)
    if (result.data.code != 1) {
      alert(result.data.message)
      this.setState({ phone: 0, rating: 0 })
    }
    else {
      alert(result.data.message)
      this.setState({ phone: 0, rating: 0 })
    }
  }
  handleClick = async () => {
    this.setState({
      liked: !this.state.liked
    });
    var data = {
      voucher: this.props.match.params.id,
      phone: '0961105256'
    }
    var result = await api.dataService.actGetVoucherLike(data)
    console.log('aaa', result)
    if (result.data.code != 1) {
      alert(result.data.message)
    }
    else {
      alert(result.data.message)
    }
  }
  loading = () => <div className="animated fadeIn  text-center" style={{ marginTop: '100px' }}>Loading...</div>
  render() {
    var { data, dataCode, rating, phone } = this.state
    console.log('rrr', data)
    const text = this.state.liked ? 'liked' : 'haven\'t liked';
    const label = this.state.liked ? 'Unlike' : 'Like'

    const userDetails = data ? Object.entries(data) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]

    return (
      <div className="animated fadeIn mt-5">
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>Voucher id: {this.props.match.params.id}</strong>
                <Button color="primary" className="float-right" onClick={this.getCode.bind(this)}>Lấy mã voucher</Button>
              </CardHeader>
              <CardBody>
                <Table responsive striped hover>
                  <tbody>
                    {
                      userDetails.map(([key, value]) => {
                        return (
                          <tr key={key}>
                            <td>{`${key}:`}</td>
                            <td><strong>{value}</strong></td>

                          </tr>
                        )
                      })
                    }
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col lg={6}>
            {!this.state.isLoading ?
              <div className="blog-card animated fadeIn">
                <div className="meta">

                  <QRCode
                    bgColor="#FFFFFF"
                    fgColor="#000000"
                    level="Q"
                    style={{ height: 200 }}
                    value={dataCode.expiredAt}
                    className="photo "
                  />
                </div>
                <div className="description">
                  <h1>Mã E-VOUCHER</h1>
                  <h2>{dataCode.code}</h2>
                  <p>Cung cấp mã ưu tiên cho nhân viên cửa hàng để sử dụng.</p>
                </div>
              </div>
              : ''}
            <Card>
              <CardBody>
                <Form onSubmit={this.onSubmit}>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>Số điện thoại</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" id="phone" name="phone" value={phone} onChange={this.onChange.bind(this)} />

                    </InputGroup>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="exampleEmail" sm={4} className="mt-4 bold rating">Chất lượng dịch vụ : </Label>
                    <Col sm={8} >
                      <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        value={rating}
                        onStarClick={this.onStarClick.bind(this)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup className="form-actions float-right">
                    <Button type="submit" size="sm" color="primary">Submit</Button>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
            <div className="customContainer">
              <button className="btn btn-primary mb-2" onClick={this.handleClick.bind(this)}>
                {label}</button>
              <p>
                you {text} this. Click to toggle.
        </p>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Voucher;
