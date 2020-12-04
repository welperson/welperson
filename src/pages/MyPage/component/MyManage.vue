<template>
  <div>
    <h4 class="q-pb-lg">개인 정보 관리</h4>
    <div v-for="text in texts" :key="text.id" class="row q-py-sm manage">
      <h6 class="col-xs-10 col-sm-5 col-md-4 col-lg-4">{{ text.name }}</h6>
      <input class="col-md-6 col-lg-5" type="text">
    </div>
    <div class="row q-py-sm manage">
      <h6 class="col-xs-10 col-sm-5 col-md-4">관심 카테고리</h6>
      <div class="col-xs-19 col-sm-7 col-md-7 col-lg-6">
        <q-checkbox size="sm" label="테크/가전" v-model="cate1"/>
        <q-checkbox size="sm" label="패션/잡화" v-model="cate2"/>
        <q-checkbox size="sm" label="뷰티" v-model="cate3"/>
        <q-checkbox size="sm" label="푸드" v-model="cate4"/>
        <q-checkbox size="sm" label="사무용품" v-model="cate5"/>
        <q-checkbox size="sm" label="홈리빙" v-model="cate6"/>
      </div>
    </div>
    <div class="q-pt-md text-center"><q-btn color="primary" label="회원정보수정"/></div>
  </div>
</template>

<script>
export default {
  name: 'MyManage',
  data () {
    return {
      cate1: false,
      cate2: false,
      cate3: false,
      cate4: false,
      cate5: false,
      cate6: false,
      texts: [
        { id: 1, name: '아이디' },
        { id: 2, name: '현재 비밀번호' },
        { id: 3, name: '새 비밀번호' },
        { id: 4, name: '새 비밀번호 확인' }
      ]
    }
  }
}
</script>
