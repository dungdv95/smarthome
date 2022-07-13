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
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add, checkmark, chevronBackOutline } from "ionicons/icons";
import { Fragment, useState } from "react";
import { useHistory } from "react-router";
import style from "./style.module.css";
import back1 from '../../assets/images/background/background1.jpg'

function NewLocation(props) {
  const history = useHistory();
  const [nameLocation, setNameLocation] = useState("");

  const onChangeName = (e) => {
    setNameLocation(e.detail.value);
  };
  const submit = () => {
    history.goBack();
  };

  const backPage = () => {
    history.goBack();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className={style.head_title_custom}>
          <IonButtons slot="start" onClick={backPage}>
            <IonButton>
              <IonIcon icon={chevronBackOutline} />
              <b>Cancel</b>
            </IonButton>
            {/* <IonBackButton text="Cancel" /> */}
          </IonButtons>
          <IonTitle>Thêm vị trí mới</IonTitle>
          <IonButtons slot="end" onClick={submit}>
            <IonButton>Confirm</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <IonList>
              <IonItem className={style.item_custom_input}>
                <IonInput
                  value={nameLocation}
                  onIonChange={(e) => onChangeName(e)}
                  placeholder="Đặt tên cho vị trí của bạn"
                ></IonInput>
              </IonItem>
              <IonItem className={style.item_custom}>
                <div>
                  <h4>
                    <b>Vị trí địa lý</b>
                  </h4>
                  <h6 style={{ fontSize: "11px" }}>
                    Hãy cho chúng tôi biết vị trí này nằm ở đâu. Việc này sẽ
                    giúp chúng tôi tự động hóa thiết bị cho bạn.
                  </h6>
                </div>
              </IonItem>
              <IonItem className={style.item_custom}>
                <IonAvatar slot="end">
                  <img src={back1} />
                </IonAvatar>
                <IonLabel>Hình nền</IonLabel>
              </IonItem>
              <IonItem className={style.item_custom_room}>
                <div>
                  <h4>
                    <b>Phòng</b>
                  </h4>
                  <h6 style={{ fontSize: "11px" }}>
                    Hãy cho chúng tôi biết các phòng ở vị trí này. Chúng tôi sẽ
                    sử dụng thông tin này để sắp xếp thiết bị cho bạn.
                  </h6>
                </div>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
}
export default NewLocation;
