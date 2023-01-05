import { doc, setDoc } from 'firebase/firestore';

import { db } from './index';

export const saveFCMToken = async (token: string) => {
  await setDoc(doc(db, 'FCMToken', 'user'), { token });
};
