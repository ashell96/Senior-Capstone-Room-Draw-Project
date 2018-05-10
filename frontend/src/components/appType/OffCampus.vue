<template>
<span>
<h1>Off-Campus Alta Mar Application </h1>
<h5>For More Information Please Visit: www.eckerd.edu/housing</h5>
<h5>Please complete this application and submit it no later than 12 Noon Monday, March 20, 2018</h5>
<h5><u>Late Applications WILL NOT be accepted.</u></h5>
<p><i>These unites will be townhome stle, two bedroom, two and a half bath, four person suietes (2 students per 
    bedroom) with a full-kitchen, living room and study. Furniture, power, water, sewage, Internet, cable, and 
    any other utilities are included. Laundry facilities are on sit in the complex.</i></p>


<p>Please enter your e-mail: 
<input v-model="myEmail" placeholder="Enter e-mail"> </p>
<br>

  <p> Please enter the e-mails of the other 3 roommates</p>
  <p> Roommate 2 <input v-model="requestees[0]" placeholder="Roommate #2 email"> </p>
  <p> Roommate 3 <input v-model="requestees[1]" placeholder="Roommate #3 email"></p>
  <p> Roommate 4 <input v-model="requestees[2]" placeholder="Roommate #4 email"></p>
  <button v-on:click ="sendtoApps(); getPreference();" class="btn btn-info btn-sm">Submit</button>

</span>

</template>

<script>
module.exports = {
  data: function() {
    return {
      myEmail: this.$props.curUserEmail,
      requestees : ["","",""],
      renovated: false,
      room_preference: ""
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
          "room_preference" : getPreference()
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
    },
    getPreference: function(){
      console.log(this.renovated ? "off_rennovated" : "off_not_rennovated");
      return this.renovated ? "off_rennovated" : "off_not_rennovated";
    }
  },
};
</script>
