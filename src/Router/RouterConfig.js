import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from '../components/Home/Home'
import Add from '../components/Add/Add'
import Edit from '../components/Edit/Edit'
import Details from '../components/Details/Details'
const routes = [
    {path:"/",
    component:Home,
    },
    {path:"/add",
    component:Add,
    },
    {path:"/edit/:id",
    component:Edit,
    },
    {path:"/details/:id",
    component:Details,
    },

]
export default function RouterConfig() {

    return (
        <div>

            <Router>
                <Switch>
                    {routes.map((route, i) => (
                        <Route
                        path={route.path }
                        render={props => (
                          // pass the sub-routes down to keep nesting
                          <route.component {...props}  routes={route.routes}/>
                        )}
                      />
                    ))}
                </Switch>
            </Router>

        </div>
    )

}

