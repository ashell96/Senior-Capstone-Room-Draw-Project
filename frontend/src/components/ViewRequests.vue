<template>
<span>
<h1>Viewing Rommate Request </h1>
<p> You have received a roommate request from ''</p>
<p>Please enter your e-mail: 
<input v-model="email" placeholder="Enter e-mail"> </p>



<button class="btn btn-info btn-md">Click to Accept</button>
<br>
<br>
<button class="btn btn-info btn-md">Click to Deny</button>

</span>

</template>

<script>
let axios = require("axios");
module.exports = {
  data: function() {
    return { message: ""
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
