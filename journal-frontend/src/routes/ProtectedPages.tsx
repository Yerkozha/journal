import React, { FC } from 'react';
import { Switch } from 'react-router-dom';
import { MainPage } from 'src/presentation/view/main-page';
import ProtectedRoutes from './ProtectedRoutes';

const ProtectedPages: FC = () => {
    return (
          <Switch>
            <ProtectedRoutes exact path="/" component={MainPage} />
          </Switch>
    );
  };
  
  export default ProtectedPages;