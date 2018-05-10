<template>
<span>
<h1>Omega Application </h1>
<h5>For More Information Please Visit: www.eckerd.edu/housing</h5>
<h5>Please complete this application and submit it no later than 12 Noon Monday, March 20, 2018</h5>
<h5><u>Late Applications WILL NOT be accepted.</u></h5>
<p><b>After Room Draw, if one member withdraws from the unit, the remaining members will be given the option 
    to fill the space with another person of equal or greater point value within five business days. If after 
    five business days the vacant space has not been filled, the remaining students <u>will lose</u> the right to 
    occupy the unit. When two or more persons withdraw, at any time, from the unit the remaining members <u>will lose</u> the right to occupy the unit.</b></p>

<p>Please enter your e-mail: 
<input v-model="myEmail" placeholder="Enter e-mail"> </p>

<p>Check one: 
<input type="checkbox" v-model="Double"> 2 Double Room Apartment   
<br>
<input type="checkbox" v-model="FourSingle"> 4 Single Room Apartment
<br>
<input type="checkbox" v-model="FivePerson"> 5 Person Apartment (2 Double Rooms and 1 Single Room)</p>

<template v-if="Double">
    <template v-if="FourSingle">
        <p> Choose one</p> </template>
     <template v-else-if="FivePerson">
        <p> Choose one </p></template>

<template v-else>
<p> Please enter the e-mails of the other 3 roommates</p>
   <p> Roommate 2 <input v-model="requestees[0]" placeholder="Roommate #2 email"> </p>
   <p> Roommate 3 <input v-model="requestees[1]" placeholder="Roommate #3 email"></p>
   <p> Roommate 4 <input v-model="requestees[2]" placeholder="Roommate #4 email"></p>
</template>
</template>

<template v-if="FourSingle">
    <template v-if="Double">
        <p> </p> </template>
        <template v-else-if="FivePerson">
            <p> Choose one </p>
        </template>
<template v-else>
<p> Please enter the e-mails of the other 3 roommates</p>
   <p> Roommate 2 <input v-model="requestees[0]" placeholder="Roommate #2 email"> </p>
   <p> Roommate 3 <input v-model="requestees[1]" placeholder="Roommate #3 email"></p>
    <p> Roommate 4 <input v-model="requestees[2]" placeholder="Roommate #4 email"></p>
</template>
</template>

<template v-if="FivePerson">
     <template v-if="Double">
        <p>  </p>  </template>
    <template v-else-if="FourSingle">
         <p> </p>
        </template>
<template v-else>
<p> Please enter the e-mails of the other 4 roommates</p>
   <p> Roommate 2 <input v-model="requestees[0]" placeholder="Roommate #2 email"> </p>
   <p> Roommate 3 <input v-model="requestees[1]" placeholder="Roommate #3 email"></p>
    <p> Roommate 4 <input v-model="requestees[2]" placeholder="Roommate #4 email"></p>
    <p> Roommate 5 <input v-model="requestees[3]" placeholder="Roommate #5 email"></p>

</template>
</template>

<button v-on:click="sendToServer()" class="btn btn-info btn-sm">Submit</button>

</span>
</template>

<script>
module.exports = {
  data: function() {
    return {
      Double: "",
      FourSingle: "",
      FivePerson: "",
      myEmail: this.$props.curUserEmail,
      requestees: ["", "", "", ""]
    };
  },
  props: ["app_id", "curUserEmail"],
  methods: {
    sendtoServer: function() {
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