<template>
	<section id="faq">
		<div class="container">
			<div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
				<div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
					<h2 class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
						Frequently asked questions
					</h2>
					<dl class="mt-6 space-y-6 divide-y divide-gray-200">
						<div as="div" v-for="(faq, index) in faqs" :key="index" class="pt-6 cursor-pointer" @click="setActive(index)">
							<dt class="text-lg">
								<div class="text-left w-full flex justify-between items-start text-gray-400">
									<span class="font-medium text-gray-900">
										{{ faq.question }}
									</span>
									<span class="ml-6 h-7 flex items-center">
										<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" :class="{ active: active === index }">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
										</svg>
									</span>
								</div>
							</dt>
							<div as="dd" class="mt-2 pr-12">
								<p class="text-base text-gray-500 faq" :class="{ active: active === index }">
									{{ faq.answer }}
								</p>
							</div>
						</div>
					</dl>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			active: 0,
			faqs: [
				{
					question: "What happens after I’ve submitted my work?",
					answer: "After you’ve successfully submitted your work we’ll review your submission. if we see fit on the sellected channel we will publish"
				},
				{
					question: "How should I deliver my project?",
					answer: "We appreciate it if projects get delivered via one of the following platforms: Instagram, Tik Tok, Awwwards, Behance or Dribbble. Of course links to portfolio websites are also welcome."
				},
				{
					question: "Which Instagram accounts do you manage?",
					answer: "We manage the following Instagram accounts: @welikeuidesign, @welikewebgl, @welikemotiondesign, @welikethreedy"
				}
			]
		}
	},
	methods: {
		setActive(value) {
			this.active = value
		}
	}
}
</script>

<style lang="postcss" scoped>
.arrow {
	transition: all 0.8s;
	&.active {
		transform: rotate(180deg);
	}
}

.faq {
	opacity: 0;
	max-height: 0px;
	overflow-y: hidden;
	transition: all 0.6s ease-out;
	&.active {
		opacity: 1;
		max-height: 1000px;
	}
}
</style>
