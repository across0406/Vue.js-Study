export default {
    name: 'logger',
    methods: {
        error: function(message){
            console.log('error: ' + String(message));
        },
    },
}