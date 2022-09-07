import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './config/routes';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    const routeComponents = routes.map((route, key) => <Route path={route.path} element={<route.component></route.component>} key={key} />);

    return <Routes>{routeComponents}</Routes>;
};

export default Application;
