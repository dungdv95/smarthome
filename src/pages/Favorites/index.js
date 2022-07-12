import {
  IonButton,
  IonChip,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonRoute,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { home, ellipsisVerticalOutline, addOutline } from "ionicons/icons";
import { Fragment } from "react";
import style from "./style.module.css";

function Favorites() {
  return (
    <Fragment>
      <IonHeader>
        <IonToolbar className={style.header}>
          <IonTitle className={style.header_favorite}>
            <IonIcon className={style.header_icon} icon={home} />
            <IonLabel>Nhà của bạn</IonLabel>
            {/* <IonChip color="dark" className={style.login_custom}>
              <IonLabel className={style.login_text} color="dark">
                Đăng nhập
              </IonLabel>
            </IonChip> */}
            <a href="/addservices" className={style.header_favorite_add_icon}>
              <IonIcon
                // className={style.header_favorite_add_icon}
                icon={addOutline}
              ></IonIcon>
            </a>
            <IonIcon
              className={style.header_favorite_icon}
              icon={ellipsisVerticalOutline}
            ></IonIcon>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
    </Fragment>
  );
}
export default Favorites;
