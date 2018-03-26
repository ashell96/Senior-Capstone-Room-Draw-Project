<template>
<div>
    <h1>Sign In</h1>
    <div id="firebaseui-auth-container"></div>
    <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/2.6.2/firebaseui.css" />
</div>
</template>


<script>
export default {
  data: function() {
    return {
    };
  },
  props: ["firebase"],
  mounted: function() {
    let firebase = this.$props.firebase;
    let firebaseui = require("firebaseui");

    var uiConfig = {
      signInSuccessUrl: "/",
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
      tosUrl: "<your-tos-url>",
      signInFlow: "popup"
    };

    let ui = firebaseui.auth.AuthUI.getInstance();
     if (ui == null) {
    ui = new firebaseui.auth.AuthUI(firebase.auth());
     }
        
    ui.start("#firebaseui-auth-container", uiConfig);
    
  }
};
</script>
