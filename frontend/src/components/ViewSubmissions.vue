<template>
<span>
    <h1 class="display-1">View Submissions</h1>
    <div id="editor">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Submission Id:</th>
                    <th scope="col">Primary Student E-mail:</th>
                    <th scope="col">Submission Date:</th>
                    <th scope="col">App ID:</th>
                    <th scope="col">Room:</th>
                    <th scope="col">Submission Status:</th>
                </tr>
            </thead>
            <tbody>
                
                <tr v-for="item in submissions" :key="item.submission_id">
                    <td id="sub_id">{{item.submission_id}}</td>
                    <td id="stu_email">{{item.primary_student_email}}</td>
                    <td id="sub_date">{{new Date(item.submission_date).toLocaleString()}}</td>
                    <td id="app_id">{{item.app_id}}</td>
                    <td id="room">{{item.room}}</td>
                    <td id="sub_status">{{item.sub_status}}</td>

                
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
  props: ["curUserEmail"],
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
