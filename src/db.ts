// Get a RTDB instance
import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase
  .initializeApp({ databaseURL: 'https://teeokratie-default-rtdb.europe-west1.firebasedatabase.app' })
  .database()
