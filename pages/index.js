import React, {Component} from 'react';
import HomePage from '../components/pages/HomePage/HomePage.component';
import { fetchSpaceXDataAsyncAction } from '../redux/actions/spacex.actions';

export default class Home extends Component {
  static async getServerSideProps({req, store}) {
    const options = req.query || {};
    return store.dispatch(fetchSpaceXDataAsyncAction(options));
  }

  constructor(props) {
    super(props);
  }

  render() {
    return <HomePage />;
  }
}