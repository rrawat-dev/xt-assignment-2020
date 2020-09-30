import React from 'react';
import { useSelector } from 'react-redux';
import SpaceXLaunches from '../../organisms/SpaceXLaunches/SpaceXLaunches.component';
import SpaceXFilters from '../../molecules/SpaceXFilter/SpaceXFilters.component';
import StyledHomePage from './HomePage.style';
import Loader from '../../atoms/Loader/Loader.component';

export default function HomePage(props) {
  const fullPageLoader = useSelector(state => state.fullPageLoader);
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
      { fullPageLoader && <Loader overlay /> } 
    </StyledHomePage>
  );
}

