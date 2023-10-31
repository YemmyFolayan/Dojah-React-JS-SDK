import React from 'react'
import Dojah from 'react-dojah'

const App = () => {
  /**
   *  This is your app ID
   * (go to your dashboard at
   * https://dojah.io/dashboard
   * to create an app and retrieve it)
   */
  const appID = "";

  /**
   *  This is your account public key
   *  (go to your dashboard at
   *  https://dojah.io/dashboard to
   *  retrieve it. You can also regenerate one)
   */
  const publicKey = "";

  /**
   *  This is the widget type you'd like to load
   *  (go to your dashboard at
   *  https://dojah.io/dashboard to enable different
   *  widget types)
   */
  const type = "custom";

  /**
   *  These are the configuration options
   *  available to you are:
   *  {debug: BOOL, pages: ARRAY[page: STRING, config: OBJECT]}
   *
   *  The config object is as defined below
   *
   *  NOTE: The otp and selfie options are only
   *  available to the `verification` widget
   */
   const config = {
    //debug: true,
    //webhook: true, //Before you set webhook to true, Ensure you are subscribed to the webhook here https://api-docs.dojah.io/docs/subscribe-to-services
    // pages: [
    //   {
    //     page: 'government-data',
    //     config: {
    //       bvn: true,
    //       nin: false,
    //       dl: false,
    //       mobile: false,
    //       otp: false,
    //       selfie: false,
    //     },
    //   },
    //   // { page: 'user-data', config: { enabled: false } },
    //   // { page: 'countries', config: { enabled: false } }, 
    //   // { page: 'business-data', config: {cac: true, tin: true, verification: true} },
    //   // { page: 'business-id' },
    //   {page: 'selfie'},
    //   {page: 'id', config: {passport: false, dl: true}},
    // ],


    widget_id: "",

  };

  /**
   *  These are the user's data to verify, options
   *  available to you possible options are:
   *  {first_name: STRING, last_name: STRING, dob: DATE STRING}
   *
   *  NOTE: Passing all the values will automatically skip
   *  the user-data page (thus the commented out `last_name`)
   */


  /**
   * @param {String} type
   * This method receives the type
   * The type can only be one of:
   * loading, begin, success, error, close
   * @param {String} data
   * This is the data from doja
   */
  const response = (type, data) => {
    console.log(type, data);
    if(type === 'success'){
    }else if(type === 'error'){
    }else if(type === 'close'){
    }else if(type === 'begin'){
    }else if(type === 'loading'){
    }
  }

  // The Doja library accepts 3 props and
  // initiliazes the doja widget and connect process
  return (
    <Dojah
      response={response}
      appID={appID}
      publicKey={publicKey}
      type={type}
      config={config}
     
    />
  );
}

export default App



//"react": "^16.13.1",