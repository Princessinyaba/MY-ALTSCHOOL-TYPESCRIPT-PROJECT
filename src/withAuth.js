// withAuth.js
import { useAuth } from '../authContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const withAuth = (Component) => {
  return (props) => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.push('/login');
      }
    }, [user]);

    if (!user) {
      return null;
    }

    return <Component {...props} />;
  };
};

export default withAuth;
