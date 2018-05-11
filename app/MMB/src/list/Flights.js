// @flow

import * as React from 'react';
import { PrivateApiRenderer } from '@kiwicom/mobile-relay';
import { graphql } from 'react-relay';

import type { FlightsQueryResponse } from './__generated__/FlightsQuery.graphql';
import FlightListContainer from './FlightListContainer';

type Props = {||};

export default class Flights extends React.Component<Props> {
  renderInner = (innerProps: FlightsQueryResponse) => (
    <FlightListContainer {...innerProps} />
  );

  render = () => (
    <PrivateApiRenderer
      render={this.renderInner}
      query={graphql`
        query FlightsQuery {
          future: allBookings(only: FUTURE) {
            ...FlightListContainer_future
          }
          past: allBookings(only: PAST) {
            ...FlightListContainer_past
          }
        }
      `}
    />
  );
}