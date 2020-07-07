<template>
	<div class="row my-5">
		<div class="col-md-4 offset-md-4">
			<div class="card">
				<div class="card-body">
					<h2 class="text-center my-2">Signup</h2>
					<div class="form-group">
						<input v-model="name" type="text" placeholder="Full Name" class="form-control">
					</div>

					<div class="form-group">
						<input v-model="email"	type="text" placeholder="Email" class="form-control">
					</div>

					<div class="form-group">
						<input v-model="password" type="password" placeholder="Password" class="form-control">
					</div>

					<div class="form-group text-center">
						<button @click="registerUser()" class="btn btn-success form-control">Signup</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	export default {
		data() {
			return {
				name: '',
				email: '',
				password: ''
			}
		},

		methods: {
			registerUser() {
				console.log(this.name, this.email, this.password)
			}
		}
	}
</script>
