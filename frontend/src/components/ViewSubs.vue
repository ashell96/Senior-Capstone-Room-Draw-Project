<template>
<span>
    <h1 class="display-1">View Submissions</h1>
    	<p>Listed below are the roommates that you have requested, as well the current status of that request.</b></p>
    <div id="editor">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Requestee:</th>
                    <th scope="col">Status:</th>
                
                </tr>
            </thead>
            <tbody>
                
                <tr v-for="item in submissions" :key="item.submission_id">
                    <td id="sub">{{item.requestee_email}}</td>
                    <td id="stu">{{item.request_status}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    </span>
</template>

<script>
let axios = require("axios");
module.exports = {
  data: function() {
    return {
        submissions:"",     
    };
  },
  props: ["submission_id"],
  methods: {
  
    loadApplications: function() {
      let vm = this;
      if(this.$props.curUserEmail == "0"){
        setTimeout(function(){vm.loadApplications()},1000);
      } else {
        axios
              .get("http://entropy7.nas.eckerd.edu:3000/requestsBySubmissionID/" + this.$props.submission_id, {
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