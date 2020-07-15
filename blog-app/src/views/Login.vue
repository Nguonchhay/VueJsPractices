<template>
	<div class="row my-5">
		<div class="col-md-4 offset-md-4">
			<div class="card">
				<div class="card-body">
					<h2 class="text-center my-2">Login</h2>
					<div class="form-group">
						<input v-model="email" type="text" placeholder="Email" class="form-control">

						<div class="errors" v-if="errors.email">
							<small class="text-danger" :key="error" v-for="error in errors.email">{{ error}}</small>
						</div>
					</div>

					<div class="form-group">
						<input v-model="password" type="password" placeholder="Password" class="form-control">
						<div class="errors" v-if="errors.password">
							<small class="text-danger" :key="error" v-for="error in errors.password">{{ error}}</small>
						</div>
					</div>

					<div class="form-group text-center">
						<button @click="loginUser()" class="btn btn-success form-control">Login</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import firebase from 'firebase'

	export default {
		data() {
			return {
				email: '',
				password: '',
				errors: {}
			}
		},

		methods: {
			loginUser() {
				firebase
					.auth()
					.signInWithEmailAndPassword(this.email, this.password)
					.then(data => {
						console.log(data);
						// Redirect user to home
						//this.$router.push('/')
					})
					.catch(err => {
						this.error = err.message;
					});
			}
		}
	}
</script>
