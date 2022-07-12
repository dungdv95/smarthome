import React, { Fragment, useRef, useState } from "react";
import { IonHeader, IonToolbar, IonTitle, IonChip } from "@ionic/react";
import { IonIcon } from "@ionic/react";
import { IonLabel } from "@ionic/react";
import { home } from "ionicons/icons";
import style from "./style.module.css";
import PopoverHome from "../../components/PopoverHome";
import ModalLocation from "../../components/ModalLocation";

function Device() {
  const [location, setLocation] = useState('Nhà 3');
  const [openHome, setOpenHome] = useState(false);
  const refHome = useRef();

  const closedPopover = () => {
    setOpenHome(false);
  };

  const openPopoverHome = (e) => {
    refHome.current.event = e;
    setOpenHome(true);
  };

  const selectLocation = (item) => {
    setLocation(item.name);
    setOpenHome(false);
  }

  return (
    <Fragment>
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
    </Fragment>
  );
}
export default Device;
