<template>
	<scrollactive
		:offset="0"
		:class="{ scrolled: !view.atTop }"
		class="fixed w-full"
	>
		<div class="flex h-full float-right">
			<div v-for="item in items" :key="item">
				<a :href="'#' + item" class="nav_item scrollactive-item">
					{{ item }}
				</a>
			</div>
		</div>
	</scrollactive>
</template>

<script>
export default {
	data: () => ({
		view: { atTop: true },
		items: ['home', 'about', 'experience', 'projects', 'contact'],
	}),
	beforeMount() {
		window.addEventListener('scroll', this.handleScroll)
	},
	methods: {
		handleScroll() {
			console.log('triggered scroll')
			window.pageYOffset > 0
				? (this.view.atTop = false)
				: (this.view.atTop = true)
		},
	},
}
</script>

<style>
nav {
	@apply transition-shadow duration-500;
	height: 56px;
}

nav.scrolled {
	@apply shadow-lg;
}

.nav_item {
	@apply flex flex-initial h-full justify-center items-center text-center uppercase text-gray-600 font-medium tracking-widest px-3 transition;
	min-width: 90px;
	max-width: 360px;
}

.nav_item.is-active {
	@apply border-b border-blue-900;
}
</style>
