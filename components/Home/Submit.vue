<template>
	<section id="submit">
		<div class="flex flex-col items-center justify-center w-full mb-20">
			<p>Zero Cost Sharing Plan!</p>
			<h2>Ready to share your work?</h2>
			<p class="mt-2">Submit your work now and we will get back to you when your work is selected</p>
		</div>
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
			<form>
				<div class="space-y-8">
					<div class="border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
						<label for="name" class="block text-xs font-medium text-gray-900">Name</label>
						<input type="text" name="name" id="name" class="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" placeholder="Jane Doe" />
					</div>

					<div>
						<label for="profile" class="block text-sm font-medium text-gray-700">Email</label>
						<div class="mt-1">
							<input type="text" name="email" id="email" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="you@example.com" />
						</div>
					</div>

					<div>
						<label for="email" class="block text-sm font-medium text-gray-700">Instagram profile</label>
						<div class="mt-1">
							<input type="text" name="profile" id="profile" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="@welikedaily" />
						</div>
					</div>

					<div>
						<label for="company-website" class="block text-sm font-medium text-gray-700">
							Project Link
						</label>
						<div class="mt-1 flex rounded-md shadow-sm">
							<span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
								http://
							</span>
							<input type="text" name="company-website" id="company-website" class="border-gray-300 rounded-md flex-1 min-w-0 block w-full px-3 py-2  rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="www.example.com" />
						</div>
					</div>
				</div>
			</form>
		</div>
	</section>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped></style>
