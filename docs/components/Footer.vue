<template>
    <body>
      <main></main>
      <footer class="footer">
        <p>备案信息：[具体备案号]</p>
    </footer>
    </body>
    
</template>
<script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'FooterComponent',
  });
  </script>
  <style scoped>
    body {
        display: flex;
        flex-direction: column;
        min-height: 40vh;
      }
      main {
        flex: 1;
      }
      footer {
        margin-top: auto;
      }
    .footer {
      padding: 20px 0;
      background-color: #f8f9fa;
      text-align: center;
    }
</style>
  