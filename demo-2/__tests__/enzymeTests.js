import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import SignUp from '../testComponents/SignUp';
import Home from '../testComponents/Home';
import UserPage from '../testComponents/UserPage';
import NewMessage from '../testComponents/NewMessage';
import MessageBox from '../testComponents/MessageBox';
import Login from '../testComponents/Login';

describe('React Tests', () => {
  describe('SignUp', () => {
    let wrapper;
    const props = {
      testProp: 0,
      signup: () => (props.testProp += 1),
    };

    beforeAll(() => {
      wrapper = shallow(<SignUp {...props} />);
    });

    it('renders main login div', () => {
      expect(wrapper.find('.loginsignuppage')).toHaveLength(1);
    });

    it('renders three login inputs', () => {
      expect(wrapper.find('.loginInput')).toHaveLength(3);
    });

    it('renders one signup button', () => {
      expect(wrapper.find('button')).toHaveLength(1);
    });

    it('renders on click function when button is pressed', () => {
      wrapper.find('button').simulate('click');
      expect(props.testProp).toEqual(1);
    });
  });

  describe('Home', () => {
    let wrapper;
    const props = {};

    beforeAll(() => {
      wrapper = shallow(<Home {...props} />);
    });

    it('contains one UserPage element', () => {
      expect(wrapper.find(UserPage)).toHaveLength(1);
    });
  });

  describe('UserPage', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(<UserPage />);
    });

    it('should render 4 buttons', () => {
      expect(wrapper.find('button')).toHaveLength(4);
    });
  });

  describe('NewMessage', () => {
    let wrapper;

    const props = {
      testProp: 0,
      send: () => (props.testProp += 1),
    };

    beforeAll(() => {
      wrapper = shallow(<NewMessage {...props} />);
    });

    it('should have an input box for username', () => {
      expect(wrapper.find('input')).toHaveLength(1);
    });

    it('should have a textarea for message', () => {
      expect(wrapper.find('textarea')).toHaveLength(1);
    });

    it('should have a send button', () => {
      expect(wrapper.find('button')).toHaveLength(1);
    });

    it('should invoke on click function when button pressed', () => {
      wrapper.find('button').simulate('click');
      expect(props.testProp).toEqual(1);
    });
  });

  describe('MessageBox', () => {
    let wrapper;
    const props = {
      username: 'joe',
      message: {
        input: 'hi',
      },
    };

    beforeAll(() => {
      wrapper = shallow(<MessageBox {...props} />);
    });

    it('should render username from props', () => {
      expect(wrapper.find('.senderName').text()).toEqual('joe');
    });

    it('should render input from props', () => {
      expect(wrapper.find('.message').text()).toEqual('hi');
    });
  });

  describe('Login', () => {
    let wrapper;
    const props = {
      prop1: 0,
      prop2: 0,
      submitLogin: () => (props.prop1 += 1),
      onSignUpClick: () => (props.prop2 += 1),
    };

    beforeAll(() => {
      wrapper = shallow(<Login {...props} />);
    });

    it('should render two login inputs', () => {
      expect(wrapper.find('input')).toHaveLength(2);
    });

    it('should render two buttons', () => {
      expect(wrapper.find('button')).toHaveLength(2);
    });

    it('should invoke submitLogin when button is clicked', () => {
      wrapper.find('button').at(0).simulate('click');
      expect(props.prop1).toEqual(1);
    });

    it('should invoke onSignUpClick when button is clicked', () => {
      wrapper.find('button').at(1).simulate('click');
      expect(props.prop2).toEqual(1);
    });
  });

  describe('AddFriend', () => {
    // not complete yet
  });
});
