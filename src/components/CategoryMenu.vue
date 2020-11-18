<template>
  <div class="row justify-center item-start">
    <div class="col-sm-3 col-md-1 q-pb-md" style="text-align: center">
      <div class="q-px-md"><q-btn outline round icon="mdi-account-group-outline" color="primary" size="xl" @click="$router.push('/category')" /></div>
      <div class="text-primary">전체보기</div>
    </div>
    <div class="col-sm-3 col-md-1 q-pb-md" style="text-align: center">
      <div class="q-px-md"><q-btn outline round icon="mdi-television-classic" color="primary" size="xl" @click="$router.push('/category/tech')"/></div>
      <div class="text-primary">테크/가전</div>
    </div>
    <div class="col-sm-3 col-md-1 q-pb-md" style="text-align: center">
      <div class="q-px-md"><q-btn outline round icon="mdi-tshirt-crew-outline" color="primary" size="xl" @click="$router.push('/category/fashion')" /></div>
      <div class="text-primary">패션/잡화</div>
    </div>
    <div class="col-sm-3 col-md-1 q-pb-md" style="text-align: center">
      <div class="q-px-md"><q-btn outline round icon="mdi-lipstick" color="primary" size="xl" @click="$router.push('/category/beauty')" /></div>
      <div class="text-primary">뷰티</div>
    </div>
    <div class="col-sm-3 col-md-1 q-pb-md" style="text-align: center">
      <div class="q-px-md"><q-btn outline round icon="mdi-food-apple-outline" color="primary" size="xl" @click="$router.push('/category/food')" /></div>
      <div class="text-primary">푸드</div>
    </div>
    <div class="col-sm-3 col-md-1 q-pb-md" style="text-align: center">
      <div class="q-px-md"><q-btn outline round icon="mdi-book-open-variant" color="primary" size="xl" @click="$router.push('/category/office')" /></div>
      <div class="text-primary">사무용품</div>
    </div>
    <div class="col-sm-3 col-md-1 q-pb-md" style="text-align: center">
      <div class="q-px-md"><q-btn outline round icon="mdi-home" color="primary" size="xl" @click="$router.push('/category/home')" /></div>
      <div class="text-primary">홈리빙</div>
    </div>
  </div>
</template>
