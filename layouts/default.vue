<template>
	<div id="App">
		<div class="top">
			<Navbar class="nav" />
			<Nuxt />
		</div>
		<Footer />
	</div>
</template>

<script>
import 'vue-slider-component/theme/default.css'
export default {
	transition: 'default',
}
</script>

<style lang="scss">
html {
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	color: var(--dark);
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
	max-width: 2560px;
	margin: 0 auto;
	scroll-behavior: smooth;
}
*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
}
#App {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100vh;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	font-family: serif;
}
h1 {
	color: var(--main);
	margin-top: 24px;
	margin-left: 16px;
	text-transform: uppercase;
	font-size: 44px;
	@media screen and (max-width: 1400px) {
		font-size: 36px;
	}
	@media screen and (max-width: 1000px) {
		font-size: 34px;
	}
	@media screen and (max-width: 720px) {
		font-size: 26px;
	}
}
.page-enter-active,
.page-leave-active {
	transition-property: opacity;
	transition-timing-function: ease-in-out;
	transition-duration: 200ms;
}
.page-leave-to {
	opacity: 0;
}
.page-enter {
	opacity: 0;
}
</style>
