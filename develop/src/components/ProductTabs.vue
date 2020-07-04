<template>
	<div class="tab-container">
		<span class="tab"
			:class="{ activeTab: selectedTab === tab }"
			v-for="(tab, index) in tabs" :key="index"
			@click="selectedTab = tab">{{ tab }}</span>
		<div v-show="selectedTab === 'Reviews'">
		<p v-show="!reviews.length">Нет отзывов</p>
		<ul>
			<li v-for="(review, index) in reviews" :key="index">
				<p>Reviewer name:{{review.name}}</p>
				<p>Rating: {{review.rating}}</p>
				<p>Review: {{review.review}}</p>
			</li>
		</ul>
		</div>
	<ProductReview v-show="selectedTab === 'Make a Review'" :productId="productId"></ProductReview>
	</div>
</template>

<script>
	import ProductReview from './ProductReview.vue'

	export default {
		name: "ProductTabs",
		components: {
			ProductReview
		},
		props: {
			reviews: {
				type: Array,
				required: true,
			},
			productId: {
				type: Number
			}
		},
		data() {
			return {
				tabs: ['Reviews','Make a Review'],
				selectedTab: 'Reviews'
			}
		},
		methods: {

		},
		mounted() {
			this.$eventBus.$on('review-submitted', productReview => {
				if (productReview.productId === this.productId) {
					this.selectedTab = 'Reviews';
				}
			})
		}
	}
</script>

<style scoped>
	.tab-container {
		margin-top: 20px;
	}
	.tab {
		margin-left: 20px;
		cursor: pointer;
	}

	.activeTab {
		color: #16C0B0;
		text-decoration: underline;
	}
</style>
