import config from 'dummy/config/environment';
import EmberRouter from '@ember/routing/router';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('custom-store');
  this.route('non-blocking-model');
  this.route('demo', { path: '/' });
  this.route('demo-horizontal', { path: '/horizontal' });
  this.route('demo-scrollable');
  this.route('home', { path: 'test' });
  this.route('test-scrollable');
  this.route('category', { path: '/category/:category' });
  this.route('posts', function() {
    this.route('show', { path: '/:post' });
  });
  this.route('load-previous');
  this.route('nested');
  this.route('nested-component');
  this.route('extended');
});

export default Router;
