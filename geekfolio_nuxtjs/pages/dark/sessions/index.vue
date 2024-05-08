<template>
  <div>
    <CommonNavbar />
    <main class="main-bg">
      <PortfolioHeader :data="metadata" />
      <PortfolioClassicGrid2Col />
    </main>
    <StartupFooter :subBg="true" />
  </div>
</template>

<script setup>
 //import { title } from 'process';
 
const metadata = {
  title: "四大單元"
}

//= Page Head
useHead({
  titleTemplate: `%s - Portfolio Classic 2 Col`,
  bodyAttrs: {
    class: 'main-bg'
  }
})
</script>
