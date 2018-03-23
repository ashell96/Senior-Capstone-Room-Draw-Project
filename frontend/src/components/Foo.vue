<template>
<span>
<h1>Squatting Application</h1>
<h5>For More Information Please Visit: www.eckerd.edu/housing</h5>
<h5>Please complete this application and submit it no later than 12 Noon Monday, March 20, 2018</h5>
<h5><u>Late Applications WILL NOT be accepted.</u></h5>
<p>Please enter your e-mail: 
<input v-model="email" placeholder="Enter e-mail"> </p>


<p>Current Room Assignment of Roommate 1: 
  <input v-model="roommateAssign1" placeholder="Dorm, House, Rm #"> </p>



<p>Are you squatting with your current roommate?
<input type="checkbox" v-model="checkYes"> Yes
<input type="checkbox" v-model="checkNo"> No</p>

<template v-if="checkYes">
  <template v-if="checkNo">
    <p> Please check one </p></template>
    <template v-else>
       <p> Please enter your current roommate's e-mail: 
      <input v-model="email" placeholder="Enter e-mail"> </p>
      <p>Current room assignment of Roommate 2: 
    <input v-model="roommateAssign2" placeholder="Dorm, House, Rm #"> </p>
    </template>
    </template>


<template v-if="checkNo">
  <template v-if="checkYes">
    <p>  </p></template>
    <template v-else> 
    <p> Please enter your proposed roommate's e-mail: 
    <input v-model="email2" placeholder="Enter e-mail"> </p>
    <p>Current room assignment of proposed Roommate 2: 
  <input v-model="roommateAssign2" placeholder="Dorm, House, Rm #"> </p>
</template>
</template>


<button class="btn btn-info btn-sm">Submit</button>

</span>
</template>

<script>
module.exports = {
  data: function() {
    return {
      message: "hi ",
      roommateAssign1: "",
      roommateAssign2: "",
      email: "",
      email2: "",
      checkYes: null,
      checkNo: null
    };
  },

  methods: {
    fun: function() {
      console.log("fun");
    },
    showAdditional: function() {}
  },
  
  

};
</script>