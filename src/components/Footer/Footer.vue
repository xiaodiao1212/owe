<template>
    <div class="footer">
        <p>© 2018 OWE Design Studio</p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<style lang="less" scoped>
.footer {
    position: absolute;
	bottom: 0;
	left: 50%;
	-webkit-transform: translate(-50%, 0);
	transform: translate(-50%, 0);
    height: 17px;
    color: #000000;
    font-size: 12px;
    opacity: 0.4;
    padding-bottom: 10px;
}
</style>
