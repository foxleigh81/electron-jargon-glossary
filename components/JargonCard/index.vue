<template>
  <section :class="'type-' + term.type">
    <span class="card-tag">{{term.type}}</span>
      <h1>
        <span v-if="term.shortTerm">{{term.shortTerm}}&nbsp;</span>
        <span v-if="term.shortTerm" class="long-term">{{term.longTerm}}</span>
        <span v-else>{{term.longTerm}}</span>
      </h1>
      <div v-if="term.definition" class="description"><p>{{term.definition}}</p></div>
      <div v-else class="description"><p>No definition exists for this term</p></div>
  </section>
</template>

<script src="./scripts.js" />
<style lang="scss" scoped src="./styles.scss" />
