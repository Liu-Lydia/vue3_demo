<template>
  <div>
    <div>
      <h1>H1 58px 用於lg大標題</h1>
      <h2>H2 33px 用於sm大標題</h2>
      <h3>H3 24px 用於page標題</h3>
      <h6>Title 18px 用於項目標題</h6>
      <p>Dask Body1 18px 用於 lg & md 正文</p>
      <h6 class="markText">Body 2 14px 用於備註文字</h6>
      <br />
      <button class="hollowButton">按鈕</button>
      <button class="solidButton">按鈕</button><br />
    </div>
  </div>
</template>
<script>
export default {
  name: 'DemoIndex',
}
</script>

<style lang="scss" scoped>
.attractions {
  width: 32px;
  height: 32px;
  color: $main_color;
}
</style>
