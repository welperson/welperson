<template>
  <div>
    <h4 class="q-pb-lg">개인 정보 관리</h4>
    <div class="row q-py-sm" style="padding-left: 170px">
      <div class="col-4 text-h6">아이디</div>
      <div class="col-6"><input type="text" value="a1234"></div>
    </div>
    <div class="row q-py-sm" style="padding-left: 170px">
      <div class="col-4 text-h6">현재 비밀번호</div>
      <div class="col-6"><input type="text"></div>
    </div>
    <div class="row q-py-sm" style="padding-left: 170px">
      <div class="col-4 text-h6">새 비밀번호</div>
      <div class="col-6"><input type="text"></div>
    </div>
    <div class="row q-py-sm" style="padding-left: 170px">
      <div class="col-4 text-h6">새 비밀번호 확인</div>
      <div class="col-6"><input type="text"></div>
    </div>
    <div class="row q-py-sm" style="padding-left: 170px">
      <div class="col-4 text-h6">관심 카테고리</div>
      <div class="col-6">
        <q-checkbox size="sm" label="뷰티" val="뷰티" v-model="cate1"/>
        <q-checkbox size="sm" label="가전" val="가전" v-model="cate2"/>
        <q-checkbox size="sm" label="여행" val="여행" v-model="cate3"/>
      </div>
    </div>
    <div class="q-pt-md" style="text-align: center"><q-btn color="primary" label="회원정보수정"/></div>
  </div>
</template>

<script>
export default {
  name: 'MyManage',
  data () {
    return {
      cate1: true,
      cate2: false,
      cate3: false
    }
  }
}
</script>
