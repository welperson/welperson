<template>
  <q-header class="bg-white text-secondary" >
    <q-toolbar>
      <q-space/>
      <q-btn flat color="secondary" label="김유니 님" icon-right="mdi-menu-down"/>
      <q-btn flat color="secondary" label="로그아웃"/>
    </q-toolbar>
    <q-toolbar>
      <img class="logo absolute-center" src="icons/logo.png" alt="logo" @click="$router.push('/')">
    </q-toolbar>
    <q-toolbar>
      <q-btn flat color="accent" label="카테고리" icon="mdi-menu" @click="$router.push('/category')"/>
      <q-btn flat color="accent" label="신상품" @click="$router.push('/new')"/>
      <q-btn flat color="accent" label="베스트" @click="$router.push('/best')"/>
      <q-space/>
      <q-btn flat color="primary" icon="mdi-magnify"/>
      <q-btn flat color="primary" icon="mdi-cart-outline"/>
      <q-btn flat color="primary" icon="mdi-account-outline"/>
    </q-toolbar>
  </q-header>
</template>
