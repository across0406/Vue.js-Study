<template>
    <div class="chapter-1">
        <h1>Section 04</h1>
        <p>
            You are running Vue in development mode.
        </p>
        <p>
            message: {{ this.ch1Sec4Message }}
        </p>
    </div>
</template>

<script>
    import Mixin from '@/mixins/Mixin.js';

    export default {
        name: 'Chapter1',

        mixins: [
            Mixin,
        ],

        data: function () {
            return {};
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="scoped">
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>