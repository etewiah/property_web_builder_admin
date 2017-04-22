export function initialize(container, application) {
  application.inject('route', 'csrfManager', 'service:csrfManager');
  application.inject('controller', 'csrfManager', 'service:csrfManager');
}

export default {
  name: 'csrf-manager-injector',
  initialize: initialize
};
