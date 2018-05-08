<template>
<span>
<br>
<h1>Viewing Rommate Request </h1>
<p> You have received a roommate request from <b>{{requester_email}}</b></p>


                <div id="hi" v-for="item in submissions" :key="item.submission_id">
                    <td v-if="item.submission_id == submission_id" id="room">{{requester_email}} is requesting you as
                      a roommate</b>. The current status of this request is <b>{{item.sub_status}}</b>. In 
                        order to change this status, please respond to this request by clicking the <b>'Accept'</b> or <b>'Deny'</b> button.</td>  
               
                </div>
                 <br>
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
              .get("http://entropy7.nas.eckerd.edu:3000/submissions/", {
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

