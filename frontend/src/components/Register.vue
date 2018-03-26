<template>
<div>
    <h1>Register</h1>
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
  methods: {
    testMethod: function() {
      console.log("test method running");
    }
  },
  created: function() {
    let firebase = this.$props.firebase;
    let firebaseui = require("firebaseui");

    var uiConfig = {
      signInSuccessUrl: "/",
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
      tosUrl: "<your-tos-url>",
      signInFlow: "popup"
    };

    let ui;
    if (firebaseui.auth.AuthUI.getInstance() == null) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    } else {
      ui = firebaseui.auth.AuthUI.getInstance();
    }
    ui.start("#firebaseui-auth-container", uiConfig);
    //TODO: Check if there's an alternative to ui.start
    
  }
};
</script>
