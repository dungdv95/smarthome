import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { addOutline, chevronBackOutline } from "ionicons/icons";
import { Fragment, useState } from "react";
import style from "./style.module.css";
import ModalNewLocation from "./../ModalNewLocation/index";

function ManageLocation() {
  const [openNewLocation, setOpenNewLocation] = useState(false);
  const [optionHome, setOptionHome] = useState([{ name: "Nhà 1" }]);

  const closeModal = () => {
    setOpenNewLocation(false);
  };

  const submitLocation = (value) => {
    const tempOption = [...optionHome];
    const tmpVal = {
      name: value,
    };
    tempOption.push(tmpVal);
    setOptionHome(tempOption);
  };

  return (
    <Fragment>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton href="/">
              <IonIcon icon={chevronBackOutline} />
              <b>Quản lý vị trí</b>
            </IonButton>
          </IonButtons>
          <IonButtons
            slot="end"
            onClick={() => {
              setOpenNewLocation(true);
            }}
          >
            <IonButton>
              <IonIcon icon={addOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {optionHome.map((item, index) => (
          <IonCard key={index} className={style.card_custom}>
            <IonCardContent>{item.name}</IonCardContent>
          </IonCard>
        ))}
      </IonContent>
      <ModalNewLocation
        openNewLocation={openNewLocation}
        submitLocation={submitLocation}
        closeModal={closeModal}
      />
    </Fragment>
  );
}
export default ManageLocation;
