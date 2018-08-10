
var config = {
    apiKey: "AIzaSyBxb_mziH9fpLtlsU8GuXktZsVY2EGp-CI",
    authDomain: "proyectofinalcafeteria.firebaseapp.com",
    databaseURL: "https://proyectofinalcafeteria.firebaseio.com",
    projectId: "proyectofinalcafeteria",
    storageBucket: "proyectofinalcafeteria.appspot.com",
    messagingSenderId: "161941602982"
  };
  firebase.initializeApp(config);
  const data = firebase.database();
  function sendData(name, lastname, phone, email, message){
    const userData = data.ref("userData").push;
    userData.set(
      {
        dataName : name,
        dataLastname : lastname,
        dataPhone : phone,
        dataEmail : email,
        dataMessage : message
      }
    )
  }
