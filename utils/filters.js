import Vue from 'vue'

Vue.filter('filter2dot', function (arg){
  if(!Number(arg)) return '0.00'
  return (Number(arg)/100).toFixed(2)
}) 