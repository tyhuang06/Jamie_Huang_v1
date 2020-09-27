<template>
	<section id="home" class="container h-full">
		<div
			class="hero flex flex-col md:flex-row items-center ml-10 my-10 md:my-24"
		>
			<!--Left Col-->
			<div
				class="flex flex-col w-full lg:w-3/5 justify-center items-start pt-12 pb-24 px-6"
			>
				<p class="text-2xl text-sunshine-blue">Hi! This is</p>
				<p class="text-6xl text-dark-navy">{{ this.$name }}</p>
				<p class="text-4xl text-cadet-blue mb-4">
					I'm a
					<vue-typer
						:text="['Software Engineer', 'Web Developer']"
						:pre-type-delay="70"
						:type-delay="100"
						:pre-erase-delay="2000"
						:erase-delay="70"
						erase-style="backspace"
					></vue-typer>
				</p>
				<p class="leading-normal mb-4">
					Enter your super app's description here... The key is to
					find the right length. Don't want it to be too long, but
					then don't want it to be too short so that it looks weird
					between the title and button below.
				</p>
				<button
					class="bg-transparent hover:bg-black text-black hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-black hover:border-transparent"
				>
					Super Button
				</button>
			</div>
			<!--Right Col-->
			<div class="w-full lg:w-2/5 lg:py-6 text-center">
				<!--Add your product image here-->
				<svg
					class="fill-current text-black w-3/5"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
				>
					<path
						d="M17 6V5h-2V2H3v14h5v4h3.25H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6zm-5.75 14H3a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5.75zM11 8v8h6V8h-6zm3 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
					/>
				</svg>
			</div>
		</div>
	</section>
</template>

<script>
export default {}
</script>

<style>
.hero {
	height: 80%;
}

.vue-typer .custom.char.typed {
	@apply text-cadet-blue;
}
</style>
