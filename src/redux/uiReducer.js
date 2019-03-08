var initialState = {
    showMessage: false,
    showConfirmBox: false,
    message: '',
    titleConfirm: '',
    bodyConfirm: '',
    bodyConfirmOK: () => { },
    bodyConfirmNO: () => { },
    titleBtnOK: '',
    titleBtnNO: '',
    showLoading: false,
    titleMessage: ''
}

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_MESSAGE":
            return Object.assign({}, state, { showMessage: true, message: action.message, titleMessage: action.titleMessage })
        case "HIDE_MESSAGE":
            return Object.assign({}, state, { showMessage: false, })
        case "SHOW_CONFIRMBOX":
            return Object.assign({}, state, { showConfirmBox: true, titleConfirm: action.title, bodyConfirm: action.body, bodyConfirmOK: action.bodyConfirmOK, bodyConfirmNO: action.bodyConfirmNO, titleBtnOK: action.titleBtnOK, titleBtnNO: action.titleBtnNO })
        case "HIDE_CONFIRMBOX":
            return Object.assign({}, state, { showConfirmBox: false, })
        case "SHOW_LOADING":
            return Object.assign({}, state, { showLoading: true })
        case "HIDE_LOADING":
            return Object.assign({}, state, { showLoading: false })
        default:
            return state;
    }
}

export default uiReducer;