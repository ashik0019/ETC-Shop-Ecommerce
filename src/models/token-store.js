import {types} from 'mobx-state-tree';

const TokenInfo = types.model('TokenInfo', {
  access_token: types.maybeNull(types.string),
  expires: types.maybeNull(types.integer),
  refresh_token: types.maybeNull(types.string),
});

const TokenStore = types
  .model('TokenStore', {
    token: types.maybe(TokenInfo),
  })
  .views(self => ({
    getAccessToken() {
      return self.token?.access_token;
    },
    getExpires() {
      return self.token?.expires;
    },
    getRefreshToken() {
      return self.token?.refresh_token;
    },
    getToken() {
      return self.token;
    },
  }))
  .actions(self => ({
    setToken(token) {
      self.token = token;
    },
  }));

export default TokenStore;
