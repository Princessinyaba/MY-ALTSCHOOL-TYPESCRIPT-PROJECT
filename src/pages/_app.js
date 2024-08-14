// pages/_app.js
// import '../css/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from '../authContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
