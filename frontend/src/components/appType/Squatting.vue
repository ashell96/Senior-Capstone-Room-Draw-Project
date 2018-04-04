<template>
<span>
<h1>Squatting Application</h1>
<h5>For More Information Please Visit: www.eckerd.edu/housing</h5>
<h5>Please complete this application and submit it no later than 12 Noon Monday, March 20, 2018</h5>
<h5><u>Late Applications WILL NOT be accepted.</u></h5>
<p>Please enter your e-mail: 
<input v-model="myEmail" placeholder="Enter e-mail"> </p>


<p>Current Room Assignment of Roommate 1: 
  <input v-model="roommateAssign1" placeholder="Dorm, House, Rm #"> </p>



<p>Are you squatting with your current roommate?
<input type="checkbox" v-model="checkYes"> Yes
<input type="checkbox" v-model="checkNo"> No</p>
<p> Please enter your current roommate's e-mail: 
<input v-model="currentRoommateEmail" placeholder="Enter e-mail"> </p>

<template v-if="checkNo">
  <template v-if="checkYes">
    <p>  </p></template>
    <template v-else> 
    <p> Please enter your proposed roommate's e-mail: 
    <input v-model="newRoommateEmail" placeholder="Enter e-mail"> </p>
    <p>Current room assignment of proposed Roommate 2: 
  <input v-model="roommateAssign2" placeholder="Dorm, House, Rm #"> </p>
</template>
</template>


<button v-on:click="sendtoApps()" class="btn btn-info btn-sm">Submit</button>

</span>
</template>

<script>
module.exports = {
  data: function() {
    return {
      myEmail: this.$props.curUserEmail,
      currentRoommateEmail: "",
      newRoommateEmail: "",
      checkYes: false,
      checkNo: false
    };
  },
  props: ["curUserEmail"],
  methods: {
    sendtoApps: function() {
      window.location = '/#/ViewSubmissions'
    }
  },
};
</script>