
var initialState = {
  users: [],
  stores: [],
  storeareas: [],
  products: [],
  categories: [],
  priceproducts: [],
  listvouchers: [],
  listconfigs: [],
  storepartners:[]
};

const itemEditing = (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_USER':
      // console.log({ action })
      return Object.assign({}, state, { users: action.user });
    case 'EDIT_STORE':
      // console.log({ action })
      return Object.assign({}, state, { stores: action.storea });
    case 'EDIT_STOREAREA':
      // console.log({ action })
      return Object.assign({}, state, { storeareas: action.storearea });
    case 'EDIT_PRODUCT':
      // console.log({ action })
      return Object.assign({}, state, { products: action.product });
    case 'EDIT_CATEGORY':
      // console.log({ action })
      return Object.assign({}, state, { categories: action.category });
    case 'EDIT_PRICEPRODUCT':
      // console.log({ action })
      return Object.assign({}, state, { priceproducts: action.priceproduct });
    case 'EDIT_VOUCHER':
      // console.log({ action })
      return Object.assign({}, state, { listvouchers: action.voucher });
    case 'EDIT_CONFIGS':
      // console.log({ action })
      return Object.assign({}, state, { listconfigs: action.config });
      case 'EDIT_STOREPARTNER':
      // console.log({ action })
      return Object.assign({}, state, { storepartners: action.storepartner });
    default:
      return { ...state };
  }
}

export default itemEditing;
