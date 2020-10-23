import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import Store from '@ember-data/store';

// Comment out this line and typechecking will fail on `createRecord` below:
import 'ts-composite-app/models/person';

module('Unit | Model | Person', function(hooks) {
  setupTest(hooks);

  test('I can call `createRecord("person")`', function(assert) {
    let store = this.owner.lookup('service:store') as Store;
    let person = store.createRecord('person', { name: 'Alex' });

    assert.ok(person);
  });
});
