var vm = new Vue({
    el:'#example',
    data: {
        message: 'BONJOUR SAINTILIEN Wilson'
    }, 
    computed: {
        reversedMessage: function(){
            return this.message.split('').reverse().join()
        }
    },
    computed: {
        now: function () {
            return Date.now()
        }
    }


})