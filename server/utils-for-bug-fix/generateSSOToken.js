const jwt = require('jsonwebtoken');

const userData = {
  email: 'user@email.com',
  id: 'user.id',
  name: 'user.name',
  iat: 1609973239,
};

const SingleSignOnKey = 'SingleSignOnKey';

// Sign the token
const SSOToken = jwt.sign(userData, SingleSignOnKey);

console.log('Generated SSO Token:', SSOToken);
