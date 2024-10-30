import React from 'react';
import DiscoverEverything from '../../components/DiscoverEverything/DiscoverEverything';
import MoreHema from '../../components/MoreHema/MoreHema';
import NiceExtra from '../../components/NiceExtra/NiceExtra';
import Banner1 from '../../components/Banner1/Banner1';

const homepage = () => {
   return (
      <div>
         <Banner1></Banner1>
         <h2> this is homepage</h2>
         <NiceExtra></NiceExtra>
         <MoreHema></MoreHema>
         <DiscoverEverything></DiscoverEverything>
      </div>
   );
};

export default homepage;