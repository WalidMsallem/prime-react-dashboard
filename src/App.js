import React, { Component } from 'react';
import {Button} from 'primereact/button';
import logo from './logo.png';
import Dashboard from "./pages/dashboard"
import Layout from "./shared/components/Layout"
import './App.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

class App extends Component {
    
 
    
    render() {
        return (
          <Layout>
          <Dashboard />
          </Layout>
        );
    }
}

export default App;
