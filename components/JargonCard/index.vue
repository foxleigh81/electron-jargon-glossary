<template>
  <section>
    <span class="card-tag">{{term.type}}</span>
      <h1>{{term.shortTerm}}
      <span class="long-term">{{term.longTerm}}
      </span>
      </h1>
      <div class="description"><p>{{term.definition}}</p></div>
  </section>
</template>

<script src="./scripts.js" />
<style lang="scss" scoped src="./styles.scss" />
