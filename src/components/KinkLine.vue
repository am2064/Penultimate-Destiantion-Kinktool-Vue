<template>
	<div>
		<h1>Copy this into Penultimate Destination</h1>
		<pre>{{kinkString}}</pre>
	</div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
	computed: {
		kinkString (state) {
			let selectedKinks = this.$store.getters.getSelectedKinks
			if(selectedKinks.length > 0){
				let _kinkString = '+kinks/addcom '
				let _firstKink = selectedKinks[0];
				_kinkString += `${_firstKink.id}:${_firstKink.preference}${_firstKink.orientation}=${_firstKink.comment}`
				for(let i=1;i<selectedKinks.length;i++){
					let _kink = selectedKinks[i]
					_kinkString += `|${_kink.id}:${_kink.preference}${_kink.orientation}=${_kink.comment}`
				}
				return _kinkString
			}else{
				return 'You need to add some kinks. Select some from below.'
			}
		}
	}
}
</script>
<style>
</style>
