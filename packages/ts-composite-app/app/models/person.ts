import Model, { attr } from '@ember-data/model'

export default class Person extends Model {
  @attr() declare name?: string
}

declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'person': Person;
  }
}
