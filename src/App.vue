<template>
<div>
	<kink-line></kink-line>
	<h1>kinks</h1>
	<div v-for="category in kinks">
		<h2>{{category.code}}. {{category.title}}</h2>
		<ul>
			<li v-for="kink in category.kinks">
				<kink-selection :kink="kink"></kink-selection>
			</li>
		</ul>
	</div>
	<kink-line></kink-line>
</div>
</template>

<script>
import KinkSelection from './components/KinkSelection.vue'
import KinkLine from './components/KinkLine.vue'
import Kinks from './assets/kinks'
import {mapState} from 'vuex'

export default {
  data: ()=>({
    kinks: Kinks
  }),
  components: {
    KinkSelection,
    KinkLine
  }
}
</script>

<style>
</style>
