import { IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { caretForwardCircleOutline, readerOutline, reorderFourOutline, rocketOutline } from "ionicons/icons";
import { Fragment } from "react";

function TabBar() {
  return (
    <IonPage>
      <IonTabs>
      <IonRouterOutlet></IonRouterOutlet>
        <IonTabBar
        //   className={style.tab}
          slot="bottom"
        //   onIonTabsDidChange={(event) => onChangeTab(event)}
        >
          <IonTabButton tab="device" href="/device">
            {/* <IonIcon icon={tab === "device" ? rocket : rocketOutline} /> */}
            <IonIcon icon={rocketOutline} />
            <IonLabel>Thiết bị</IonLabel>
          </IonTabButton>
          <IonTabButton tab="life" href="/life">
            {/* <IonIcon icon={tab === "life" ? reader : readerOutline} /> */}
            <IonIcon icon={readerOutline} />
            <IonLabel>Cuộc sống</IonLabel>
          </IonTabButton>
          <IonTabButton tab="automode" href="/automode">
            {/* <IonIcon
              icon={
                tab === "automode"
                  ? caretForwardCircle
                  : caretForwardCircleOutline
              }
            /> */}
            <IonIcon icon={caretForwardCircleOutline}/>
            <IonLabel>Chế độ tự động</IonLabel>
          </IonTabButton>
          <IonTabButton tab="menu" href="/menu">
            {/* <IonIcon icon={tab === "menu" ? reorderFour : reorderFourOutline} /> */}
            <IonIcon icon={reorderFourOutline} />
            <IonLabel>Menu</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonPage>
  );
}
export default TabBar;
