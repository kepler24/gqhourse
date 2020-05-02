import axios from 'axios'

  export function getDailyTitle (parameter) {
    return axios({
      url: '/gao/getDailyTitle',
      method: 'post',
      data:parameter
    })
  }

  export function getOneDaily (parameter) {
    return axios({
      url: '/gao/getOneDaily',
      method: 'post',
      data:parameter
    })
  }
  export function getPic (parameter) {
    return axios({
      url: '/gao/getPic',
      method: 'post',
      data:parameter
    })
  }
  export function getDaily (parameter) {
    return axios({
      url: '/gao/getDaily',
      method: 'post',
      data:parameter
    })
  }