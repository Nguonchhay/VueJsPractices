<template>
	<div>
		<ul class="list-group">
			<li class="list-group-item" v-for="item in items" :key="item.id">
				{{ item.title }} - $ {{ Number(item.price).toFixed() }}

				<button @click="$emit('remove-from-cart', item)" class="btn badge badge-danger float-right">
					Remove from Cart
				</button>
			</li>
		</ul>

		<div class="card p-3 my-5">
			<h4 class="text-center">Total: $ {{ total }}</h4>
		</div>

		<button :disabled="items.length === 0" @click="$emit('pay')" class="btn btn-info form-control">
			Play now
		</button>
	</div>
</template>

<script>
export default {
  props: ['items'],

  computed: {
    total() {
      return this.items.reduce((acc, item) => acc + Number(item.price), 0)
    }
  }
}
</script>
