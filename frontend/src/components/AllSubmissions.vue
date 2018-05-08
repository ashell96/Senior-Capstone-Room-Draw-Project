**Updated All Submissions**
<template>
<span>
    <h1 class="display-4">Application Submissions</h1>


  <div id=  "table1">
     <table class="table">
       <thead>
                <tr>
                    <th scope="col">Requester E-mail</th>
                    <th scope="col">Room Request</th>
                    <th scope="col">Current Status</th>
                    <th scope="col">Response</th>

                    
                </tr>
            </thead>
            <tbody>
               <tr v-for="item in submissions" :key="item.submission_id">
                    <td id="student"> {{item.primary_student_email}}   </td> 
                    <td id="room">   {{item.room}}   </td> 
                    <td id="sub_status"> {{item.sub_status}} </td>
                    <button v-on:click="sendToServer();sendtoApps()" class="btn btn-info btn-md"> Accept</button>
                    &nbsp;
                    <button v-on:click="sendToServer();sendtoApps()" class="btn btn-info btn-md">Deny</button>

                    <br>
                  
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
        choice: "",     
    };
  },
  props: ["curUserEmail"],
  methods: {
    ViewAppSubmissions:function(item){
        if (choice == "omega"){
            this.$router.push({ name: 'ViewAllSubmissions', params: { requester_email: app.requester_email, submission_id: app.submission_id }})
        }

    }, 

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

