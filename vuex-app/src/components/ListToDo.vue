<template>
	<table class="table table-bordered">
		<tr v-for="item in todos" :key="item.id">
			<td>{{ item.title }}</td>
			<td>
				<button>Edit</button>
				<button @click="deleteToDo(item.id)">Delete</button>
			</td>
		</tr>
	</table>
</template>

<script>
	export default {
		mounted() {
			this.$store.dispatch('todos/listToDoAction')
		},
		computed: {
			todos() {
				return this.$store.state.todos.todos
			}
		},
		methods: {
			deleteToDo(id) {
				if (confirm('Are you sure?')) {
					this.$store.dispatch('todos/deleteToDoAction', id)
				}
			}
		}
	}
</script>
