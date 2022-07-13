import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { addOutline, chevronBackOutline } from "ionicons/icons";
import React, { Fragment, useEffect, useState } from "react";
import style from "./style.module.css";
import ModalNewLocation from "./../ModalNewLocation/index";
import UIContext from "../../my-context";
import { useHistory } from "react-router";
import back1 from "../../assets/images/background/background1.jpg";
import back2 from "../../assets/images/background/background2.jpg";

function ManageLocation() {
  const [openNewLocation, setOpenNewLocation] = useState(false);
  const [optionHome, setOptionHome] = useState([
    { name: "Nhà 1", backGround: back1 },
    { name: "Nhà 2", backGround: back2 },
  ]);
  
  const { setShowTabs } = React.useContext(UIContext);
  const history = useHistory();

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

  useEffect(() => {
    setShowTabs(false);

    return () => {
      setShowTabs(true);
    };
  });

  const handleAddNewLocation = () => {
    history.push("new-location");
  };

  const backPage = () => {
    history.goBack();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start" onClick={backPage}>
            <IonButton>
              <IonIcon icon={chevronBackOutline} />
              <b>Quản lý vị trí</b>
            </IonButton>

            {/* <IonBackButton text="Quản lý vị trí" /> */}
          </IonButtons>
          <IonButtons slot="end" onClick={handleAddNewLocation}>
            <IonButton>
              <IonIcon icon={addOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {optionHome.map((item, index) => (
          <IonCard key={index} className={style.card_custom}>
            <IonCardContent className={style.card_content_custom}>
              <IonAvatar className={style.avatar_custom}>
                <img src={item.backGround} />
              </IonAvatar>
              <IonLabel className={style.card_label_custom}>{item.name}</IonLabel>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
      {/* <ModalNewLocation
        openNewLocation={openNewLocation}
        submitLocation={submitLocation}
        closeModal={closeModal}
      /> */}
    </IonPage>
  );
}
export default ManageLocation;
