import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Badge, Card, CardBody,Label, CardHeader, Input, Col, Row, Table, Form, InputGroupText, InputGroupAddon, InputGroup,
  FormGroup, Button,
} from 'reactstrap';
import { api } from '../../views'
import StarRatingComponent from 'react-star-rating-component';
import qs from 'query-string'
import InfiniteScroll from 'react-infinite-scroll-component';
const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};
function UserRow(props) {
  const voucher = props.voucher
  const voucherLink = `/vouchers/${voucher.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={voucher.id.toString()}>
      <th scope="row"><Link to={voucherLink}>{voucher.id}</Link></th>
      <td>{voucher.name}</td>
      <td><Link to={voucherLink}><Badge color={getBadge(voucher.status)}>Xem chi tiết</Badge></Link></td>
    </tr>
  )
}

class Vouchers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      phone: '',
      rating:'',
      skip: 0,
      limit: 10,
      canLoadMore:true
    };
  }
 
  componentDidMount() {
    this.refs.iScroll.addEventListener("scroll", () => {
      if (this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >=this.refs.iScroll.scrollHeight){
        this.fetchData();
      }
    });
  }
  async fetchData() {
    var { skip, limit, data,canLoadMore } = this.state
    if(!canLoadMore){
      return;
    }
    let option = {
      skip,
      limit,
    }
 
    var result = await api.dataService.actFetchVouchersRequest(option)
    console.log('rrr', result)
    if(result && result.data&&result.data.data&&result.data.data.length){
      skip += limit;
      data.push(...result.data.data);
      this.setState({ data, skip });
    }else{
      this.setState({canLoadMore:false})
    }
  }

  onChangeRate(v) {
    console.log('selected star', v);
  }
 
  render() {
    var { data, phone,rating
    } = this.state;
    console.log('data1111',data)
    // const userList = usersData.filter((user) => user.id < 10)

    return (
      <div className="animated fadeIn mt-5"  ref="iScroll" style={{  overflow: "auto" }}>
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Danh sách <small className="text-muted">mã voucher</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">Tên voucher</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data ? data.map((voucher, index) => (
                      <UserRow key={index} voucher={voucher} />
                    )) : ''}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Vouchers;
