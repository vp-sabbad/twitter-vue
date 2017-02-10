import Promise from 'bluebird'
import Codebird from 'codebird'

const codebird = new Codebird()
codebird.setConsumerKey('ilPiM3rxuYGePsf4FE1xjfjfZ', 'FNRfe18cYqDefDJjx4b6bFhDC3teeRlC1Lvx2FzQsWRSK0Tefp')
getToken().tap(token => codebird.setBearerToken(token))

function getToken () {
  return new Promise((resolve, reject) => {
    codebird.__call(
      'oauth2_token', {},
      (response, err) => !err
        ? resolve(response.access_token)
        : reject(err)
    )
  })
}

function search (query) {
  return new Promise((resolve, reject) => {
    return codebird.__call(
      'search_tweets',
      `q=${query}`,
      (response) => resolve(response.statuses)
    )
  })
}

export default {
  search
}
