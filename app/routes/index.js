import Ember from 'ember';


export default Ember.Route.extend({
  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    },

    getCommittees() {
      this.transitionTo('committees');
    },

    getBills() {
      this.transitionTo('bills');
    }
  }
});
