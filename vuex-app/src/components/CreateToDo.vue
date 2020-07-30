<template>
	<div>
		<input type="text" v-model="todo" @keyup.enter="saveToDo" placeholder="ToDo item" />
	</div>
</template>

<script>
	export default {
		data: () => ({
			todo: ''
		}),
		methods: {
			saveToDo() {
				this.$store.dispatch('addToDoAction', this.todo)
				this.todo = ''
			}
		}
	}
</script>

<style>
	input {
		font-size: 22px;
		border: 2px solid #000;
		padding: 15px;
	}
</style>
