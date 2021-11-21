<template>
	<div class="welike-stage">
		<div class="welike-stage-bg"></div>
		<div class="welike-stage-content container px-4 sm:px-6 lg:px-8 flex flex-col">
			<div class="flex justify-center h-full">
				<div class="lg:w-3/5 flex flex-col justify-center h-full">
					<div class="welike-stage-content-text">
						<h1 class="text-3xl lg:text-6xl">
							SHARE YOUR WORK<br />
							ON INSTAGRAM
						</h1>
						<p class="pt-4">Grow your follower base and reach potential creatives and clients.</p>
						<button v-scroll-to="'#submit'" type="button" class="mt-10 relative inline-flex items-center px-12 py-2 border border-transparent rounded-full text-white bg-black hover:shadow-xl transition duration-500 ease-in-out ">
							<span class="mr-3">Submit now</span>
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M14.75 8C14.75 9.79021 14.0388 11.5071 12.773 12.773C11.5071 14.0388 9.79021 14.75 8 14.75C6.20979 14.75 4.4929 14.0388 3.22703 12.773C1.96116 11.5071 1.25 9.79021 1.25 8C1.25 6.20979 1.96116 4.4929 3.22703 3.22703C4.4929 1.96116 6.20979 1.25 8 1.25C9.79021 1.25 11.5071 1.96116 12.773 3.22703C14.0388 4.4929 14.75 6.20979 14.75 8ZM16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8ZM7.47 5.53L9.19 7.25H4V8.75H9.19L7.47 10.47L8.53 11.53L11.53 8.53C11.6705 8.38937 11.7493 8.19875 11.7493 8C11.7493 7.80125 11.6705 7.61063 11.53 7.47L8.53 4.47L7.47 5.53Z"
									fill="white"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div class="lg:w-2/5 relative h-full">
					<div class="welike-stage-windows hidden lg:block">
						<div class="welike-stage-windows-1">
							<img src="@/assets/images/profile.png" alt="insta profile" />
						</div>
						<div class="welike-stage-windows-2">
							<img src="@/assets/images/question.png" alt="insta question" />
						</div>
						<div class="welike-stage-windows-3">
							<img src="@/assets/images/grow.png" alt="insta question" />
						</div>
						<div class="welike-stage-windows-4">
							<img src="@/assets/images/likes.png" alt="insta likes" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.welike-stage {
	@apply relative;
	height: 70vh;
	&-bg {
		@apply absolute z-0 w-full;
		background-image: url("./assets/images/stagebg.png");
		background-color: #cccccc;
		height: 50vh;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	&-content {
		@apply relative z-20;
		&-text {
			margin-top: 40vh;
		}
	}
	&-windows {
		@apply relative;
		perspective: 5000px;
		top: 30px;
		left: -30px;
		perspective: 7000px;
		perspective-origin: right bottom;
		transform-style: flat;
		&-1 {
			position: absolute;
			top: 15vh;
			left: 100px;
		}
		&-2 {
			position: absolute;
			z-index: 3;
			top: 40vh;
			left: -0px;
		}
		&-3 {
			position: absolute;
			top: 40vh;
			z-index: 2;
			right: -200px;
		}
		&-4 {
			position: absolute;
			top: 60vh;
			right: -37px;
			z-index: 4;
		}
	}
}
</style>
