import React from 'react';
import {Menubar} from 'primereact/menubar';
import {Button} from 'primereact/button';
import {InputText} from "primereact/inputtext";
import iconNotification from '../../svgs/iconNotification.svg'

import SideBar from "../sideBar"
import './layout.scss'

const Layout = ({children}) => {
    return (
        <div className="layout">
                    <div className="layout__top-bar">
                        <div className="layout__top-bar__logo">Logo</div>
                        <InputText placeholder="Search" type="text"className='layout__top-bar__input'/>
                        <div className='layout__top-bar__param-container'>
                            <div className='layout__top-bar__param-container__info'>
                                <div className='layout__top-bar__param-container__info__top'>
                                    Hello Aymen labidi
                                </div>
                                <div className='layout__top-bar__param-container__info__bottom'>
                                     Guide utilisateur | Aide video
                                </div>
                            </div>
                            <img src={iconNotification} />
                        <Button label="Logout" icon="pi pi-power-off" style={{marginLeft:4}}/>
                        </div>
                    </div>
                <div  className="layout__content">
                    <div className="layout__content__side-bar">
                       <SideBar />
                    </div>
                    <div className="layout__content__main"> {children}</div>
                </div>
        </div>
    );
}


export default Layout;
