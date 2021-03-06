// @flow strict

import { StackNavigator, StackNavigatorOptions } from '@kiwicom/mobile-navigation';
import { withMappedNavigationParams as withMappedProps } from 'react-navigation-props-mapper';

import Playground from './Playground';
import PlaygroundList from './PlaygroundList';

export default StackNavigator(
  {
    Home: {
      screen: PlaygroundList,
    },
    Playground: {
      screen: withMappedProps(Playground),
    },
  },
  {
    ...StackNavigatorOptions,
  },
);
