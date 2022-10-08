import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import BookDataServices from '../services/book.services';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={async ()=>{
          let title = "test";
          let author ="author";
          let status = "status";
          const newBook = {
            title,
            author,
            status
          };
          try{
            await BookDataServices.addBooks(newBook);
          }catch(err){
            console.log(err);
          }
        }}>add</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
