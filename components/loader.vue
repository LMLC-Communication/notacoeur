<template>
	<div class="loader"></div>
</template>

<script>
export default {
	name: "Loader",
};
</script>

<style lang="scss" scoped>
.loader {
	margin: 30px auto;
	margin-top: 40px;
	border: 16px solid #fff0f1;
	border-top: 16px solid var(--main);
	border-radius: 50%;
	width: 120px;
	height: 120px;
	animation: spin 1.5s ease-in-out infinite;
}
@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>