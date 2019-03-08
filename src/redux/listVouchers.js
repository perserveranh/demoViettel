var initialState = {
  vouchers: []
}

const listVouchers = (state = initialState, action) => {
  let vouchers = [...state.vouchers];
  var index = -1;
  var id = '';
  switch (action.type) {
    case 'FETCH_VOUCHERS':
      // console.log({ action })
      return Object.assign({}, state, { vouchers: action.voucher });
    case 'ADD_VOUCHER':
      // console.log({ action })
      vouchers.push(action.voucher);
      return { ...state, vouchers };
    case 'UPDATE_VOUCHER':
      // console.log({ actionUpdate: action })
      id = action.voucher.id;
      index = findIndex(state, { id });
      if (index == -1) {
        vouchers.push(action.voucher);
      } else {
        vouchers[index] = action.voucher
      }
      // console.log('vouchers', vouchers)
      return { ...state, vouchers };
    case 'DELETE_VOUCHER':
      // console.log({ action })
      index = findIndex(state, action.id);

      vouchers.splice(index, 1);
      return { ...state, vouchers };
    default: return state;
  }
}

var findIndex = (vouchers, id) => {
  let result = -1;
  vouchers.vouchers.forEach((voucher, index) => {
    if (voucher.id === id) {
      result = index;
    }
  });

  return result;
}

export default listVouchers;
