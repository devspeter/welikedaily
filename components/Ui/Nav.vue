<template>
	<nav class="bg-white">
		<div class="container px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between h-24">
				<div class="flex w-full">
					<div class="-ml-2 mr-2 flex items-center md:hidden">
						<!-- Mobile menu button -->
						<button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false">
							<span class="sr-only">Open main menu</span>
							<svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
							<svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					<div class="flex-shrink-0 flex items-center w">
						<nuxt-link to="/">
							<img class="block h-8 w-auto" src="@/assets/images/logo.svg" alt="Logo" />
						</nuxt-link>
					</div>
					<div class="hidden md:flex justify-center md:space-x-8 w-full items-center">
						<a href="#" v-scroll-to="'#channels'" class="inline-flex items-center px-1 pt-1">Channels</a>
						<a href="#" v-scroll-to="'#benefits'" class="inline-flex items-center px-1 pt-1">Benefits</a>
						<a href="#" v-scroll-to="'#howto'" class="inline-flex items-center px-1 pt-1">How dose it work?</a>
						<a href="#" v-scroll-to="'#faq'" class="inline-flex items-center px-1 pt-1">FAQ</a>
					</div>
				</div>

				<div class="flex items-center">
					<div class="flex-shrink-0">
						<button v-scroll-to="'#submit'" type="button" class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red shadow-sm hover:bg-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red">
							<!-- Heroicon name: solid/plus -->
							<span class="font-semibold">Submit</span>
							<svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
								<path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped></style>
