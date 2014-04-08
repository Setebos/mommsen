Meteor.publish('inscriptions', function() {
	return Inscriptions.find({}, {sort: {reference: 1}});
});

Meteor.publish('oneInscription', function(id) {
    return Inscriptions.find(id);
});

Meteor.publish('inscriptionsByBook', function(id) {
    return Inscriptions.find({bookId: id});
});

Meteor.publish('books', function() {
    return Books.find();
});

Meteor.publish('oneBook', function(id) {
    return Books.find(id);
});