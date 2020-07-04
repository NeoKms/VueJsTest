<template>
  <div>
    <div class="nav-bar">
      <div class="cart">
        <p>Cart ({{cart.length}})</p>
      </div>
    </div>
    <Product v-for="(good, index) in goods"
             :key="index"
             :goodInfo="good"
             @add-to-cart="cartUpdate"></Product>
    <PushNotifications
            :messages="messages"
    />
  </div>

</template>

<script>
import Product from './components/Product.vue'
import PushNotifications from './components/PushNotifications.vue'

export default {
  name: 'App',
  components: {
    Product,PushNotifications
  },
  data() {
    return {
      goods: [
              {
                productId: 1,
                premium: true,
                product: 'Man socks',
                brand: 'Adidas',
                selectedVariant: 0,
                details: ['80% cotton','20% polyester','For man'],
                variants: [
                  {
                    variantId: 1,
                    variantColor: 'green',
                    variantImage: './assets/img/vmSocks-green.jpg',
                    variantQuantity: 100,
                  },
                  {
                    variantId: 2,
                    variantColor: 'blue',
                    variantImage: './assets/img/vmSocks-blue.jpg',
                    variantQuantity: 0,
                  },
                  {
                    variantId: 3,
                    variantColor: 'yellow',
                    variantImage: './assets/img/vmSocks-yellow.jpg',
                    variantQuantity: 4,
                  }
                ],
                reviews: [],
              },
              {
                productId: 2,
                premium: false,
                product: 'Women socks',
                brand: 'Puma',
                selectedVariant: 0,
                details: ['70% cotton','30% polyester','For women'],
                variants: [
                  {
                    variantId: 1,
                    variantColor: 'green',
                    variantImage: './assets/img/vmSocks-green.jpg',
                    variantQuantity: 100,
                  },
                  {
                    variantId: 2,
                    variantColor: 'blue',
                    variantImage: './assets/img/vmSocks-blue.jpg',
                    variantQuantity: 0,
                  },
                  {
                    variantId: 3,
                    variantColor: 'yellow',
                    variantImage: './assets/img/vmSocks-yellow.jpg',
                    variantQuantity: 4,
                  }
                ],
                reviews: [],
              }
              ],
      cart: [],
      messages: []
    }
  },
  methods: {
    cartUpdate(id) {
      this.cart.push(id)
      let timeStamp = Date.now().toLocaleString();
      this.messages.unshift(
              {name: 'Товар добавлен в корзину', type: 'success', id: timeStamp}
      // {name: 'Товар добавлен в корзину', icon: 'check_circle', id: timeStamp}
      )
    }
  }
}
</script>
<style scoped>
  body {
    font-family: tahoma;
    color:#282828;
    margin: 0px;
  }

  .nav-bar {
    background: linear-gradient(-90deg, #84CF6A, #16C0B0);
    height: 60px;
    margin-bottom: 15px;
  }

  .product {
    display: flex;
    flex-flow: wrap;
    padding: 1rem;
  }

  img {
    border: 1px solid #d8d8d8;
    width: 70%;
    margin: 40px;
    box-shadow: 0px .5px 1px #d8d8d8;
  }

  .product-image {
    width: 80%;
  }

  .product-image,
  .product-info {
    margin-top: 10px;
    width: 50%;
  }

  .color-box {
    width: 40px;
    height: 40px;
    margin-top: 5px;
  }

  .cart {
    margin-right: 25px;
    float: right;
    /*border: 1px solid #d8d8d8;*/
    padding: 5px 20px;
  }

  button {
    margin-top: 30px;
    border: none;
    background-color: #1E95EA;
    color: white;
    height: 40px;
    width: 100px;
    font-size: 14px;
  }

  .disabledButton {
    background-color: #d8d8d8;
  }

  .review-form {
    width: 400px;
    padding: 20px;
    margin: 40px;
    border: 1px solid #d8d8d8;
  }

  input {
    width: 100%;
    height: 25px;
    margin-bottom: 20px;
  }

  textarea {
    width: 100%;
    height: 60px;
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
