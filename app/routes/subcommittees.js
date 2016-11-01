import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var parentId = params.committee_id;
    var url = 'http://congress.api.sunlightfoundation.com/committees?subcommittee=true&parent_committee_id=' +parentId + '&apikey=f5f1f2f4ae164fc3b3c1a525a2261b10';
    return Ember.$.getJSON(url).then(function(responseJSON) {
     return responseJSON.results;
   });
  }
});
