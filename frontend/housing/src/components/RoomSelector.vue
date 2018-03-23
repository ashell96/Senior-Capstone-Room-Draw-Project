<template>
  <div  id="rs">
      Complex:
      <select>
          <option v-for="complex in complexes" v-bind:key="complex">
              {{complex}}
          </option>
      </select>
      
      <!-- Eventually we want it to only show houses for the given complex -->
      House:
      <select>
          <option v-for="house in houses" v-bind:key="house">
              {{house}}
          </option>
      </select>

      <!-- Eventually we want it to only show rooms for the given complex -->
      Room:
      <select>
          <option v-for="num in roomNumbers" v-bind:key="num">
              {{num}}
          </option>
      </select>
      </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
        // This should ultimately be populated from the database
      complexes: ["omega", "nu", "Alpha", "Beta"],
      houses: ["prash", "berkley", "gandhi"],
      roomNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  }
};
</script>
