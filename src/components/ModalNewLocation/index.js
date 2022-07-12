import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonList,
  IonModal,
  IonToolbar,
} from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";
import { Fragment, useState } from "react";
import style from "./style.module.css";

function ModalNewLocation(props) {
  const openNewLocation = props.openNewLocation;
  const closeModal = props.closeModal;
  const submitLocation = props.submitLocation;
  
  const [nameLocation,setNameLocation] = useState('');

  const onChangeName = (e) => {
    setNameLocation(e.detail.value)
  }
  const submit = () => {
    submitLocation(nameLocation);
    closeModal();
    setNameLocation('');
  }

  return (
    <Fragment>
      <IonModal isOpen={openNewLocation}>
        <IonHeader>
          <IonToolbar className={style.head_title_custom}>
            <b>Thêm vị trí mới</b>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <IonCardContent>
              <IonList>
                <IonItem className={style.item_custom_input}>
                  <IonInput value={nameLocation} onIonChange={(e) => onChangeName(e)} placeholder="Đặt tên cho vị trí của bạn"></IonInput>
                </IonItem>
                <IonItem className={style.item_custom}>
                  <div>
                    <h4>
                      <b>Vị trí địa lý</b>
                    </h4>
                    <h6 style={{fontSize:'11px'}}>
                      Hãy cho chúng tôi biết vị trí này nằm ở đâu. Việc này sẽ
                      giúp chúng tôi tự động hóa thiết bị cho bạn.
                    </h6>
                  </div>
                </IonItem>
                <IonItem className={style.item_custom_room}>
                  <div>
                    <h4>
                      <b>Phòng</b>
                    </h4>
                    <h6 style={{fontSize:'11px'}}>
                      Hãy cho chúng tôi biết các phòng ở vị trí này. Chúng tôi
                      sẽ sử dụng thông tin này để sắp xếp thiết bị cho bạn.
                    </h6>
                  </div>
                </IonItem>
              </IonList>
            </IonCardContent>
          </IonCard>
        </IonContent>
        {/* <IonFooter> */}
        <div className={style.footer_add}>
          <IonButtons slot="start">
            <IonButton onClick={closeModal}>Thoát</IonButton>
          </IonButtons>
          <IonButtons slot="end" onClick={submit}>
            <IonButton>Hoàn tất</IonButton>
          </IonButtons>
        </div>
      </IonModal>
    </Fragment>
  );
}
export default ModalNewLocation;
