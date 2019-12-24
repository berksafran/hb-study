import React from 'react'
import renderer from 'react-test-renderer'
import Header from '../components/Header';

test('Header component works', () => {
  const header_tree = renderer.create(<Header />).toJSON()
  expect(header_tree).toMatchSnapshot()
})