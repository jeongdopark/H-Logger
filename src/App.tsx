// App.tsx
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const App = () => {
  const getFirebaseData = async () => {
    const querySnapshot = await getDocs(collection(db, "test"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      console.log(doc.data());
    });
  };
  getFirebaseData();

  return <div>hello world!!</div>;
};

export default App;
