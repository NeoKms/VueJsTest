<template>
	<div class='PushNotifications'>
		<transition-group
				name="v-transition-animate"
				class="messages_list"
		>
			<div
					class="PushNotifications__content"
					v-for="message in messages"
					:key="message.id"
					:class="message.type"
			>
				<div class="content__text">
					<span>{{message.name}}</span>
				</div>
				<div class="content_buttons">
					<button v-if="rightButton.length">{{rightButton}}</button>
					<button v-if="leftButton.length">{{leftButton}}</button>
				</div>
			</div>
		</transition-group>
	</div>
</template>

<script>
	export default {
		name: "PushNotifications",
		props: {
			messages: {
				type: Array,
				default: () => {
					return []
				}
			},
			rightButton: {
				type: String,
				default: ''
			},
			leftButton: {
				type: String,
				default: ''
			},
			timeout: {
				type: Number,
				default: 3000
			}
		},
		data() {
			return {}
		},
		methods: {
			hideNotification() {
				let vm = this;
				if (this.messages.length) {
					setTimeout(function () {
						vm.messages.splice(vm.messages.length - 1, 1)
					}, vm.timeout)
				}
			}
		},
		watch: {
			messages() {
				this.hideNotification()
			}
		},
		mounted() {
			this.hideNotification()
		}
	}
</script>

<style lang="scss">
	.PushNotifications {
		position: fixed;
		top: 80px;
		right: 16px;
		z-index: 10;
		&__messages_list {
			display: flex;
			flex-direction: column-reverse;
		}
		&__content {
			padding: 16px;
			border-radius: 4px;
			color: #ffffff;
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 50px;
			margin-bottom: 16px;
			background: green;
			&.error {
				background: #ff2f38;
			}
			&.warning {
				background: #4dc88d;
			}
			&.success {
				background: #7ecf6d;
			}
		}
		.content {
			&__text {
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
		}
	}

	.v-transition-animate {
		&-enter {
			transform: translateX(120px);
			opacity: 0;
		}
		&-enter-active {
			transition: all .6s ease;
		}
		&-enter-to {
			opacity: 1;
		}

		&-leave {
			height: 50px;
			opacity: 1;
		}
		&-leave-active {
			transition: transform .6s ease, opacity .6s, height .6s .2s;
		}
		&-leave-to {
			height: 0;
			transform: translateX(120px);
			opacity: 0;
		}

		&-move {
			transition: transform .6s ease;
		}

	}
</style>
