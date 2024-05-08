<template>
  <div>
    <CommonNavbar />
    <main class="main-bg">
      <PortfolioHeader :data="metadata" />
      <PortfolioClassicGrid2Colyear />
    </main>
    <StartupFooter :subBg="true" />
  </div>
</template>

<script setup>
 //import { title } from 'process';
const metadata = {
  title: "歷年作品"
}

//= Page Head
useHead({
  titleTemplate: `%s - Portfolio Classic 2 Col`,
  bodyAttrs: {
    class: 'main-bg'
  }
})

// onMounted(() => {
//  axios.get('http://localhost:3000/posts').then((data) => {
// console.log(data);
//    })
// });
</script>
