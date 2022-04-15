import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => {
  return (
    <div style={{position:'absolute', top: 50, left: 0, width: '100%'}}>
      <div style={{backgroundColor: '#DDDDDD', width: '160px', padding: '20px', margin:'auto', border:'1px solid #888888',
        display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <CircularProgress />
        <span>Loading...</span>
      </div>
    </div>
  )
};

export default Loading;
