Inscriptions = new Meteor.Collection('inscriptions');

Meteor.methods({
	createInscription: function(inscription) {
		var newInscription = _.extend(_.pick(inscription, 'reference', 'city', 'description', 'dimensions', 'letterHeight', 'date', 'transcription', 'analysis', 'references', 'bookId'));

        var inscriptionId = Inscriptions.insert(newInscription);

        return inscriptionId;
	}
})
