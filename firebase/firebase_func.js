import { getDatabase, ref, set } from "firebase/database";
import { app } from "./init";

// export async function  addGeneral(path, obj) {
//     console.log("Ss")
//     const db =await getDatabase(app);
//     console.log(db ,"SDs")
//  await  set(ref(db, path), obj);
// }

import { collection, addDoc, getFirestore, setDoc, doc, getDocs, getDoc } from "firebase/firestore";
import { setErrorHelper } from "@/components/utils/utils";
// import {db} from '../firebase';
   
export const  addGeneral = async (id,obj,collection_) => {
    // e.preventDefault();  
    console.log(id,obj,collection_)
       
    try {
        const db =  getFirestore(app);
        // const docRef = doc(collection(db, collection_));

        // await setDoc(docRef, obj)
        const col =  collection(db, collection_)
      let docRef =  await setDoc(doc( col, id), obj);
        // await db.collection(collection).doc(path).set(obj)
        
        
        
            // const docRef = await addDoc(collection(db, path),obj);
            console.log("Document written with ID: ");
    } catch (e) {
        if (e.message) {
            setErrorHelper(e.message)
        }
            console.error("Error adding document: ");
          }
    }
   
export const  readGeneral = async (collection_,id) => {
    // e.preventDefault();  
    console.log("12222")
    const db =  getFirestore(app);
    console.log("33332")
    
    try {
        const col =  collection(db, collection_)
        console.log("3333ssss2")
        let docSnap =   await getDoc(doc( col, id))
        // .then((querySnapshot)=>{
            console.log("3333ssssssssss2")
            //     const newData = querySnapshot.docs
            //         .map((doc) => ({...doc.data(), id:doc.id }));
            
            //     console.log( newData);
            // })
            
            if (docSnap.exists()) {
                
                console.log("3333ssssssssssssssss2")
            return  docSnap.data()
            // console.log("Document data:", docSnap.data());
          } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
            return null
          }
        
    } catch (e) {
        if (e.message) {
            setErrorHelper(e.message)
        }
            console.error("Error adding document: ");
          }
    }