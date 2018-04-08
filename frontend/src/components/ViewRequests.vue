<template>
<span>
<h1>Viewing Rommate Request </h1>
<p> You have received a roommate request from {{requester_email}}</p>
<p>Room Request:  </p>
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
    return { message: "",
    requester: this.$props.requester_email
    };
  },
  props:['requester_email'],
  methods: {
    fun: function() {
      console.log("fun");
  }
  },
};
</script>
