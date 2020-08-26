import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'ts-composite-app/config/environment';

import { value } from 'ts-composite-addon';
import { nestedAddonModuleA } from 'ts-composite-addon/dir/nested-module';
import { testValue } from 'ts-composite-addon/test-support';
import { nestedTestSupportA } from 'ts-composite-addon/test-support/dir/nested-module';

console.log({ value, testValue, nestedAddonModuleA, nestedTestSupportA });

// @ts-expect-error: the dummy app should only be resolvable from within itself
import type {} from 'dummy/app';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
