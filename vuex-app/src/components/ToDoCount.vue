<template>
	<div>
		Total ToDO items {{ count }}
	</div>
</template>

<script>
	export default {
		computed: {
			count() {
				return this.$store.getters.todoCount
			}
		}
	}
</script>
