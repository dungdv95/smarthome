import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { Fragment, useState } from "react";
import { addOutline, chevronBackOutline } from "ionicons/icons";
import ModalNewLocation from "../ModalNewLocation";

function ModalLocation(props) {
  const openLocation = props.openLocation;
  const closedLocation = props.closedLocation;

  return (
    <IonModal isOpen={openLocation}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={closedLocation}>
              <IonIcon icon={chevronBackOutline} />
              <b>Quản lý vị trí</b>
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={addOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum
          quidem recusandae ducimus quos reprehenderit. Veniam, molestias quos,
          dolorum consequuntur nisi deserunt omnis id illo sit cum qui. Eaque,
          dicta.
        </p>
      </IonContent>
    </IonModal>
  );
}
export default ModalLocation;
