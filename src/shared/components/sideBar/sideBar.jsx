import React  , {useState , useEffect} from 'react';
import axios from 'axios'
import {Tree} from 'primereact/tree';
import './sideBar.scss'
const SideBar = () => {
    // const [nodes, setNodes] = useState(20)
    // const [state, setstate] = useState(0)
    useEffect(() => {
        console.log('jj')
     
    }, []);
    return (
        <div className ='side-bar'>
             <div className ='side-bar__upload-container'>
                 Upload
             </div>
             
        </div>
    );
}

export default SideBar;
