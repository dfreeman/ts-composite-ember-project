import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'dummy/config/environment';

import { value } from 'ts-composite-addon';
import { testValue } from 'ts-composite-addon/test-support';

console.log({ value, testValue });

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);

// Declared to be a string in `types/random-augmentation.d.ts`
console.log(globalFoo.toUpperCase());
