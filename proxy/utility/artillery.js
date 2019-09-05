'use strict';


function generateRandomPropId(userContexts, events, done) {
  var id = Math.floor(Math.random() * Math.floor(9999999) + 1);
  userContexts.vars.id = id
  return done();
}
module.exports = {
  generateRandomPropId
};