import React from 'react';
import SpaceXLaunches from '../../organisms/SpaceXLaunches/SpaceXLaunches.component';
import SpaceXFilters from '../../molecules/SpaceXFilter/SpaceXFilters.component';
import StyledHomePage from './HomePage.style';

export default function HomePage(props) {
  return (
    <StyledHomePage>
      <header>
        <h1>SpaceX Launch Programs</h1>
      </header>
      <main>
          <div className="container">
            <div className="container__sidebar">
              <SpaceXFilters />
            </div>
            <div className="container__content">
              <SpaceXLaunches />
            </div>
          </div>
      </main>
      <footer>
        Developed By: Rakesh Rawat (@rrawat.dev)
      </footer>
    </StyledHomePage>
  );
}

