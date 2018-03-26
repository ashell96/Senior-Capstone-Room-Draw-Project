<template>
<span>
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
                   <td id="sub_id">{{item.request_id}}</td>
                    <td id="stu_email">{{item.requester_email}}</td>
                    <td id="sub_date">{{item.requestee_email}}</td>
                    <td id="app_id">{{item.submission_id}}</td>
                    <td id="room">{{item.request_status}}</td>
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
      // This is just default data for testing
     
    };
  },
  methods: {
    
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
    }
  },
  created: function() {
    this.updateApps();
  }
};
</script>
