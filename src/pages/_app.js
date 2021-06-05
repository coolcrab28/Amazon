import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    if("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
       navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, [])

  return (
    
    <Provider store={store}>
      
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
