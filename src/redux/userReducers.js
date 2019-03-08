var initialState = {
    token: {
        "token": "customer",
        // "expiredAt": "2018-04-11T10:15:00.384Z"
    },
    // uuid: '',
    user: {
        "fullName": "",
        "email": "",
        "phone": null,
        "gender": '',
        "birth": null,
        "address": null,
        "avatar": null,
        "roleId": [],
        // "status": true,
        "id": 0,
        // "createdAt": "2018-04-09T10:10:11.000Z",
        // "updatedAt": "2018-04-09T10:12:27.000Z",
        "country": null,
        "city": null,
        "district": null,
        "ward":null,
    },
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER_TOKEN":
            // console.log({ action })
            return Object.assign({}, state, { token: action.token })
        case "SET_USER_INFO":
            // console.log({ action })
            return Object.assign({}, state, { user: action.data })
        default:
            return state;
    }
}

export default userReducer;