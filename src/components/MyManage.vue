<template>
  <div>
    <h4 class="q-pb-lg">개인 정보 관리</h4>
    <div class="row q-py-sm manage">
      <div class="col-xs-10 col-sm-5 col-md-4 text-h6">아이디</div>
      <div class="col-md-6"><input type="text" value="a1234"></div>
    </div>
    <div class="row q-py-sm manage">
      <div class="col-xs-10 col-sm-5 col-md-4 text-h6">현재 비밀번호</div>
      <div class="col-md-6"><input type="text"></div>
    </div>
    <div class="row q-py-sm manage">
      <div class="col-xs-10 col-sm-5 col-md-4 text-h6">새 비밀번호</div>
      <div class="col-md-6"><input type="text"></div>
    </div>
    <div class="row q-py-sm manage">
      <div class="col-xs-10 col-sm-5 col-md-4 text-h6">새 비밀번호 확인</div>
      <div class="col-md-6"><input type="text"></div>
    </div>
    <div class="row q-py-sm manage">
      <div class="col-xs-10 col-sm-5 col-md-4 text-h6">관심 카테고리</div>
      <div class="col-md-6">
        <q-checkbox size="sm" label="테크/가전" val="테크/가전" v-model="cate1"/>
        <q-checkbox size="sm" label="패션/잡화" val="패션/잡화" v-model="cate2"/>
        <q-checkbox size="sm" label="뷰티" val="뷰티" v-model="cate3"/>
        <q-checkbox size="sm" label="푸드" val="푸드" v-model="cate4"/>
        <q-checkbox size="sm" label="사무용품" val="사무용품" v-model="cate5"/>
        <q-checkbox size="sm" label="홈리빙" val="홈리빙" v-model="cate6"/>
      </div>
    </div>
    <div class="q-pt-md" style="text-align: center"><q-btn color="primary" label="회원정보수정"/></div>
  </div>
</template>

<style lang="sass">
.manage
  padding-left: 170px
  @media (max-width: $breakpoint-sm)
    padding-left: 100px
  @media (max-width: $breakpoint-xs)
    padding-left: 60px
</style>

<script>
export default {
  name: 'MyManage',
  data () {
    return {
      cate1: true,
      cate2: false,
      cate3: false,
      cate4: false,
      cate5: false,
      cate6: false
    }
  }
}
</script>
