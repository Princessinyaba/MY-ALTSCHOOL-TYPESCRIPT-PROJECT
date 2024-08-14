// pages/[shortCode].js
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';


const ShortCodeRedirect = () => {
  const router = useRouter();
  const { shortCode } = router.query;

  useEffect(() => {
    if (shortCode) {
      const fetchLongUrl = async () => {
        try {
          const docRef = doc(db, 'urls', shortCode);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const { longUrl } = docSnap.data();
            window.location.href = longUrl; // Redirect to the long URL
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error fetching document:', error);
        }
      };

      fetchLongUrl();
    }
  }, [shortCode]);

  return null; // Return null as the redirection will happen automatically
};

export default ShortCodeRedirect;
