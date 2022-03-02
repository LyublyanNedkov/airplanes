<template>
    <div>
                    <div>
                      <nav class="nav">
                        <h2 class="nav__header">Products</h2>
                        <div class="nav__cart">
                          <button @click="showCart = !showCart">
                            <i class="fas fa-shopping-cart"></i>
                          </button>
                          <span class="total-quantity">{{ totalQuantity }}</span>
                          <div v-if="showCart" class="cart-dropdown">
                            <ul class="cart-dropdown__list">
                              <li
                                v-for="product in cart"
                                :key="product.id"
                              >
                                {{ product.name }} ({{ product.quantity }})
                              </li>
                            </ul>
                          </div>
                        </div>
                      </nav>

                      <section class="products">
                        <div v-for="product in products" :key="product.id" class="product">
                          <h3 class="product__header">{{ product.name }}</h3>
                          <img
                            src="https://via.placeholder.com/150"
                            :alt="product.name"
                            class="product__image"
                          >
                          <p class="product__description">{{ product.description }}</p>
                          <div class="cart">
                            <button
                              @click="updateCart(product, 'subtract')"
                              class="cart__button"
                            >
                              -
                            </button>
                            <span class="cart__quantity">{{ product.quantity }}</span>
                            <button
                              @click="updateCart(product, 'add')"
                              class="cart__button"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </section>                     
                    </div>


        <!-- <div class="container">
            <div class="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4">
                <div class="col">                   
                    <img class="pic" src="../assets/pic1.jpg" alt="pic">
                    <button class="btn btn-primary">ADD</button>
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic2.jpg" alt="pic">
                    <button class="btn btn-primary">ADD</button>
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic3.jpg" alt="pic">
                    <button class="btn btn-primary">ADD</button>
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic4.jpg" alt="pic">
                    <button class="btn btn-primary">ADD</button>
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic5.jpg" alt="pic">
                    <button class="btn btn-primary">ADD</button>
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic6.jpg" alt="pic">
                    <button class="btn btn-primary">ADD</button>
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic7.jpg" alt="pic">
                    <button class="btn btn-primary">ADD</button>
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic8.jpg" alt="pic">
                    <button class="btn btn-primary">ADD</button>
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic9.jpg" alt="pic">
                    <button class="btn btn-primary">ADD</button>
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic10.jpg" alt="pic">
                    <button class="btn btn-primary">ADD</button>
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic11.jpg" alt="pic">
                    <button class="btn btn-primary">ADD</button>
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic12.jpg" alt="pic">
                    <button class="btn btn-primary">ADD</button>
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic13.jpg" alt="pic">
                    <button class="btn btn-primary">ADD</button>
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic14.jpg" alt="pic">
                    <button class="btn btn-primary">ADD</button>
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic15.jpg" alt="pic">
                    <button class="btn btn-primary">ADD</button>
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic16.jpg" alt="pic">
                    <button class="btn btn-primary">ADD</button>
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic17.jpg" alt="pic">
                    <button class="btn btn-primary">ADD</button>
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic18.jpg" alt="pic">
                    <button class="btn btn-primary">ADD</button>
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic19.jpg" alt="pic">
                    <button class="btn btn-primary">ADD</button>
                </div>
                <div class="col">
                    <img class="pic" src="../assets/pic20.jpg" alt="pic">
                    <button class="btn btn-primary">ADD</button>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
    export default {
        name: 'Portfolio',
        data() {
    return {
      products: [
        {
          id: 1,
          name: 'Product 1',
          description: 'This is an incredibly awesome product',
          quantity: 0,
        },
        {
          id: 2,
          name: 'Product 2',
          description: 'This is an incredibly awesome product',
          quantity: 0,
        },
        {
          id: 3,
          name: 'Product 3',
          description: 'This is an incredibly awesome product',
          quantity: 0,
        }
      ],
      showCart: false
    };
  },
  computed: {
    cart() {
      return this.products.filter(product => product.quantity > 0);
    },
    totalQuantity() {
      return this.products.reduce(
        (total, product) => total + product.quantity,
        0
      );
    }
  },
    methods: {
      updateCart(product, updateType) {      
        for (let i = 0; i < this.products.length; i++) {
          if (this.products[i].id === product.id) {
            if (updateType === 'subtract') {
              if (this.products[i].quantity !== 0) {
                this.products[i].quantity--;
              }
            } else {
              this.products[i].quantity++;
            }
            
            break;
          }
        }
      }
    }
    }
</script>

<style scoped>  

</style>

 

    