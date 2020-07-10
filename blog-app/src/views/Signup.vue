<template>
	<div class="row my-5">
		<div class="col-md-4 offset-md-4">
			<div class="card">
				<div class="card-body">
					<h2 class="text-center my-2">Signup</h2>
					<div class="form-group">
						<input v-model="name" type="text" placeholder="Full Name" class="form-control">
						<div class="errors" v-if="errors.name">
							<span class="text-danger" :key="error" v-for="error in errors.name">{{ error }}</span>
						</div>
					</div>

					<div class="form-group">
						<input v-model="email" type="text" placeholder="Email" class="form-control">
						<div class="errors" v-if="errors.email">
							<span class="text-danger" :key="error" v-for="error in errors.email">{{ error }}</span>
						</div>
					</div>

					<div class="form-group">
						<input v-model="password" type="password" placeholder="Password" class="form-control">
						<div class="errors" v-if="errors.password">
							<span class="text-danger" :key="error" v-for="error in errors.password">{{ error }}</span>
						</div>
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
	import Axios from 'axios'

	export default {
		data() {
			return {
				name: '',
				email: '',
				password: '',
				errors: {}
			}
		},

		methods: {
			registerUser() {
				Axios.post('https://react-blog-api.bahdcasts.com/api/auth/register', {
					name: this.name,
					email: this.email,
					password: this.password
				}).then(res => {
					const userData = res.data.data
					localStorage.setItem('auth', JSON.stringify(userData))
					this.$root.auth = userData

					// Redirect user to home
					this.$router.push('/')
				}).catch(({ response }) => {
					this.errors = response.data
				})
			}
		}
	}
</script>
