import React from 'react'
import ReactDOM from 'react-dom/client';
import TestRenderer from 'react-test-renderer'
import { act, create, Simulate } from 'react-dom/test-utils'
import Welcome from '../components/Welcome'

import { expect } from 'chai'

import { JSDOM } from 'jsdom'
import { render, fireEvent } from "@testing-library/react";

const { document } = ( new JSDOM('') ).window
global.document = document


let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});


describe('测试Welcom组件', () => {
   it('first render', () => {
      let root; 
      act(() => {
         root = ReactDOM.createRoot(container).render(<Welcome />);
      });
      expect(root.toJSON().children.includes('this welcome page')).be.equal(true);
   })

   it('onclick event', () => {
      // let root; 
      // act(() => {
      //    root = create(<Welcome />)
      // });

      // const button = TestUtils.findRenderedDOMComponentWithTag(
      //    root,
      //    'div'
      //  )
      // console.log(button)
      // const { container, getByText } = render(<Welcome />);
      // console.log(container, getByText)
   })
})