<template>
  <main>
    <div class="centerDiv">
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
button {
  font-weight: bold;
}

html{
  background-color: grey;
}

.centerDiv{
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 100vh; /* Full viewport height */
}
</style>