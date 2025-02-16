import { db } from "@/firebase";
import { 
    collection,
    getDoc,
    addDoc,
    updateDoc,
    doc,
    deleteDoc,
    serverTimestamp 
} from "firebase/firestore";


//Data Types
interface IdentityType {
    name: string;
    description: string;
    habitIds: string[];
    createdAt: Date;
}

//Collection References
const users = collection(db,"users");
const identities = collection(db,"identities");
const habits = collection(db,"habits");



//Get test
// const docRef = doc(db,"users","KfkQrPtlTRG85FWs0w3V");
// export const docSnap = await getDoc(docRef);

//Add test

export const addNewUser = async () => {
    const newUser = {
        username: "maddog",
        name: "Kristine Rosette",
        email: "kristine@example.com"
    }
    const newUserRef = await addDoc(users,newUser);

    return newUserRef.id;


} 

export const addNewIdentity = async (data: IdentityType) => {
    const newIdentity = await addDoc( identities, data );

    //delete this line eventually, this is just to confirm it goes thru
    return newIdentity.id;
    
}