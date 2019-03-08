
import { api, config } from '../../api';
import axios from 'axios';
const request = {
  callApi: async (endpoint, apiVersion, body, method = 'GET', token = null) => {
    try {
      token = token || (localStorage.getItem('tk') ? localStorage.getItem('RFTK-GK') : '')

      let option = {
        method,
        url: `${config.HOST}/${endpoint}`,

        data: body,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'Accept-Language': `vi`,
          // 'Api-Version': apiVersion
        }
      }
      console.log({ option: option })
      // console.log('body data pst',)
      let response = await axios(option);

      // if (response.headers['new-token']) {
      //     //TODO: update token localstorage
      //     console.log("Received new token: ", response.headers['new-token'])
      //     localStorage.setItem('RFTK-GK')
      console.log('---------------------------RESPONSE------------------------------\n', 'option =>', option, '\n data ===>', response)
      // }
      return response;

    } catch (error) {
      // let response = await axios(option);
      // throw error.response;
      return error.response;
      // console.log(error.response)
      // console.log(error.response)

    }

  },
}

// .replace(/\"/g, '')
// .replace(/\"/g, '')
export default request
