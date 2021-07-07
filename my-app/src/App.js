import './App.css';
import React from 'react';
import {useMediaQuery} from "react-responsive"
import AppRouter from './Mobile/RouterComponent';
import PCAppRouter from './PC/PCRouterComponent';


function App() {

  const isPc = useMediaQuery({
    query : "(min-width:1024px)"
  });

  const isTablet = useMediaQuery({
    query : "(min-width:768px) and (max-width:1023px)"
  });

  const isMobile = useMediaQuery({
    query : "(max-width:767px)"
  });

  return (
    <div>
      {isPc && <PCAppRouter/> }
      {isTablet && <AppRouter/> }
      {isMobile && <AppRouter/> }
    </div>
  );
}

export default App;
