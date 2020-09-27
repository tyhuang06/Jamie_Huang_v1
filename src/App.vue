<template>
	<div id="app" class="h-full">
		<Navbar />
		<!-- <main class="flex-1 overflow-y-auto"> -->
		<Home />
		<About />
		<!-- </main> -->
	</div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'

export default {
	name: 'App',
	components: {
		Navbar,
		Home,
		About,
	},
}
</script>

<style>
.container {
	@apply mx-auto;
	padding-top: 60px;
}
</style>
