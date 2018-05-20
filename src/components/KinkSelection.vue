<template>
	<div>
		<p>
		<button v-if="kink.subKinks" v-on:click="toggleFold">
			<span v-if="unfolded && kink.subKinks">&#9660;</span>
			<span v-if="kink.subKinks && unfolded === false">&#9654;</span>
		</button>
			{{kink.id}}. {{kink.name}}
			<input type="checkbox" v-model="selected"/>
			{{kink.desc}}
		</p>
		<select v-model="preference">
			<option disabled value="">Preference</option>
			<option value="Y">Yes</option>
			<option value="M">Maybe</option>
			<option value="N">No</option>
			<option value="F">Favorite</option>
		</select>
		<select v-model="orientation">
			<option disabled value="">Orientation</option>
			<option value="B">Both</option>
			<option value="G">Give</option>
			<option value="R">Receive</option>
		</select>
		<input type="text" v-model="comment"/>
		<ul v-if="unfolded && kink.subKinks">
			<li v-for="subKink in kink.subKinks">
				<kink-selection :kink="subKink"></kink-selection>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
  name: 'kink-selection',
  props: ['kink'],
  data: ()=>({
	  unfolded: false,
  }),
  computed: {
	  selected: {
		  get () {return this.$store.getters.getKinkById(this.kink.id).selected},
		  set (value) {
			  let kink = this.$store.getters.getKinkById(this.kink.id)
			  kink.selected = value
			  this.$store.commit('updateKink',kink)
		  }
	  },
	  preference: {
		  get () {return this.$store.getters.getKinkById(this.kink.id).preference},
		  set (value) {
			  let kink = this.$store.getters.getKinkById(this.kink.id)
			  kink.preference = value
			  this.$store.commit('updateKink',kink)
		  }
	  },
	  orientation: {
		  get () {return this.$store.getters.getKinkById(this.kink.id).orientation},
		  set (value) {
			  let kink = this.$store.getters.getKinkById(this.kink.id)
			  kink.orientation = value
			  this.$store.commit('updateKink',kink)
		  }
	  },
	  comment: {
		  get () {return this.$store.getters.getKinkById(this.kink.id).comment},
		  set (value) {
			  let kink = this.$store.getters.getKinkById(this.kink.id)
			  kink.comment = value
			  this.$store.commit('updateKink',kink)
		  }
	  }
  },
	methods: {
		toggleFold(){
			this.unfolded = !this.unfolded
		}
	}
}
</script>
<style>
</style>
