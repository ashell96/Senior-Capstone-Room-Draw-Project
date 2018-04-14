<template>
<span>
<h1>Viewing Rommate Request </h1>
<p> You have received a roommate request from {{requester_email}}</p>
<p>Room Request: {{submission_id}} (Submission ID for now to use in v-for loop) </p>
<button class="btn btn-info btn-md">Click to Accept</button>
<br>
<br>
<button class="btn btn-info btn-md">Click to Deny</button>
                <div id="hi" v-for="item in submissions" :key="item.submission_id">
                   <td id="sub_id">{{item.submission_id}}</td>
                    <td id="stu_email">{{item.primary_student_email}} </td>
                    <td id="sub_date">{{new Date(item.submission_date).toLocaleString()}}</td>
                    <td id="app_id">{{item.app_id}}</td>
                    <td id="room">{{item.room}}</td>
                    <td id="sub_status">{{item.sub_status}}</td>
                  
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
              .post("http://entropy7.nas.eckerd.edu:3000/mySubmissions/", {
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

