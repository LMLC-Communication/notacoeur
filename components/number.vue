<template>
	<span>
		{{ animatedNumber }}
	</span>
</template>

<script>
import gsap from "gsap";
export default {
	name: "Number",
	props: {
		value: { type: Number },
	},
	data() {
		return {
			number: null,
			tweenedNumber: 0,
		};
	},
	computed: {
		animatedNumber: function () {
			return this.tweenedNumber.toFixed(0);
		},
	},
	watch: {
		number: function (newValue) {
			gsap.to(this.$data, {
				duration: 10,
				ease: "strong.inOut",
				tweenedNumber: newValue,
			});
		},
	},
	mounted() {
		this.number = this.value;
	},
};
</script>