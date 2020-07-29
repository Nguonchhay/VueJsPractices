<template>
	<ul>
		<li v-for="(item, index) in todos" :key="index">{{ item }}</li>
	</ul>
</template>

<script>
	export default {
		mounted() {
			this.$store.dispatch('listToDoAction')
		},
		computed: {
			todos() {
				return this.$store.state.todos
			}
		}
	}
</script>
