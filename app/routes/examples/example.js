import Route from '@ember/routing/route'

export default Route.extend({
  model: function (params) {
    const id = +params.example_id
    console.log('id is ', id)
    return this.get('store').findRecord('example', id)
  }
})
