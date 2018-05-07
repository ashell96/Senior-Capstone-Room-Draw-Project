<template>
<div class="themed">
<h1>Themed Housing Application </h1>
<h5>For More Information Please Visit: www.eckerd.edu/housing</h5>
<h5>Please complete this application and submit it no later than 12 Noon Monday, March 20, 2018</h5>
<h5><u>Late Applications WILL NOT be accepted.</u></h5>
<h5>This application is for students wanting to reside in any of our seven themed complexes <br>
  <b>(Alpha, Beta, Gamma, Delta, Epsilon, Kappa, and Zeta) as well as Iota. </b> 
</h5>

<p>Please enter your e-mail: 
<input v-model="myEmail" placeholder="Enter e-mail"> </p>

<p>Please enter your roommate's e-mail: 
<input v-model="roommateEmail" placeholder="Enter e-mail"> </p>


<button v-on:click="sendItt()" class="btn btn-info btn-sm">Submit</button>
</div>

</template>

<script>
module.exports = {
  data: function() {
    return {
      myEmail: this.$props.curUserEmail,
      roommateEmail: ""
    };
  },
  props: ["app_id","curUserEmail"],
  methods: {
    sendItt: function() {
      let axios = require("axios");
      let vm = this;
      console.log({
        "requester": vm.myEmail,
          "requestee": vm.roommateEmail,
          "app_id": this.$props.app_id,
      })
      

      axios
        .post("http://entropy7.nas.eckerd.edu:3000/submission3/", {
          "requester": vm.myEmail,
          "requestee": vm.roommateEmail,
          "app_id": this.$props.app_id,
        })
        .then(function(response) {
          console.log(response);
          // Do something on success
          window.location = '/#/ViewSubmissions';
        })
        .catch(function(error) {
          console.log(error);
          alert(error);
          // We need a better way of showing an error
        })
        
    }
  }
};
</script>
