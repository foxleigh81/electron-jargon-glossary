<template>
  <main class="container">
    <SiteHeader />
    <JargonList />
  </main>
</template>

<script>
import SiteHeader from '@/components/SiteHeader'
import JargonList from '@/components/JargonList'

export default {
  components: {
    SiteHeader,
    JargonList
  }
}
</script>
