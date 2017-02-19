const wdk = require('wikidata-sdk')
const error_ = require('../error')

module.exports = (entity, property, value) => {
  if (!wdk.isWikidataEntityId(entity)) {
    return error_.reject('invalid entity', 400)
  }

  if (!wdk.isWikidataPropertyId(property)) {
    return error_.reject('invalid property', 400)
  }

  if (!value) {
    return error_.reject('missing value', 400)
  }

  return Promise.resolve()
}