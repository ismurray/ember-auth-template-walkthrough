import Component from '@ember/component'

export default Component.extend({
  didInsertElement () {
    this.set('newExample', {
      text: ''
    })
  },
  actions: {
    createExample () {
      console.log('new example is ', this.get('newExample'))
      this.sendAction('createExample', this.get('newExample'))
      this.set('newExample.text', '')
    }
  }
})
