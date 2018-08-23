// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';

export class MyCookbook extends React.Component<RouteComponentProps<{}>, String> {
    public render() {
        return <p>My Cookbook</p>;
    }
}