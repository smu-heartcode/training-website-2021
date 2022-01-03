<template>
  <pre class="prettyprint"
    >{{ code }}
</pre
  >
</template>
<script>
export default {
  props: {
    code: String,
  },
};
</script>
<style scoped>
pre {
  border-radius: 15px;
  height:100%;
  vertical-align: middle;
  padding: 5px;
  transition: 0.3s;
}

pre:hover{
  transform:translateY(-5px);
  transform:scale(1.05);
  box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
}

</style>
