<template>
<span>
<h1>Off-Campus Alta Mar Application </h1>
<h5>For More Information Please Visit: www.eckerd.edu/housing</h5>
<h5>Please complete this application and submit it no later than 12 Noon Monday, March 20, 2018</h5>
<h5><u>Late Applications WILL NOT be accepted.</u></h5>
<p><i>These unites will be townhome stle, two bedroom, two and a half bath, four person suietes (2 students per 
    bedroom) with a full-kitchen, living room and study. Furniture, power, water, sewage, Internet, cable, and 
    any other utilities are included. Laundry facilities are on sit in the complex.</i></p>


<p>Please enter your e-mail: 
<input v-model="email" placeholder="Enter e-mail"> </p>

<p>Please check one:
<br> 
<input type="checkbox" v-model="renovated"> Renovated Apartment
<br>
<input type="checkbox" v-model="standard"> Standard Apartment
</p>

<template v-if="renovated">
  <template v-if="standard">
    <p> Choose one </p></template>
    <template v-else>
       <p> Please enter the e-mails of the other 3 roommates</p>
      <p> Roommate 2 <input v-model="email2" placeholder="Roommate #2 email"> </p>
     <p> Roommate 3 <input v-model="email3" placeholder="Roommate #3 email"></p>
    <p> Roommate 4 <input v-model="email4" placeholder="Roommate #4 email"></p>
    </template>
    </template>

<template v-if="standard">
  <template v-if="renovated">
    <p> </p></template>
    <template v-else>
       <p> Please enter the e-mails of the other 3 roommates</p>
    <p> Roommate 2 <input v-model="email2" placeholder="Roommate #2 email"> </p>
     <p> Roommate 3 <input v-model="email3" placeholder="Roommate #3 email"></p>
    <p> Roommate 4 <input v-model="email4" placeholder="Roommate #4 email"></p>
    </template>
    </template>



<button class="btn btn-info btn-sm">Submit</button>
</span>

</template>

<script>
module.exports = {
  data: function() {
    return { message: "Application", email:this.$props.curUserEmail, email2:"", email3:"", 
    email4:"", renovated:"", standard:""
    };
  },
  props : ["curUserEmail"],
  methods: {
    fun: function() {
      console.log("fun");
    }
  }
};
</script>
