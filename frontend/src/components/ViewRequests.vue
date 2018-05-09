<template>
	<div>
		<br>
		<h1>Viewing Rommate Request</h1>
		<p>You have received a roommate request from <b>{{request.requester_email}}</b></p>
		<div>
			{{request.requester_email}} is requesting you as a roommate. The current status of this request is <b>{{request.request_status}}</b>. In order to change this status, please respond to this request by clicking the <b>'Accept'</b> or <b>'Deny'</b> button.
		</div><br>
		<button class="btn btn-info btn-md" v-on:click="respondRequest(1)">Click to Accept</button><br>
		<br>
		<button class="btn btn-info btn-md" v-on:click="respondRequest(0)">Click to Deny</button>
	</div>
</template>

<script>
let axios = require("axios");
module.exports = {
  data: function() {
    return { 
    message: "",
    requester: this.$props.requester_email,
    //request_id: this.$props.request_id,
    submissions:"",
    request: ""
    };
  },
  props:['requester_email', "curUserEmail", "request_id"], 
  methods: {
  loadApplications: function() {
      let vm = this;
      if(this.$props.curUserEmail == "0"){
        setTimeout(function(){vm.loadApplications()},1000);
      } else {
        axios
              .get("http://entropy7.nas.eckerd.edu:3000/requests/" + this.$props.request_id, {
                myEmail: this.$props.curUserEmail
              })
              .then(function(response) {
                vm.$set(vm, "submissions", response.data);
                vm.$set(vm, "request", response.data[0]);
              })
              .catch(function(error) {
                console.log(error);
              });
      }
   
    },
    respondRequest: function(statusUpdate){
      let vm = this;
      let answer = statusUpdate ? "accepted" : "denied";
        axios
          .post("http://entropy7.nas.eckerd.edu:3000/updateRequest/", {
            requestID: vm.$props.request_id,
            status: answer
          })
          .then(function(response) {
            vm.$router.push({name:'RoommateRequests'});
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
  created: function() {
    this.loadApplications();
  }
};
</script>

