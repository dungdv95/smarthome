import React, { Fragment, useEffect, useRef, useState } from "react";
import { IonHeader, IonToolbar, IonTitle, IonChip, IonPage, IonButtons, IonButton } from "@ionic/react";
import { IonIcon } from "@ionic/react";
import { IonLabel } from "@ionic/react";
import { add, ellipsisVertical, home } from "ionicons/icons";
import style from "./style.module.css";
import PopoverHome from "../../components/PopoverHome";
import ModalLocation from "../../components/ModalLocation";
import TabBar from "../../components/TabBar";
import UIContext from "../../my-context";
import back1 from "../../assets/images/background/background1.jpg";

function Device() {
  const [location, setLocation] = useState('Nhà 1');
  const [openHome, setOpenHome] = useState(false);
  const { setBackGroundImg } = React.useContext(UIContext);
  
  const refHome = useRef();

  const closedPopover = () => {
    setOpenHome(false);
  };

  const openPopoverHome = (e) => {
    refHome.current.event = e;
    setOpenHome(true);
  };

  const selectLocation = (item) => {
    console.log(item)
    setBackGroundImg(item.backGround)
    setLocation(item.name);
    setOpenHome(false);
  }
  useEffect(() => {
    setBackGroundImg(back1);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className={style.header}>
          <IonTitle className={style.header_favorite}>
            <IonIcon className={style.header_icon} icon={home} />
            <IonLabel
              onClick={(e) => openPopoverHome(e)}
              className={style.title_custom}
            >
              {location}
            </IonLabel>
          </IonTitle>
          <IonButtons slot="end" >
            <IonButton>
              <IonIcon icon={add}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonButtons slot="end" >
            <IonButton>
              <IonIcon icon={ellipsisVertical}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <PopoverHome
        refHome={refHome}
        openHome={openHome}
        location={location}
        selectLocation={selectLocation}
        closedPopover={closedPopover}
      />
      {/* <ModalLocation openLocation={openLocation} closedLocation = {closedLocation}/> */}
    </IonPage>
  );
}
export default Device;
