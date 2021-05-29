import subject from '../client/state/reducers/mainReducer.js';

describe('Reducer Tests', () => {
  let state;

  beforeEach(() => {
    state = {
      user: null,
      login_state: null,
      signup_state: null,
      info: null,
      messages: {},
      view: 'userpage',
      user_info: null,
    };
  });

  // - Default State
  describe('default state', () => {
    it('should return true when passed an undefined input', () => {
      expect(subject(undefined, { type: undefined })).toEqual(state);
    });
  });

  // unrecongizable inputs
  describe('unrecognizable inputs', () => {
    it('should not make any changes to state when passed unrecognizable input', () => {
      const action = { type: 'sdfkjdsl;fjdsfkl;jdsf' };
      expect(subject(state, action)).toEqual(state);
    });
  });

  // - LOGIN_STATE
  describe('LOGIN_STATE', () => {
    const action = {
      type: 'LOGIN_STATE',
      payload: 'true',
    };

    it('should update login state based on action payload', () => {
      const { login_state } = subject(state, action);
      expect(login_state).toEqual('true');
    });
  });

  // - LOGIN
  describe('LOGIN', () => {
    const action = {
      type: 'LOGIN',
      payload: {
        user: { _id: 1, username: 'test', language: 'english' },
        messages: { message: 'hello' },
      },
    };

    it('should update login_state to true', () => {
      const { login_state } = subject(state, action);
      expect(login_state).toEqual('true');
    });

    it('should update messages to payload messages', () => {
      const { messages } = subject(state, action);
      expect(messages).toEqual(action.payload.messages);
    });

    it('should update state user info with payload', () => {
      const { user } = subject(state, action);
      expect(user).toEqual(action.payload.user);
    });
  });

  // - SIGNUP_STATE
  describe('SIGNUP_STATE', () => {
    const action = {
      type: 'SIGNUP_STATE',
      payload: 'true',
    };
    it('should update signup state based on action payload', () => {
      const { signup_state } = subject(state, action);
      expect(signup_state).toEqual('true');
    });
  });

  // - SIGNUP
  describe('SIGNUP', () => {
    const action = {
      type: 'SIGNUP',
    };
    it('should update login_state to true', () => {
      const { login_state } = subject(state, action);
      expect(login_state).toEqual(true);
    });
  });

  // VIEW
  describe('VIEW', () => {
    const action = {
      type: 'VIEW',
      payload: 'newView',
    };

    it('should update view based on action payload', () => {
      const { view } = subject(state, action);
      expect(view).toEqual(action.payload);
    });
  });

  // - USER_INFO
  describe('USER_INFO', () => {
    const action = {
      type: 'USER_INFO',
      payload: 'new info',
    };
    it('should update user info based on action payload', () => {
      const { user_info } = subject(state, action);
      expect(user_info).toEqual(action.payload);
    });
  });

  // - UPDATE_MESSAGES
  describe('UPDATE_MESSAGES', () => {
    const action = {
      type: 'UPDATE_MESSAGES',
      payload: { test: 'new message' },
    };
    it('should update messages based on action payload', () => {
      const { messages } = subject(state, action);
      expect(messages).toEqual(action.payload);
    });
  });
});
