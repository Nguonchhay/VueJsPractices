<template>
	<div id="app">
		<Navbar v-on:signout-user="signOutUser($event)"></Navbar>
		<router-view></router-view>
	</div>
</template>

<script>
	import Navbar from '@/components/Navbar.vue'
	import firebase from 'firebase'

	export default {
		name: 'App',
		components: {
			Navbar
		},
		methods: {
			signOutUser() {
				firebase.auth().signOut().then(() => {
					localStorage.setItem('auth', '{}')

					this.signOutCallback()
				}).catch(error => {
					alert('Something went wrong while trying to sign out user!')
					console.log(error)
				});
			},
			signOutCallback() {
				if (this.$router.currentRoute.path.trim() !== '/') {
					// Redirect user to home
					this.$router.push('/')
				}
			}
		}
	}
</script>

<style>
	* {
		font-family: 'Poppins', sans-serif;
		border-radius: 0 !important;
	}

	body {
		background-color: #f5f3ef;
	}
</style>
