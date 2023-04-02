import React from 'react';
import Dot from './Dot';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Dot delayTime={0} />
    </div>
  );
}

export default App;
