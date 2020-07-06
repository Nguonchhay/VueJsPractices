<template>
	<div class="container">
		<div class="row">
			<div class="col-md-7">
				<div class="row">
					<div class="col-md-6" v-for="product in products" :key="product.id">
						<product v-on:add-to-cart="addToCart(product)" :product="product" :isInCart="isInCart(product)"></product>
					</div>
				</div>
			</div>
			<div class="col-md-5 my-5">
				<cart v-on:pay="pay()" v-on:remove-from-cart="removeFromCart($event)" :items="cart"></cart>
			</div>
		</div>
	</div>

</template>

<script>

import products from '@/products.json'
import Product from '@/components/Product.vue'
import Cart from '@/components/Cart.vue'

export default {
  name: 'App',
  components: {
    Product,
    Cart
  },
  data() {
    return {
      products,
      cart: []
    }
  },
  methods: {
    addToCart(product) {
      this.cart.push(product)
    },

    removeFromCart(product) {
      this.cart = this.cart.filter(item => item.id !== product.id)
    },

    pay() {
      this.cart = [];
      alert('Pay successfully')
    },

    isInCart(product) {
      const item = this.cart.find(p => p.id === product.id)
      if (item) {
        return true
      }
      return false
    }
  }
}

</script>

<style scoped>
	body {
		background-color: #FBFBFB;
	}
</style>
