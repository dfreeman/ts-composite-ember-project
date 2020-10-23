import 'ts-composite-app/models/person'
import { module, test } from 'qunit';
import Store from '@ember-data/store';
import { setupTest } from 'ember-qunit';

module('Unit | Model | person', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store') as Store
    const model = store.createRecord('person', { name: 'Bob tom' });
    assert.ok(model.name);
  });
});
