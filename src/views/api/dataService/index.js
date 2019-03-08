import { api, request } from '../../api';
var dataService = {
  actFetchVouchersRequest: (data) => {
    let url = 'api/voucher/get-list-vouchers'
    return request.callApi(url, '', data, 'POST', null).then(res => {
      console.log('ggg', res)
      if (res.status === 200) {
        return res
      }
      else {
        return res
      }
    })
  },
  actGetVoucherInfo: (voucher) => {
    let url = 'api/voucher/get-voucher-info'
    return request.callApi(url, '', voucher, 'POST', null).then(res => {
      console.log('ggg', res)
      if (res.status === 200) {
        return res
      }
      else {
        return res
      }
    })
  },
  actGetCustomerCode: (data) => {
    let url = 'api/code/get-customer-codes'
    return request.callApi(url, '', data, 'POST', null).then(res => {
      console.log('ggg', res)
      if (res.status === 200) {
        return res
      }
      else {
        return res
      }
    })
  },
  actGetVoucherLike: (data) => {
    let url = 'api/voucher/like'
    return request.callApi(url, '', data, 'POST', null).then(res => {
      console.log('ggg', res)
      if (res.status === 200) {
        return res
      }
      else {
        return res
      }
    })
  },
  actGetVoucherRate: (data) => {
    let url = 'api/voucher/rate'
    return request.callApi(url, '', data, 'POST', null).then(res => {
      console.log('ggg', res)
      if (res.status === 200) {
        return res
      }
      else {
        return res
      }
    })
  },
  actGetVoucherCode: (data) => {
    let url = 'api/voucher/get-code'
    return request.callApi(url, '', data, 'POST', null).then(res => {
      console.log('ggg', res)
      if (res.status === 200) {
        return res
      }
      else {
        return res
      }
    })
  },
}

export default dataService;
