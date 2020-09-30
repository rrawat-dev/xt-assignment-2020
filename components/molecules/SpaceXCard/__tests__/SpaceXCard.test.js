import '@testing-library/jest-dom'
import React from 'react'
import {render } from '@testing-library/react'
import SpaceXCard from '../SpaceXCard.component';

describe('SpaceXCard', () => {
  test('should render component', () => {
    const launch = {
      links: {
        mission_patch_small: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png'
      },
      mission_id: [],
      mission_name: 'FalconSat',
      launch_year: 2020,
      launch_success: true,
      land_success: false
    };
    const { queryByText } = render(<SpaceXCard launch={launch} />);
    
    expect(queryByText('FalconSat')).toBeTruthy();
    expect(queryByText('2020')).toBeTruthy();
  });

});
