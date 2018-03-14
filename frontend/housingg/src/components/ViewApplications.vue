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
                        <button v-if="appIsOpen(item)" class="btn btn-info btn-sm" v-on:click="goToApplication">Apply</button>
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
      applications: [
        {
          app_id: 1,
          app_name: "Squatting Fall 2010",
          app_open: new Date("2018-01-26T05:00:00.000Z").toLocaleString(),
          app_close: new Date("2018-11-29T05:00:00.000Z").toLocaleString(),
          app_type: "squatting",
          app_term: 20172
        },
        {
          app_id: 2,
          app_name: "Omega Fall 2018",
          app_open: new Date("2018-03-20T05:00:00.000Z").toLocaleString(),
          app_close: new Date("2018-11-29T05:00:00.000Z").toLocaleString(),
          app_type: "omega",
          app_term: 20172
        },

        {
          app_id: 3,
          app_name: "Traditional Fall 2018",
          app_open: new Date("2018-11-26T05:00:00.000Z").toLocaleString(),
          app_close: new Date("2018-11-29T05:00:00.000Z").toLocaleString(),
          app_type: "traditional",
          app_term: 20172
        },
        {
          app_id: 4,
          app_name: "Themed Fall 2018",
          app_open: new Date("2018-11-26T05:00:00.000Z").toLocaleString(),
          app_close: new Date("2018-11-29T05:00:00.000Z").toLocaleString(),
          app_type: "themed",
          app_term: 20172
        },
        {
          app_id: 5,
          app_name: "Off-Campus Fall 2018",
          app_open: new Date("2018-11-26T05:00:00.000Z").toLocaleString(),
          app_close: new Date("2018-11-29T05:00:00.000Z").toLocaleString(),
          app_type: "offcampus",
          app_term: 20172
        },
        {
          app_id: 6,
          app_name: "Nu Fall 2018",
          app_open: new Date("2018-11-26T05:00:00.000Z").toLocaleString(),
          app_close: new Date("2018-11-29T05:00:00.000Z").toLocaleString(),
          app_type: "nu",
          app_term: 20172
        }
      ]
    };
  },
  methods: {
    appIsOpen: function(app) {
      let now = new Date();
      let open_date = new Date(app.app_open);
      let close_date = new Date(app.app_close);
      return now > open_date && now < close_date;
    },
    goToApplication: function() {
      window.location = "applications.html";
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
