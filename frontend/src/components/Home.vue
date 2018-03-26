<template>
  <div>
      <h1>Welcome to the housing tool</h1>
      <p>
          In order to use this tool you must sign in.
          Click here to sign in.
      </p>
      <p>
          As a student you can:
          * <router-link to="/viewApps">See the open applications</router-link>
          
          * See all of the submissions you have made
          
      </p>
      <p>
          As housing staff you can:
          * Create new application periods
          * View all current applications
          * Aprove/deny applications
        
      </p>
      <Register v-if="this.$props.curUserEmail.length == 0" :firebase="this.$props.firebase"></Register>
      </div>
</template>

<script>
import Register from '@/components/Register';
export default {
	props: ['firebase', "curUserEmail"],
	components: {
		Register
	},
	mounted: function() {
		console.log("cur ", this.$props.curUserEmail.length);
	}
}
</script>