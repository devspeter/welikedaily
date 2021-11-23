<template>
	<div class="welike_owners bg-bgblue py-36">
		<div class="container">
			<div class="md:flex flex-col justify-center items-center">
				<h2 class="text-center">All designs © of their respective owners</h2>
				<p class="mt-8 text-center">
					We at Welikedaily think it's important that it's about you, the designer.<br />
					The appreciation must go to you, not to us.
				</p>
			</div>
			<div class="mt-20 flex">
				<div class="md:w-1/3 relative">
					<div class="hidden  bg-neutral-purple w-24 h-24 md:flex justify-center items-center rounded-full welike_owners-people-1">
						<img class="w-24 h-24" src="@/assets/images/female1.png" alt="instapost" />
					</div>
					<div class="hidden bg-neutral-yellow w-16 h-16 md:flex justify-center items-center rounded-full welike_owners-people-2">
						<img class="w-16 h-16" src="@/assets/images/male1.png" alt="instapost" />
					</div>
					<div class="hidden bg-neutral-pink w-20 h-20 md:flex justify-center items-center rounded-full welike_owners-people-3">
						<img class="w-20 h-20" src="@/assets/images/female2.png" alt="instapost" />
					</div>
				</div>
				<div class="md:w-1/3 w-full flex items-center justify-center">
					<img class="" src="@/assets/images/instagrampost.png" alt="instapost" />
				</div>
				<div class="md:w-1/3 relative">
					<div class="hidden bg-neutral-pink w-20 h-20 md:flex justify-center items-center rounded-full welike_owners-people-4">
						<img class="w-20 h-20" src="@/assets/images/male3.png" alt="instapost" />
					</div>
					<div class="hidden bg-blue w-16 h-16 md:flex justify-center items-center rounded-full welike_owners-people-5">
						<img class="w-16 h-16" src="@/assets/images/male2.png" alt="instapost" />
					</div>
					<div class="hidden bg-black w-24 h-24 md:flex justify-center items-center rounded-full welike_owners-people-6">
						<img class="w-24 h-24" src="@/assets/images/female3.png" alt="instapost" />
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
.welike_owners {
	&-people {
		&-1 {
			@apply absolute right-0;
		}
		&-2 {
			@apply absolute right-32;
			top: 45%;
		}
		&-3 {
			@apply absolute right-5 bottom-0;
		}
		&-4 {
			@apply absolute left-0;
		}
		&-5 {
			@apply absolute left-32;
			top: 35%;
		}
		&-6 {
			@apply absolute left-5 bottom-0;
		}
	}
}
</style>
