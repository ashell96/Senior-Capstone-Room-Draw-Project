<template>
<span>
<h1>Single Application </h1>
<h5>For More Information Please Visit: www.eckerd.edu/housing</h5>
<h5>Please complete this application and submit it no later than 12 Noon Monday, March 20, 2018</h5>
<h5><u>Late Applications WILL NOT be accepted.</u></h5>

<p>Please enter your e-mail: 
<input v-model="email" placeholder="Enter e-mail"> </p>



<button v-on:click="sendtoApps()" class="btn btn-info btn-sm">Submit</button>
</span>

</template>

<script>
module.exports = {
  data: function() {
    return { message: "Application", email:"", email2:"", email3:"", email4:"", email5:"", email6:"", email7:""
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
