
let store = null
let host = null
const api = {

  setStore: (newstore) => {
    store = newstore
  },
  actFetchUsers: (user) => {
    store.dispatch({ type: 'FETCH_USERS', user })
  },
  actAddUser: (user) => {
    store.dispatch({ type: 'ADD_USER', user })
  },
  actUpdateUser: (user) => {
    // console.log(user)
    store.dispatch({ type: 'UPDATE_USER', user })
  },

  actDeleteUser: (id) => {
    store.dispatch({ type: 'DELETE_USER', id })
  },
  actGetUser: (user) => {
    store.dispatch({ type: 'EDIT_USER', user })
  },

  



  // actGetUserinfo: (userInfo) => {
  //   store.dispatch({ type: 'EDIT_USERINFO', userInfo })
  // },
  setUserToken: (token) => {
    store.dispatch({ type: "SET_USER_TOKEN", token })
  },
  setUserInfo: (user) => {
    store.dispatch({ type: "SET_USER_INFO", data: user })
  },

  showMessage: (message, titleMessage) => {
    store.dispatch({ type: "SHOW_MESSAGE", message, titleMessage })
  },
  hideMessage: () => {
    store.dispatch({ type: "HIDE_MESSAGE" })
  },
  showLoading: () => {
    store.dispatch({ type: "SHOW_LOADING" })
  },
  hideLoading: () => {
    store.dispatch({ type: "HIDE_LOADING" })
  },
  showConfirm: (title, body, bodyConfirmOK, bodyConfirmNO, titleBtnOK, titleBtnNO) => {
    store.dispatch({ type: "SHOW_CONFIRMBOX", title, body, bodyConfirmOK, bodyConfirmNO, titleBtnOK, titleBtnNO })
  },
  hideCofirm: () => {
    store.dispatch({ type: "HIDE_CONFIRMBOX" })
  },
  getToken: () => { return (store && store.getState().userReducer.token) ? store.getState().userReducer.token : "" },

  // getLang() {
  //     // if (!store.getState()) return 'en'
  //     // return store.getState().langState.lang
  //     return localStorage.getItem('language') ? localStorage.getItem('language') : 'vi'
  // },
  getHost() {
    return host
  },
  // setCate: (category) => {
  //     store.dispatch({ type: "SET_CATE", category })
  // },
  // setLang: (language) => {
  //     store.dispatch({ type: "SET_LANGUAGE", language })
  // },
  // search: (keyword) => {
  //     store.dispatch({ type: 'SEARCH', keyword })
  // },
  // filterTable: (filter) => {
  //     store.dispatch({ type: 'FILTER_TABLE', filter })
  // },
  // sort: (sort) => {
  //     store.dispatch({ type: 'SORT', sort })
  // },


}
export default api;
