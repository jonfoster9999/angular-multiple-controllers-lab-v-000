function StaffController() {
	this.name = "Bilbo"
	this.email = "bilbo@example.com"
	this.phone = "555-555-5555"
	var vm = this;

	this.changeName = function() {
		vm.name = "Jim";
	}
}

angular
	.module('app')
	.controller('StaffController', StaffController)