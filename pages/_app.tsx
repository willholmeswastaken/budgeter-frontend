import 'animate.css';
import 'hover.css';
import '../styles/globals.css'
import { AppProps } from 'next/app';
import Header from '../components/Header';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="min-h-screen bg-gray-100">
    <Header />
    <Component {...pageProps} />
  </div>
);

export default MyApp
