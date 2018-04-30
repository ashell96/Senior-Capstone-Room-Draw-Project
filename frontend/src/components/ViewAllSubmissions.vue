<template>
<span>
    <h1 class="display-4">Showing Submissions</h1>
    
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
