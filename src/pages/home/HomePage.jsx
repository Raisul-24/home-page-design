import React from 'react';
import DiscoverEverything from '../../components/DiscoverEverything/DiscoverEverything';
import MoreHema from '../../components/MoreHema/MoreHema';
import NiceExtra from '../../components/NiceExtra/NiceExtra';

const homepage = () => {
   return (
      <div>
         <h2> this is homepage</h2>
         <NiceExtra></NiceExtra>
         <MoreHema></MoreHema>
         <DiscoverEverything></DiscoverEverything>
      </div>
   );
};

export default homepage;