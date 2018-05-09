<template>
<span>
    <br>
    <h2 >Currently Pending Roommate Requests:</h2>
    <div id="editor">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Request Id:</th>
                    <th scope="col">Requester E-mail:</th>
                    <th scope="col">Requestee E-mail:</th>
                    <th scope="col">Submission Id:</th>
                    <th scope="col">Request Status:</th>
                    
                </tr>
            </thead>
            <tbody>
                
                <tr v-for="item in requests" :key="item.request_id">
                    <td  v-if="item.requestee_email == curUserEmail" id="sub_id">{{item.request_id}}</td>
                    <td v-if="item.requestee_email == curUserEmail" id="stu_email">{{item.requester_email}}</td>
                    <td v-if="item.requestee_email == curUserEmail" id="sub_date">{{item.requestee_email}}</td>
                    <td v-if="item.requestee_email == curUserEmail" id="app_id">{{item.submission_id}}</td>
                    <td v-if="item.requestee_email == curUserEmail" id="room">{{item.request_status}}</td>
                    <button v-if="item.requestee_email == curUserEmail" v-on:click="ViewReq(item)" class="btn btn-info btn-md"> View Request </button>
                  
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
        requests:"",     
    };
  },
  props: ['curUserEmail'],
  methods: {
   
  //send requester_id to ViewRequests
  ViewReq:function(app){
    this.$router.push({ name: 'ViewRequests', 
    params: { requester_email: app.requester_email, request_id: app.request_id }});
  },
   
  updateApps: function() {
      let vm = this;
      axios
        .get("http://entropy7.nas.eckerd.edu:3000/requests/")
        .then(function(response) {
          vm.$set(vm, "requests", response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },

  created: function() {
    this.updateApps();
  
  }
};
</script>
