import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return this.get('store').findAll('example')
  },
  actions: {
    addExample (examplePojo) {
      console.log('in the route alfdsh')
      const example = this.get('store').createRecord('example', examplePojo)
      return example.save()
    }
  }
})
