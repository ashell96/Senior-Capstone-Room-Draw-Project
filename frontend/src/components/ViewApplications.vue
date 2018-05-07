<template>
<span>
    <h1 class="display-1">Application Choices</h1>
    <div id="editor">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Housing Type:</th>
                    <th scope="col">Open Time Period</th>
                    <th scope="col">Close Time Period</th>
                    <th scope="col">Applications/Submissions</th>
                </tr>
            </thead>
            <tbody>
                
                <tr v-for="item in applications" :key="item.app_id">
                    <td id="houses">{{item.app_name}}</td>
                    <td id="open">{{new Date(item.app_open).toLocaleString()}}</td>
                    <td id="close">{{new Date(item.app_close).toLocaleString()}}</td>
                    <td>
                        <button v-if="appIsOpen(item)" class="btn btn-info btn-sm" v-on:click="goToApplication(item)">Apply</button>
                        <button v-else  class="btn btn-info btn-sm">Closed</button>
                    </td>
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
      // This is just default data for testing
      applications: ""/*[
        {
          app_id: 1,
          app_name: "Squatting Fall 2010",
          app_open: new Date("2018-01-26T05:00:00.000Z").toLocaleString(),
          app_close: new Date("2018-11-29T05:00:00.000Z").toLocaleString(),
          app_type: "squatting",
          app_term: 20172
        },
      ]*/
    };
  },
  methods: {
    appIsOpen: function(app) {
      let now = new Date();
      let open_date = new Date(app.app_open);
      let close_date = new Date(app.app_close);
      return now > open_date && now < close_date;
    },
    goToApplication: function(app) {
      let capitalized = app.app_type.charAt(0).toUpperCase() + app.app_type.substr(1);
      console.log("sending app_id: " + app.app_id);
      this.$router.push({ name: capitalized, params: { app_id: app.app_id }})
    },
    updateApps: function() {
      let vm = this;
      axios
        .get("http://entropy7.nas.eckerd.edu:3000/applications/")
        .then(function(response) {
          vm.$set(vm, "applications", response.data);
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
