import {
    IonBackButton,
    IonButtons,
  IonCard,
  IonCardContent,
  IonChip,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  settingsOutline,
  helpCircleOutline,
  volumeLowOutline,
  headsetOutline,
} from "ionicons/icons";
import { Fragment } from "react";
import style from "./style.module.css";

function Menu() {
  return (
    <Fragment>
      <IonHeader>
        <IonToolbar className={style.header}>
          <IonTitle className={style.header_favorite}>
            <IonLabel>SmartThings</IonLabel>
            <IonIcon
              className={style.icon_header}
              icon={settingsOutline}
            ></IonIcon>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <IonList className={style.menu}>
              <IonIcon className={style.menu_icon} icon={helpCircleOutline} />
              <IonItem className={style.ion_fullWidth}>
                <IonLabel>Cách sử dụng</IonLabel>
              </IonItem>
            </IonList>
            <IonList className={style.menu}>
              <IonIcon className={style.menu_icon} icon={volumeLowOutline} />
              <IonItem className={style.ion_fullWidth}>
                <IonLabel>Thông tin</IonLabel>
              </IonItem>
            </IonList>
            <IonList className={style.menu}>
              <IonIcon className={style.menu_icon} icon={headsetOutline} />
              <IonItem className={style.ion_fullWidth}>
                <IonLabel>Liên hệ chúng tôi</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </Fragment>
  );
}
export default Menu;
