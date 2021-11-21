<template>
	<section id="submit" class="bg-bgblue py-36">
		<div class="flex flex-col items-center justify-center w-full mb-20 container">
			<h2>Ready to share your work?</h2>
			<p class="mt-2">Submit your work now and we will get back to you when your work is selected.</p>
		</div>
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
			<form accept-charset="UTF-8" method="POST" action="https://www.formbackend.com/f/aeca0b326c040d66">
				<div class="space-y-5">
					<div class="">
						<label for="fullname" class="block text-lg text-gray-900">Name</label>
						<div class="mt-2">
							<input type="text" name="fullname" id="fullname" class="block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 placeholder-gray-500" placeholder="Jane Doe" />
						</div>
					</div>

					<div>
						<label for="instaemail" class="block text-lg text-gray-700">Email</label>
						<div class="mt-2">
							<input type="email" name="instaemail" id="instaemail" class="border border-gray-300 rounded-md px-3 py-2 block w-full" placeholder="you@example.com" />
						</div>
					</div>

					<div>
						<label for="instaprofile" class="block text-lg text-gray-700">Instagram profile</label>
						<div class="mt-2">
							<input type="text" name="instaprofile" id="instaprofile" class="block w-full border border-gray-300  px-3 py-2 rounded-md" placeholder="@welikedaily" />
						</div>
					</div>

					<div>
						<label for="company-website" class="block text-lg text-gray-700">
							Project Link
						</label>
						<div class="mt-2 flex">
							<span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">
								https://
							</span>
							<input type="text" name="company-website" id="company-website" class="border border-gray-300 rounded-r-md flex-1 min-w-0 block w-full px-3 py-2" placeholder="www.instagram.com/p/CID-e9ag25F/" />
						</div>
					</div>

					<label class="mt-3 block text-lg text-gray-700">
						Select Channel
					</label>

					<div class="space-y-4">
						<div class="md:flex  md:space-x-5 space-y-3 md:space-y-0">
							<label @click="selectChannel(1)" class="md:w-1/2 relative block rounded-full border border-gray-300 bg-white text-black px-6 py-3 cursor-pointer sm:flex sm:justify-between opacity-50 transition duration-500" :class="{ 'opacity-100 bg-red': activeChannel == 1 }">
								<input type="radio" name="socialchannels" v-model="socialChannel" value="welikeuidesign" class="sr-only" aria-labelledby="welikeuidesign" aria-describedby="welikeuidesign" />
								<div class="flex items-center">
									<div class="text-sm">
										<p id="welikeuidesign" class="text-lg transition duration-500" :class="{ 'text-white': activeChannel == 1 }">
											@welikeuidesign
										</p>
									</div>
								</div>
							</label>

							<label @click="selectChannel(2)" class="md:w-1/2 relative block rounded-full border border-gray-300 bg-white px-6 py-3 cursor-pointer sm:flex sm:justify-between opacity-50 transition duration-500 " :class="{ 'opacity-100 bg-blue': activeChannel == 2 }">
								<input type="radio" name="socialchannels" v-model="socialChannel" value="welikewebgl" class="sr-only" aria-labelledby="welikewebgl" aria-describedby="welikewebgl" />
								<div class="flex items-center">
									<div class="text-sm">
										<p id="welikewebgl" class="text-lg transition duration-500" :class="{ 'text-white': activeChannel == 2 }">
											@welikewebgl
										</p>
									</div>
								</div>
							</label>
						</div>
						<div class="md:flex md:space-x-5 space-y-3 md:space-y-0">
							<label @click="selectChannel(3)" class="md:w-1/2  relative block rounded-full border border-gray-300 bg-white px-6 py-3 cursor-pointer sm:flex sm:justify-between opacity-50 transition duration-500" :class="{ 'opacity-100 bg-neutral-dark': activeChannel == 3 }">
								<input type="radio" name="socialchannels" v-model="socialChannel" value="welikemotiondesign" class="sr-only" aria-labelledby="welikemotiondesign" aria-describedby="welikemotiondesign" />
								<div class="flex items-center">
									<div class="text-sm">
										<p id="welikemotiondesign" class="text-lg transition duration-500" :class="{ 'text-white': activeChannel == 3 }">
											@welikemotiondesign
										</p>
									</div>
								</div>
							</label>

							<label @click="selectChannel(4)" class="md:w-1/2 relative block rounded-full border border-gray-300 bg-white px-6 py-3 cursor-pointer sm:flex sm:justify-between opacity-50 transition duration-500" :class="{ 'opacity-100 bg-purple': activeChannel == 4 }">
								<input type="radio" name="socialchannels" v-model="socialChannel" value="welikethreedy" class="sr-only" aria-labelledby="welikethreedy" aria-describedby="welikethreedy" />
								<div class="flex items-center">
									<div class="text-sm">
										<p id="welikethreedy" class="text-lg transition duration-500" :class="{ 'text-white': activeChannel == 4 }">
											@welikethreedy
										</p>
									</div>
								</div>
							</label>
						</div>
					</div>
				</div>

				<div class="btn pt-15 rounded-full cursor-pointer">
					<button type="submit" class="text-center">
						<span class="mr-3">Submit now</span>
					</button>
				</div>
			</form>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			activeChannel: 1,
			socialChannel: "welikeuidesign"
		}
	},
	methods: {
		selectChannel(val) {
			this.activeChannel = val
		}
	}
}
</script>

<style lang="postcss" scoped></style>
