import React, { useEffect, useState } from 'react';
import Dot from './Dot';

function App() {
  const [dots, setDots] = useState(Array<typeof Dot>());

  // useEffect(() => {
  //   for (let i = 0; i < 10; i++) {
  //     setDots((dots) => [...dots, <Dot />]);
  //   }
  // });
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Dot animationDelay={Math.random() * 8 + "ms"} />
      <Dot animationDelay={Math.random() * 7 + "ms"} />
      <Dot animationDelay={Math.random() * 6 + "ms"} />
      <Dot animationDelay={Math.random() * 4 + "ms"} />
      <Dot animationDelay={Math.random() * 3 + "ms"} />
      <Dot animationDelay={Math.random() * 2 + "ms"} />
      <Dot animationDelay={Math.random() * 1 + "ms"} />
    </div>
  );
}

export default App;
