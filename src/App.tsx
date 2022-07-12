import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  rocketOutline,
  readerOutline,
  heartOutline,
  caretForwardCircleOutline,
  reorderFourOutline,
  heart,
  rocket,
  reader,
  caretForwardCircle,
  reorderFour
} from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import style from './theme/app.module.css'
import Favorites from './pages/Favorites';
import Device from './pages/Device';
import Life from './pages/Life';
import AutoMode from './pages/AutoMode';
import Menu from './pages/Menu';
import AddServices from './components/AddServices/index';
import Login from './pages/Login';
import ManageLocation from './components/ManageLocation/index';

setupIonicReact();


const App: React.FC = () => {
  const [tab, setTab] = useState<any>('favorites')
  const onChangeTab = (event: CustomEvent<{ tab: string; }>) => {
    setTab(event.detail.tab);
  }
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          {/* define router */}
          <IonRouterOutlet>
            <Route exact path="/">
              <Redirect to="/device" />
            </Route>
            {/* <Route exact path="/favorites">
              <Favorites />
            </Route> */}
            <Route exact path="/device">
              <Device />
            </Route>
            <Route path="/life">
              <Life />
            </Route>
            <Route path="/automode">
              <AutoMode />
            </Route>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/addservices">
              <AddServices />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/manage-location">
              <ManageLocation />
            </Route>
          </IonRouterOutlet>

          <IonTabBar className={style.tab} slot="bottom" onIonTabsDidChange={(event) => onChangeTab(event)}>
            {/* <IonTabButton tab="favorites" href="/favorites">
              <IonIcon icon={tab === 'favorites' ? heart : heartOutline} />
              <IonLabel>Yêu thích</IonLabel>
            </IonTabButton> */}
            <IonTabButton tab="device" href="/device">
              <IonIcon icon={tab === 'device' ? rocket : rocketOutline} />
              <IonLabel>Thiết bị</IonLabel>
            </IonTabButton>
            <IonTabButton tab="life" href="/life">
              <IonIcon icon={tab === 'life' ? reader : readerOutline} />
              <IonLabel>Cuộc sống</IonLabel>
            </IonTabButton>
            <IonTabButton tab="automode" href="/automode">
              <IonIcon icon={tab === 'automode' ? caretForwardCircle : caretForwardCircleOutline} />
              <IonLabel>Chế độ tự động</IonLabel>
            </IonTabButton>
            <IonTabButton tab="menu" href="/menu">
              <IonIcon icon={tab === 'menu' ? reorderFour : reorderFourOutline} />
              <IonLabel>Menu</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  )
};

export default App;
