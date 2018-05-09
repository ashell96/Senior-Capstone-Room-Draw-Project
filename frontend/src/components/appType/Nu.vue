<template>
<span>
<h1>Nu Application </h1>
<h5>For More Information Please Visit: www.eckerd.edu/housing</h5>
<h5>Please complete this application and submit it no later than 12 Noon Monday, March 20, 2018</h5>
<h5><u>Late Applications WILL NOT be accepted.</u></h5>
<p><b>After Room Draw, if one member withdraws from the unit, the remaining members will be given the option 
    to fill the space with another person of equal or greater point value within five business days. If after 
    five business days the vacant space has not been filled, the remaining students <u>will lose</u> the right to 
    occupy the unit. When two or more persons withdraw, at any time, from the unit the remaining members <u>will lose</u> the right to occupy the unit.</b></p>

<p>Please enter your e-mail: 
<input v-model="myEmail" placeholder="Enter e-mail"> </p>

<p>Please enter the e-mails of your other roommates</p>
<p>Roommate #2 <input v-model="requestees[0]" placeholder="Enter e-mail"> </p>
<p>Roommate #3 <input v-model="requestees[1]" placeholder="Enter e-mail"> </p>
<p>Roommate #4 <input v-model="requestees[2]" placeholder="Enter e-mail"> </p>
<p>Roommate #5 <input v-model="requestees[3]" placeholder="Enter e-mail"> </p>
<p>Roommate #6 <input v-model="requestees[4]" placeholder="Enter e-mail"> </p>
<p>Roommate #7 <input v-model="requestees[5]" placeholder="Enter e-mail"> </p>
<p>Roommate #8 <input v-model="requestees[6]" placeholder="Enter e-mail"> </p>
<button v-on:click="sendItt()" class="btn btn-info btn-sm">Submit</button>
</span>

</template>

<script>
module.exports = {
  data: function() {
    return {
      myEmail: this.$props.curUserEmail,
      requestees : ["","","","","","",""]
    };
  },
  props: ["app_id","curUserEmail"],
  methods: {
    sendItt: function() {
      let axios = require("axios");
      let vm = this;

      axios
        .post("http://entropy7.nas.eckerd.edu:3000/submission3/", {
          "requester": vm.myEmail,
          "requestee": vm.requestees,
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
