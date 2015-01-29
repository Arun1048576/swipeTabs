var swipeTabs = Backbone.View.extend({
	initialize : function() {
		this.parentWidth = this.$el.width();
		this.swipeElement = new Swipe(document.querySelector("#" + this.$el.attr('id') + " .swipe"), {
			callback : this.swipeCallBack.bind(this)
		});
	},
	events : {
		'click .swipe-tab-header' : 'tabHeaderClick'
	},
	tabHeaderClick : function(event) {
		var index = $(event.target).index('#'+this.$el.attr('id')+' .swipe-tab-header'); // Getting the index of current element
		this.swipeElement.slide(index, 500);				// This statement will call swipeCallBack function
	},
	swipeCallBack : function(index) {
		this.currentElement = $(this.$(".swipe-tab-header")[index]); 	// Make this better
		this.setTabActive();

		var scrollRequired = this.$('ul').scrollLeft() + this.currentElement.position().left - this.$el.width()/2 + this.currentElement.width()/2;
		this.$("ul").animate({scrollLeft:scrollRequired}, "fast");					
	},
	setTabActive : function() {
		this.$(".swipe-tab-header").removeClass('swipe-tab-active'); 			// Removing the active class from all the headers
		this.currentElement.addClass('swipe-tab-active');				// Setting the current header active
	}
});