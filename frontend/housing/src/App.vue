<template>
  <div id="app">
    <nav class="site-header sticky-top py-1">
      <div class="container d-flex flex-column flex-md-row justify-content-between">
        <!--
        <a class="py-2" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
        </a>
        <a class="py-2 d-none d-md-inline-block" href="#">Tour</a>
        <a class="py-2 d-none d-md-inline-block" href="#">Product</a>
        <a class="py-2 d-none d-md-inline-block" href="#">Features</a>
        <a class="py-2 d-none d-md-inline-block" href="#">Enterprise</a>
        -->
        <router-link class="py-2 d-none d-md-inline-block" to="/">Home</router-link>
        <router-link class="py-2 d-none d-md-inline-block" to="/Omega">Go to Omega</router-link>
        <router-link class="py-2 d-none d-md-inline-block" to="/HousingRules">Housing Rules</router-link>
        <router-link class="py-2 d-none d-md-inline-block" to="/Traditional">Go to Traditional</router-link>
        <router-link class="py-2 d-none d-md-inline-block" to="Foo">Go to Foo</router-link>
        <router-link class="py-2 d-none d-md-inline-block" to="/viewApps">Go to Apps</router-link>
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

