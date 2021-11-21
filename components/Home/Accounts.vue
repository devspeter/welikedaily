<template>
	<section id="channels" class="">
		<div class="container">
			<div class="text-center mb-10">
				<h2 class="text h3 text-neutral">Our Channels</h2>
			</div>
			<div class="w-full mt-20">
				<div v-swiper="swiperOption">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<a href="https://www.instagram.com/welikeuidesign/" class="w-1/4 text-center" target="_blank">
								<!-- <img class="w-24 h-auto" src="@/assets/images/welikeuidesign.svg" /> -->
								<p class="">@welikeuidesign</p>
							</a>
						</div>
						<div class="swiper-slide">
							<a href="https://www.instagram.com/welikewebgl/" class="w-1/4 text-center" target="_blank">
								<!-- <img class="w-24 h-auto" src="@/assets/images/welikewebgl.svg" /> -->
								<p class="">@welikewebgl</p>
							</a>
						</div>
						<div class="swiper-slide">
							<a href="https://www.instagram.com/welikemotiondesign/" class="w-1/4 text-center" target="_blank">
								<!-- <img class="w-24 h-auto" src="@/assets/images/welikemotiondesign.svg" /> -->
								<p class="">@welikemotiondesign</p>
							</a>
						</div>
						<div class="swiper-slide">
							<a href="https://www.instagram.com/welikethreedy/" class="w-1/4 text-center" target="_blank">
								<!-- <img class="w-24 h-auto" src="@/assets/images/welike3d.svg" /> -->
								<p class="">@welikethreedy</p>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			swiperOption: {
				slidesPerView: 4,
				loop: true,
				speed: 2000,
				pagination: {
					el: ".swiper-pagination"
				},
				autoplay: {
					delay: 1000
				},
				breakpoints: {
					// when window width is >= 320px
					320: {
						slidesPerView: 1,
						spaceBetween: 20
					},
					// when window width is >= 480px
					480: {
						slidesPerView: 3,
						spaceBetween: 30
					},
					// when window width is >= 640px
					640: {
						slidesPerView: 4,
						spaceBetween: 40
					}
				}
			}
		}
	}
}
</script>

<style lang="postcss" scoped></style>
