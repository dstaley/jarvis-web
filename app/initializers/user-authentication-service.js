export function initialize(container, application) {
  application.inject('route', 'userAuthenticationService', 'service:user-authentication');
  application.inject('controller', 'userAuthenticationService', 'service:user-authentication');
};

export default {
  name: 'user-authentication-service',
  initialize: initialize
};
