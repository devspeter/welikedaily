<template>
	<section id="channels" class="bg-gray-50">
		<div class="container">
			<div class="text-center mb-10">
				<h2>Share by</h2>
			</div>
			<div class="flex justify-between w-full max-w-6xl m-auto space-x-5">
				<a href="https://www.instagram.com/welikeuidesign/" class="w-1/5 welike-box-1 rounded-md" target="_blank">
					<div class="h-64 bg-red text-white rounded-md flex flex-col justify-center items-center">
						<img class="w-24 h-auto" src="@/assets/images/welikeuidesign.svg" />
						<p class="h4">@welikeuidesign</p>
					</div>
				</a>
				<a href="https://www.instagram.com/welikewebgl/" class="w-1/5 welike-box-2  rounded-md" target="_blank">
					<div class="h-64 bg-blue text-white rounded-md flex flex-col justify-center items-center">
						<img class="w-24 h-auto" src="@/assets/images/welikewebgl.svg" />
						<p class="h4">@welikewebgl</p>
					</div>
				</a>
				<a href="https://www.instagram.com/welikemotiondesign/" class="w-1/5 welike-box-3  rounded-md" target="_blank"
					><div class="h-64 bg-black text-white rounded-md flex flex-col justify-center items-center">
						<img class="w-24 h-auto" src="@/assets/images/welikemotiondesign.svg" />
						<p class="h4">@welikemotiondesign</p>
					</div>
				</a>
				<a href="https://www.instagram.com/welikethreedy/" class="w-1/5 welike-box-4  rounded-md" target="_blank">
					<div class="h-64 bg-purple text-white rounded-md flex flex-col justify-center items-center">
						<img class="w-24 h-auto" src="@/assets/images/welike3d.svg" />
						<p class="h4">@welikethreedy</p>
					</div>
				</a>
				<a href="https://www.instagram.com/welikeillustration/" class="w-1/5 welike-box-5 rounded-md" target="_blank"
					><div class="h-64 bg-orange text-white rounded-md flex flex-col justify-center items-center">
						<img class="w-24 h-auto" src="@/assets/images/welikeillustration.svg" />
						<p class="h4">@welikeillustration</p>
					</div></a
				>
			</div>
			<div class="flex justify-center">
				<div class="btn">
					<a class="flex" v-scroll-to="'#submit'" href="#">
						<svg width="24" class="mr-2" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path id="svg-icon" d="M13 7H21M21 7V15M21 7L13 15L9 11L3 17" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
						<span> Submit now</span>
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="postcss" scoped>
.welike-box {
	&-1 {
		transition: all 0.2s ease-in-out;
		&:hover {
			transform: translateY(-4px);
			box-shadow: 0 10px 50px rgba(255, 113, 113, 0.3);
		}
	}
	&-2 {
		transition: all 0.2s ease-in-out;
		&:hover {
			transform: translateY(-4px);
			box-shadow: 0 10px 50px rgba(159, 216, 223, 0.3);
		}
	}
	&-3 {
		transition: all 0.2s ease-in-out;
		&:hover {
			transform: translateY(-4px);
			box-shadow: 0 10px 50px rgba(19, 19, 19, 0.3);
		}
	}
	&-4 {
		transition: all 0.2s ease-in-out;
		&:hover {
			transform: translateY(-4px);
			box-shadow: 0 10px 50px rgba(166, 133, 226, 0.3);
		}
	}
	&-5 {
		transition: all 0.2s ease-in-out;
		&:hover {
			transform: translateY(-4px);
			box-shadow: 0 10px 50px rgba(251, 198, 164, 0.3);
		}
	}
}
</style>
