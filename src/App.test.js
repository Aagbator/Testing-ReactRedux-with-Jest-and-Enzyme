import React from 'react';
import App from './App';
import { findByTestAttr, testStore} from './Utils'
import { shallow } from 'enzyme';

const setUp = (initialState={}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />).childAt(0).dive();
  return wrapper;
}

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [{
        title: 'Example title 1',
        body: 'Some text'
      },
      {
          title: 'Example title 2',
          body: 'Some text'
      },{
          title: 'Example title 3',
          body: 'Some text'
      }]
    }

    wrapper = setUp(initialState);
  })

    it('It should render without error', () => {
        const component = findByTestAttr(wrapper, 'appComponent');
        expect(component.length).toBe(1);
      })


      it('hidebutton method should update state as expected', () => {
        const classInstance = wrapper.instance();
        classInstance.hideButton();
        const newState = classInstance.state.hideBtn;

        expect(newState).toBe(true);
      })

      it('add5ToNumber method should return value as expected', () => {
        const classInstance = wrapper.instance();
        const newValue = classInstance.add5ToNumber(4);
        expect(newValue).toBe(9);
      });
})
