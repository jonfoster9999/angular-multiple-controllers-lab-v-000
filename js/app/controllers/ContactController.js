function ContactController() {
	this.name = "Jonathan"
	this.email = "Jon@example.com"
	this.phone = "555-555-5555"
	var vm = this

	this.changeName = function () {
		vm.name = "Jiminez"
	}
}

angular
	.module('app')
	.controller('ContactController', ContactController)