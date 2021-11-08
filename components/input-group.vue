<template>
	<div class="cont">
		<label v-for="(vale, i) in vals" :key="i" :for="vale.label">
			<!-- :name="vals[0].label" -->
			<input
				:id="vale.label"
				:type="type"
				:value="vale.value"
				v-model="checked"
				@change="onChange"
			/>
			<div>{{ vale.label }}</div>
		</label>
	</div>
</template>

<script>
export default {
	props: ['value', 'vals', 'refresh', 'type'],
	data() {
		return {
			checkedProxy: false,
		}
	},
	computed: {
		checked: {
			get() {
				return this.value
			},
			set(val) {
				this.checkedProxy = val
			},
		},
	},
	methods: {
		onChange: function () {
			this.$emit('input', this.checkedProxy)
			this.refresh()
		},
	},
}
</script>

<style lang="scss" scoped>
.cont {
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	img {
		position: relative;
		width: 20px;
		margin-left: 10px;
		object-fit: contain;
	}
	label {
		&:first-child div {
			border-radius: 10px 0 0 10px;
		}
		&:last-child div {
			border-radius: 0 10px 10px 0;
		}
		input[type='checkbox'],
		input[type='radio'] {
			position: absolute;
			left: -9999px;
		}
		input:checked + div {
			color: #fff;
			background-color: var(--main);
		}
		div {
			cursor: pointer;
			margin: 2px;
			padding: 0 10px;
			height: 50px;
			display: flex;
			align-items: center;
			// width: 160px;
			text-align: center;
			transition: background-color 200ms, color 200ms, box-shadow 200ms;
			box-shadow: -1px 1px 4px rgba(0, 0, 0, 0.2);
			&:hover {
				box-shadow: -1px 1px 4px rgba(0, 0, 0, 0.4);
			}
			@media screen and (max-width: 720px) {
				font-size: 10px;
				height: 40px;
				padding: 0 6px;
				margin: 2px;
			}
		}
	}
	// @media screen and (max-width: 1400px) {
	// width:  calc(33% - 20px);
	// }
	// @media screen and (max-width: 1000px) {
	// width: calc(50% - 20px);
	// }
	// @media screen and (max-width: 720px) {
	// width: calc(100% - 20px);
	// }
}
</style>