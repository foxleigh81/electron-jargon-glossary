import React from 'react'
import { MockedProvider } from 'react-apollo/test-utils';
import renderer from 'react-test-renderer';
import wait from 'waait'

import JargonList from './'
import mocks from './mockData'

it('renders without error', () => {
  renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <JargonList />
    </MockedProvider>,
  );
});

it('should render loading state initially', () => {
  const component = renderer.create(
    <MockedProvider mocks={[]}>
      <JargonList />
    </MockedProvider>,
  );

  const tree = component.toJSON();
  // We have to step an extra level down to accomodate the styled-components wrapper
  expect(tree.children[0].children).toContain('Loading...');
});