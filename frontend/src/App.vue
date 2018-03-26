<template>
  <div id="app">
    <nav class="site-header sticky-top py-1">
      <div class="container d-flex flex-column flex-md-row justify-content-between">
        <router-link class="py-2 d-none d-md-inline-block" to="/">Home</router-link>
        <router-link class="py-2 d-none d-md-inline-block" to="/HousingRules">Housing Rules</router-link>

        <router-link v-if="loggedIn" class="py-2 d-none d-md-inline-block" to="/viewApps">Go to Applications</router-link>
        <router-link v-if="loggedIn" class="py-2 d-none d-md-inline-block" to="/ViewSubmissions">View Submissions</router-link>
        <router-link v-if="loggedIn" class="py-2 d-none d-md-inline-block" to="/RoommateRequests">Roommate Requests</router-link>

        <span>
          <img v-if="loggedIn" :src="profilePic" class="img-circle img-responsive" v-on:click="signOut" height=40>
          <!--<router-link v-else class="py-2 d-none d-md-inline-block" to="Register">Sign In</router-link>-->
        </span>
      </div>
    </nav>
    <div class="mx-auto col-md-7">
      <router-view :curUserEmail="tempEmail" :firebase="topFirebase"></router-view>
    </div>
    </div>
</template>
 
<script>
import firebase from "firebase";

export default {
  data: function() {
    return {
      loggedIn: false,
      profilePic: "https://ssl.gstatic.com/ui/v1/icons/mail/profile_mask2.png",
      topFirebase: firebase,
      tempEmail : "0"
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
          vueObj.tempEmail = firebase.auth().currentUser.email;
          vueObj.loggedIn = true;
          console.log("login success");
        } else {
          // No user is signed in.
          this.loggedIn = false;
          vueObj.tempEmail = "";
          console.log("login failed");
        }
      });
    },
    signOut: function() {
      firebase.auth().signOut();
      window.location.href = ""
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

