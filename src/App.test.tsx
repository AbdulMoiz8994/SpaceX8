import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import {MissionInfoCont} from './components/MissionInfo/index'
import {MissionContainer} from './components/MissionList/index'

describe('App', () => {
  const container = shallow(<App />);
	it('should render a <div/>', () => {
		expect(container.find('div').length).toEqual(3);
});
   it('should Reder the First Comp' , () =>{
     expect(container.containsMatchingElement(<MissionContainer handleChange={jest.fn()}/>))
   })
 
  it('Checking the  MissionInfo Comp',() =>{
    expect(container.containsMatchingElement(<MissionInfoCont id={100}/>)).toEqual(true)

  })
   it('This time is making the snapshot',() =>{
     expect(container).toMatchSnapshot()
   })
});