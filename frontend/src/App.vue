<template>
  <div id="app">
    <nav class="site-header sticky-top py-1">
      <div class="container d-flex flex-column flex-md-row justify-content-between">
        <router-link class="py-2 d-none d-md-inline-block" to="/">Home</router-link>
        <router-link class="py-2 d-none d-md-inline-block" to="/HousingRules">Housing Rules</router-link>
        <router-link class="py-2 d-none d-md-inline-block" to="/viewApps">Go to Applications</router-link>
        <router-link class="py-2 d-none d-md-inline-block" to="/ViewSubmissions">View Submissions</router-link>
        <span>
          <img v-if="loggedIn" :src="profilePic" class="img-circle img-responsive" v-on:click="signOut" height=40>
          <router-link v-else class="py-2 d-none d-md-inline-block" to="Register">Sign In</router-link>
        </span>
      </div>
    </nav>
    <router-view :firebase="topFirebase"></router-view>
    </div>
</template>
 
<script>
import firebase from "firebase";

export default {
  data: function() {
    return {
      loggedIn: false,
      profilePic: "https://ssl.gstatic.com/ui/v1/icons/mail/profile_mask2.png",
      topFirebase: firebase
    };
  },
  methods: {
    signIn: function() {
      console.log("created");
      let vueObj = this;
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          vueObj.profilePic = firebase.auth().currentUser.photoURL;
          vueObj.loggedIn = true;
          console.log("login success");
        } else {
          // No user is signed in.
          this.loggedIn = false;
          console.log("login failed");
        }
      });
    },
    signOut: function() {
      firebase.auth().signOut();
    },
    signInButton: function() {
      window.location.href = "/register.html";
    }
  },
  created: function() {
    this.signIn();
  }
};

// Any script we want to run all the time could go here
</script>


<style>
@import "~bootstrap/dist/css/bootstrap.css";
@import "assets/css/App.css";
</style>

