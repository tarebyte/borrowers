import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  host: 'http://api.ember-cli-101.com',
  namespace: 'api/v4',
  coalesceFindRequests: true
});
