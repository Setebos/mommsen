Meteor.publish('inscriptions', function() {
	return Inscriptions.find({}, {sort: {reference: 1}});
});