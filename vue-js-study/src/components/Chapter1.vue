<template>
    <div class="chapter-1">
        <h1>Section 04</h1>
        <p>
            You are running Vue in development mode.
        </p>
        <h1>Section 05</h1>
        <p>
            message: {{ ch1Sec4Message }}
        </p>
        <ol>
            <li v-for="{item, key} in ch1Sec5List" 
                v-bind:item="item" 
                v-bind:key="key">
                {{ item }}
            </li>
        </ol>
        <button v-on:click="buttonClick">
            Hey, click me!
        </button>
        <!--
            It is not yet to synchronize data and input form.
        -->
        <p>
            {{ ch1Sec5Message }}
        </p>
        <input v-model="ch1Sec5Message">
        <p v-if="ch1Sec5Show">
            It is showed!
        </p>
        <button v-on:click="ch1Sec5TransitionShow = !ch1Sec5TransitionShow">
            Transition Show 변경!
        </button>
        <transition>
            <p v-if="ch1Sec5TransitionShow">
                It is showed!
            </p>
        </transition>
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
        },

        methods: {
            buttonClick: function(event) {
                alert(event.target);
            },
        },
        
        // 'created' is triggered after the instance is genereated and initialized.
        // When it is used, cannot access to DOM with $el, getElementById(), etc.
        created: function() {
            console.log('Chapter 1 component is created!');
        },

        // 'mounted' is triggered after DOM construct is completed.
        mounted: function() {
            console.log('Chapter 1 component is mounted!');
        },
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
    .v-enter-active, .v-leave-active {
        transition: opacity 1s;
    }
    .v-enter, .v-leave-to {
        opacity: 0;
    }
</style>