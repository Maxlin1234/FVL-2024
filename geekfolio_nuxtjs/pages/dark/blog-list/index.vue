<template>
  <div>
    <CommonNavbar />
    <main class="main-bg">
      <PortfolioHeader :data="metadata" />
      <InnerPagesBlogList />
    </main>
    <StartupFooter />
  </div>
</template>

<script setup>
// axios.get('https://unzip-clab-api.clab.org.tw/api/v1/schedules?limit=25')
// .then((res)=>{
//          console.log(res.data);
//          this.schedule = res.data;
//         })
//        //捕捉錯誤
//        .catch(err =>
//        {
//        console.log(err.response);
//         }) 
const metadata = {
  title: "最新消息"
}

// OUR BLOG
// Latest News.
//= Page Head

useHead({
  titleTemplate: `%s - Blog List`,
  bodyAttrs: {
    class: 'main-bg'
  }
})
</script>
