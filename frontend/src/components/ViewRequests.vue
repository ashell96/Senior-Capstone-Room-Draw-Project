<template>
<span>
<h1>Viewing Rommate Request </h1>
<p> You have received a roommate request from {{requester_email}}</p>
<p>Room Request Submission ID: {{submission_id}}  </p>
<button class="btn btn-info btn-md">Click to Accept</button>
<br>
<br>
<button class="btn btn-info btn-md">Click to Deny</button>
                <div id="hi" v-for="item in submissions" :key="item.submission_id">
                    <td v-if="item.submission_id == submission_id" id="room"> Room: {{item.room}}</td>
                    <br>
                    <td v-if="item.submission_id == submission_id" id="sub_status"> Status: {{item.sub_status}}</td>
                  
                </div>
</span>

</template>

<script>
let axios = require("axios");
module.exports = {
  data: function() {
    return { 
    message: "",
    requester: this.$props.requester_email,
    sub_ID: this.$props.submission_id,
    submissions:""
    };
  },
  props:['requester_email', "curUserEmail", "submission_id"], 
  methods: {
  loadApplications: function() {
      let vm = this;
      if(this.$props.curUserEmail == "0"){
        setTimeout(function(){vm.loadApplications()},1000);
      } else {
        axios
              .get("http://entropy7.nas.eckerd.edu:3000/mySubmissions/", {
                myEmail: this.$props.curUserEmail
              })
              .then(function(response) {
                vm.$set(vm, "submissions", response.data);
              })
              .catch(function(error) {
                console.log(error);
              });
      }
   
    }
  },
  created: function() {
    this.loadApplications();
  }
};
</script>

