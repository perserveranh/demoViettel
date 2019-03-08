import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table,Button } from 'reactstrap';
import { api } from '../../views'

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
      <th scope="row">{voucher.id}</th>
      <td>{voucher.voucherName}</td>
      <td><Badge color={getBadge(voucher.status)}>{voucher.code}</Badge></td>
      <td>{voucher.partnerName}</td>

      <td>{voucher.phone}</td>

      <td><img src={voucher.partnerLogo} alt={voucher.partnerName} width={100} height={100} /></td>

    </tr>
  )
}
class VoucherCodes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      skip: 0,
      limit: 10,
      canLoadMore:true
    };
  }
  componentDidMount() {
    // this.refs.iScroll.addEventListener("scroll", () => {
    //   if (
    //     this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >=
    //     this.refs.iScroll.scrollHeight
    //   ) {
    //     this.fetchData();
    //   }
    // });
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
      phone: '0961105256'
    }
    var result = await api.dataService.actGetCustomerCode(option)
    console.log('rrr', result)
    if(result && result.data&&result.data.data&&result.data.data.length){
      skip += limit;
      data.push(...result.data.data);
      this.setState({ data, skip });
    }else{
      this.setState({canLoadMore:false})
    }
   
  }

  render() {

    var { data
    } = this.state;

    return (
      <div className="animated fadeIn mt-5"   ref="iScroll" style={{  overflow: "auto" }}>
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Danh sách <small className="text-muted">mã voucher đã lấy</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">Tên voucher</th>
                      <th scope="col">Mã voucher</th>
                      <th scope="col">Tên đối tác</th>
                      <th scope="col">Liên hệ</th>
                      <th scope="col">Logo</th>
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
            {/* <Button onClick={this.loadMore.bind(this)}>..</Button> */}
          </Col>
        </Row>
      </div>
    )
  }
}

export default VoucherCodes;
