<template>
<div class="traditional">
<h1>Traditional Application </h1>
<h5>For More Information Please Visit: www.eckerd.edu/housing</h5>
<h5>Please complete this application and submit it no later than 12 Noon Monday, March 20, 2018</h5>
<h5><u>Late Applications WILL NOT be accepted.</u></h5>
<h5>This application is for students wanting to reside in any of our seven traditional complexes <br>
  <b>(Alpha, Beta, Gamma, Delta, Epsilon, Kappa, and Zeta) as well as Iota. </b> 
</h5>

<p>Please enter your e-mail: 
<input v-model="email1" placeholder="Enter e-mail"> </p>

<p>Please enter your roommate's e-mail: 
<input v-model="email2" placeholder="Enter e-mail"> </p>


<button v-on:click="sendTraditional" class="btn btn-info btn-sm">Submit</button>
</div>

</template>

<script>
export default {
  data: function() {
    return { message: "Application",
    email1: "",
    email2: ""   
    };
  },
  props : ["firebase", "app_id"],
  mounted : function () {
    // keeps checking for firebase
    let vm = this;
    function checkFirebase(){
      if (vm.$props.firebase.auth().currentUser == null){
        console.log("firebase not found");
        setTimeout(checkFirebase,1000);
      } else {
       vm.email1 = vm.$props.firebase.auth().currentUser.email;
     }
    }
    checkFirebase();
  },
  methods: {
    sendTraditional : function() {
      let axios = require("axios");
      let vm = this;

      axios
        .post("http://entropy7.nas.eckerd.edu:3000/submission/",{
          "requester" : vm.email1,
          "requestee" : vm.email2,
          "app_id" : this.$props.app_id,
          "room" : ""
        })
        .then(function(response) {
          console.log(response);
          //vm.$set(vm, "applications", response.data);
          // Do something on success
        })
        .catch(function(error) {
          console.log(error);
        });

    }
  }
};
</script>
