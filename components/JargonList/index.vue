<template>
  <ul>
    <li v-if="loading">Loading...</li>
    <li v-for="term in allTerms" :key="term.id">
      <JargonCard :term="term"/>
    </li>
  </ul>
</template>

<script src="./scripts.js" />
<style lang="scss" scoped src="./styles.scss" />

