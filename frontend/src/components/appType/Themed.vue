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
<input v-model="email" placeholder="Enter e-mail"> </p>

<p>Please enter your roommate's e-mail: 
<input v-model="email2" placeholder="Enter e-mail"> </p>


<button v-on:click="sendtoApps()" class="btn btn-info btn-sm">Submit</button>
</div>

</template>

<script>
module.exports = {
  data: function() {
    return { message: "Application",
    email: "",
    email2:"" 
      
    
    };
  },
  methods: {
    fun: function() {
      console.log("fun");
    },
    sendtoApps : function(){
      window.location = '/#/ViewSubmissions'
      
    }
  }
};
</script>
