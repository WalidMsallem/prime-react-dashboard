import React from 'react';
import Widget from '../../shared/components/widget'
import TabsContainer from "../../shared/components/tabsContainer"
import CustomizedTabs from "../../shared/components/customizedTabs"

import iconDocuments from '../../shared/svgs/iconDocuments.svg'
import iconAttachment from '../../shared/svgs/iconAttachment.svg'
import iconAlarm from '../../shared/svgs/iconAlarm.svg'
import iconNotification from '../../shared/svgs/iconNotification.svg'

import './dashboard.scss'
const Dashboard = () => {
    const accessTabs = [
        {
            title : 'Document recents',
            content : <div>hello 1</div>
        },
        {
            title : 'Derniers recherche',
            content :  <div>hello 2</div>
        },
        
    ]
    const favTabs = [
        {
            title : 'Tout',
            content :  <div>hello 1</div>
        },
        {
            title : 'Documents',
            content :  <div>hello 2</div>
        },
        {
            title : 'Dossier',
            content :  <div>hello 3</div>
        },
        
    ]
    const notificationTabs = [
        {
            title : 'Tout',
            content : <div>hello 1</div>
        },
        {
            title : 'Documents',
            content :  <div>hello 2</div>
        },
        {
            title : 'Dossier',
            content :  <div>hello 3</div>
        },
        {
            title : 'Commentaires',
            content : <div>hello 4</div>
        },
        {
            title : 'Rappels',
            content :  <div>hello 5</div>
        },
        {
            title : 'Workflow',
            content :  <div>hello 6</div>
        },
        
    ]
    return (
        <div className="dashboard">
         <div className="dashboard__header">
             <span className="dashboard__header__title"> Tableau de board</span>
              <div className="dashboard__header__widget_container">
                  <Widget
                   count = {0} 
                  icon = {iconDocuments}
                  />
                  <Widget
                     count = {0} 
                     icon = {iconAttachment}
                  />
                  <Widget 
                     count = {0} 
                     icon = {iconAlarm}
                  />
                  <Widget 
                     count = {0} 
                     icon = {iconNotification}
                  />
             </div>
              </div>  
         <div className="dashboard__content">

             <div className="dashboard__content__tabs-container">
                 <div className='dashboard__content__tabs-container__top-content'>
                     <div className ="dashboard__content__tabs-container__top-content__block">
                     <TabsContainer 
                header = {<div>Acces rapide</div>}
                >
                      <CustomizedTabs tabsMenu={accessTabs} />
                  </TabsContainer>
                     </div>
                     <div className ="dashboard__content__tabs-container__top-content__block">
                     <TabsContainer 
                header = {<div>Mes favorite</div>}
                >
                      <CustomizedTabs tabsMenu={favTabs} />
                  </TabsContainer>
                     </div>
                 </div>
                 <div className='dashboard__content__tabs-container__bottom-content'>
                 <TabsContainer 
                header = {<div>Notifcations</div>}
                >
                       <CustomizedTabs tabsMenu={notificationTabs} />
                  </TabsContainer>
                 </div>
             </div>
      
         </div>
        </div>
    );
}

export default Dashboard;
