import Route from '@ember/routing/route'

export default Route.extend({
  model: function (params) {
    const id = +params.example_id
    console.log('id is ', id)
    return this.get('store').findRecord('example', id)
  },
  actions: {
    deleteExample (example) {
      console.log('delete!', example.get('text'))
      example.destroyRecord()
        .then(() => this.transitionTo('examples'))
        .catch(console.error)
    },
    patchExample (example) {
      console.log('edit!', example.get('user'))
      example.save()
    }
  }
})
