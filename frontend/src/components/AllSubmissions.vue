<template>
<span>
    <h1 class="display-4">Application Submissions</h1>
    <div id="editor">
  <select  class="form-control" id="sel1" v-model="choice">
  <option disabled value="">Please select housing</option>
  <option >Omega</option>
  <option >Nu</option>
  <option >Traditional (Kappa/Zeta/Beta/Epsilon/Delta/Alpha/Gamma/Iota)</option>
  <option >Themed (Kappa/Zeta/Beta/Epsilon/Delta/Alpha/Gamma/Iota)</option>
  <option >Sigma/West Lodge </option>
  <option >Oberg Suites</option>
  <option >Singles</option>
  <option >Off-Campus Housing/Alta Mar</option>
 </select>
 <br>
   <button class="btn btn-info btn-md" v-on:click="ViewAppSubmissions(choice)">Submit</button>

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
