import React  , {useEffect,useState} from 'react';
import data from './fakeData.json'
import {Tree} from 'primereact/tree';
import './sideBar.scss'


const SideBar = () => {

    return (
        <div className ='side-bar'>
             <div className ='side-bar__upload-container'>
                 Upload
             </div>

             <Tree value={data} />
        </div>
    );
}

export default SideBar;
