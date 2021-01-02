import React from 'react';
import './App.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/saga-orange/theme.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GridUsers from "./GridUsers";
import UserFormPage from './pages/UserFormPage';

function App() {

    return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route
                    path='/:UserId'
                    exact
                    render={(routeProps) => (
                        <div className='p-m-6'>
                            <UserFormPage {...routeProps}/>
                        </div>
                        )}
                />
            </Switch>
            <Route
                path='/'
                exact
                render={(routeProps) => (
                    <div className='p-m-6'>
                        <GridUsers {...routeProps} />
                    </div>
                )}
            />
        </BrowserRouter>

      </div>
  );
}

export default App;
