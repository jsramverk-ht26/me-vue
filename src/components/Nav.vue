<script setup>
</script>

<template>
  <nav>
    <ul>
      <li><router-link to="/">Me</router-link></li>
      <li><router-link to="/report/kmom01">kmom01</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
ul { list-style-type: none; }
li { display: inline; margin-right: 1em; }
li a { text-decoration: none; color: white; font-size: 1.4em; }
li a:hover { text-decoration: underline; }
</style>
