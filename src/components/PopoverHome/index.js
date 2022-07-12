import React from "react";
import {
  IonBadge,
  IonContent,
  IonIcon,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonPopover,
} from "@ionic/react";
import { checkmark, settingsOutline } from "ionicons/icons";
import style from "./style.module.css";

const optionHome = [
  { id: 1, name: "Nhà 1" },
  { id: 2, name: "Nhà 2" },
  { id: 3, name: "Nhà 3" },
  { id: 4, name: "Nhà 4" },
  { id: 5, name: "Nhà 5" },
];

function PopoverHome(props) {
  const openHome = props.openHome;
  const location = props.location;
  const closedPopover = props.closedPopover;
  const refHome = props.refHome;
  const selectLocation = props.selectLocation;

  return (
    <IonPopover ref={refHome} isOpen={openHome} onDidDismiss={closedPopover}>
      <IonContent className="ion-padding">
        <IonList style={{ padding: "unset" }}>
          {optionHome.map((item, index) => (
            <IonItem onClick={() => selectLocation(item)} key={index} className={style.select_custom}>
              {location === item.name ? (
                <>
                  <IonLabel style={{color:'#3880ff'}}>{item.name}</IonLabel>
                  <IonIcon
                    style={{ margin: "unset", color: "#3880ff" }}
                    icon={checkmark}
                    slot="end"
                  ></IonIcon>
                </>
              ) : (
                <IonLabel>{item.name}</IonLabel>
              )}
            </IonItem>
          ))}
          <IonItem className={style.item_custom} href="/manage-location">
            <IonIcon icon={settingsOutline}></IonIcon>
            <IonLabel className={style.pad_left_20}>Quản lý vị trí</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPopover>
  );
}
export default PopoverHome;
