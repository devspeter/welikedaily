<template>
	<section id="channels">
		<div class="container">
			<div class="text-center mb-10">
				<h2>Share by</h2>
			</div>
			<div class="flex justify-between w-full max-w-6xl m-auto space-x-5">
				<a href="https://www.instagram.com/welikeuidesign/" class="w-1/5 welike-box-1 rounded-md" target="_blank">
					<div class="h-64 bg-red text-white rounded-md flex flex-col justify-center items-center">
						<img class="w-24 h-auto" src="@/assets/images/welikeuidesign.svg" />
						<h3>@welikeuidesign</h3>
					</div>
				</a>
				<a href="https://www.instagram.com/welikewebgl/" class="w-1/5 welike-box-2  rounded-md" target="_blank">
					<div class="h-64 bg-blue text-white rounded-md flex flex-col justify-center items-center">
						<img class="w-24 h-auto" src="@/assets/images/welikewebgl.svg" />
						<h3>@welikewebgl</h3>
					</div>
				</a>
				<a href="https://www.instagram.com/welikemotiondesign/" class="w-1/5 welike-box-3  rounded-md" target="_blank"
					><div class="h-64 bg-black text-white rounded-md flex flex-col justify-center items-center">
						<img class="w-24 h-auto" src="@/assets/images/welikemotiondesign.svg" />
						<h3>@welikemotiondesign</h3>
					</div>
				</a>
				<a href="https://www.instagram.com/welikethreedy/" class="w-1/5 welike-box-4  rounded-md" target="_blank">
					<div class="h-64 bg-purple text-white rounded-md flex flex-col justify-center items-center">
						<img class="w-24 h-auto" src="@/assets/images/welike3d.svg" />
						<h3>@welikethreedy</h3>
					</div>
				</a>
				<a href="https://www.instagram.com/welikeillustration/" class="w-1/5 welike-box-5 rounded-md" target="_blank"
					><div class="h-64 bg-orange text-white rounded-md flex flex-col justify-center items-center">
						<img class="w-24 h-auto" src="@/assets/images/welikeillustration.svg" />
						<h3>@welikeillustration</h3>
					</div></a
				>
			</div>
		</div>
	</section>
</template>

<script>
const axios = require("axios")
export default {
	mounted() {}
}
</script>

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
