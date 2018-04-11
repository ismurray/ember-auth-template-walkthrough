import Component from '@ember/component'

export default Component.extend({
  actions: {
    editExample (example) {
      console.log('edit!', example.get('text'))
      this.sendAction('editExample', this.example)
    }
  }
})
