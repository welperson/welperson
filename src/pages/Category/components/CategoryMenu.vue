<template>
  <div class="row justify-center item-start">
    <div class="col-sm-3 col-md-1 q-py-md" style="text-align: center" v-for="category in categories" :key="category.id">
      <div class="q-px-md"><q-btn outline round :icon= "category.icon" color="primary" size="xl" @click="$router.push('/category' + category.id )" /></div>
      <div class="text-primary">{{ category.name }}</div>
    </div>
  </div>
</template>

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
