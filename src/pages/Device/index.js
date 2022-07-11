import { Fragment } from "react";
import { IonHeader, IonToolbar, IonTitle, IonChip } from '@ionic/react';
import { IonIcon } from '@ionic/react';
import { IonLabel } from '@ionic/react';
import { home } from "ionicons/icons";
import style from "./style.module.css";

function Device() {
  return (
    <Fragment>
      <IonHeader>
        <IonToolbar className={style.header}>
          <IonTitle className={style.header_favorite}>
            <IonIcon className={style.header_icon} icon={home} />
            <IonLabel>Thiết bị</IonLabel>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
    </Fragment>
  );
}
export default Device;
