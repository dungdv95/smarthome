import {
    IonChip,
    IonHeader,
    IonIcon,
    IonLabel,
    IonPage,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import { home } from "ionicons/icons";
  import { Fragment } from "react";
  import style from "./style.module.css";

function AutoMode() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className={style.header}>
          <IonTitle className={style.header_favorite}>
            <IonIcon className={style.header_icon} icon={home} />
            <IonLabel>Chế độ tự động</IonLabel>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
    </IonPage>
  );
}
export default AutoMode;
