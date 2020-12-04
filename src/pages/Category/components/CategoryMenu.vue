<template>
  <div class="row justify-center item-start">
    <div class="col-sm-3 col-md-1 q-py-md category__menu" v-for="category in categories" :key="category.id">
      <router-link :to="'/category' + category.id" class="category__link">
        <q-btn outline round :icon= "category.icon" color="primary" size="xl" />
      </router-link>
      <div class="text-primary">{{ category.name }}</div>
    </div>
  </div>
</template>

<style lang="sass">
.category__menu
  text-align: center

.category__link
  text-decoration: none
</style>

<script>
export default {
  name: 'CategoryMenu',
  data () {
    return {
      categories: [
        { name: '전체보기', icon: 'mdi-account-group-outline', id: '' },
        { name: '테크/가전', icon: 'mdi-television-classic', id: '/tech' },
        { name: '패션/잡화', icon: 'mdi-tshirt-crew-outline', id: '/fashion' },
        { name: '뷰티', icon: 'mdi-lipstick', id: '/beauty' },
        { name: '푸드', icon: 'mdi-food-apple-outline', id: '/food' },
        { name: '사무용품', icon: 'mdi-book-open-variant', id: '/office' },
        { name: '홈리빙', icon: 'mdi-home', id: '/home' }
      ]
    }
  }
}
</script>
