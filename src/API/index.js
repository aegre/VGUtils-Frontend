import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:1234/api'
})

/**
 * Determines whether the request is post or get
 * @param {object} data
 * @returns {string}
 */
const getMethod = data => (typeof data !== 'undefined' ? 'post' : 'get')

const handleError = (err) => { console.error(err) }
/**
 * Makes a request using the provided configuration
 * @typedef {{Object}} RequestParams
 * @property {string} url
 * @property {Object} [data]
 * @property {Object} [headers]
 * @property {Object} [params]
 * @property {string} [method]
 *
 * @param {RequestParams} param0 The request specific configuration
 * @return {Promise}
 */
const makeRequest = async ({
  url, data, headers, params, ...extraConfig
}) => api({
  method: getMethod(data),
  url,
  data,
  params,
  headers: {
    ...headers
  },
  ...extraConfig
}).catch(handleError)

class Events {
  static Fetch () {
    return makeRequest({
      url: 'events'
    })
  }
}

export default {
  Events
}
