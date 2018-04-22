<template>
<span>
    <h1 class="display-4">Application Submissions</h1>
    <div id="editor">
  <select  class="form-control" id="sel1">
  <option value="omega" >Omega</option>
  <option value="nu">Nu</option>
  <option value="traditional">Traditional (Kappa/Zeta/Beta/Epsilon/Delta/Alpha/Gamma/Iota)</option>
  <option value="themed">Themed (Kappa/Zeta/Beta/Epsilon/Delta/Alpha/Gamma/Iota)</option>
  <option value="sigma">Sigma/West Lodge </option>
  <option value="oberg">Oberg Suites</option>
  <option value="singles">Singles</option>
  <option value="offCampus">Off-Campus Housing/Alta Mar</option>
 </select>
 <br>
   <button class="btn btn-info btn-md" v-on:click="ViewAppSubmissions(value)">Submit</button>

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
    ViewAppSubmissions:function(item){
        if (value == "omega"){
            this.$router.push({ name: 'Traditional'})
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
