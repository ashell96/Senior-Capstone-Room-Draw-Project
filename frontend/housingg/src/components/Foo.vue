<template>
<h1>Foo {{ message }} </h1>
</template>

<script>
module.exports = {
  data: function() {
    return { message: "bar" };
  },
  methods: {
    fun: function() {
      console.log("fun");
    }
  }
};
</script>
