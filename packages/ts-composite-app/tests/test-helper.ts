import Application from 'ts-composite-app/app';
import config from 'ts-composite-app/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
