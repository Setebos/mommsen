Inscriptions = new Meteor.Collection('inscriptions');

Meteor.methods({
	createInscription: function(inscription) {
		var newInscription = _.extend(_.pick(inscription, 'reference', 'city', 'description', 'dimensions', 'letterHeight', 'date', 'transcription', 'analysis', 'references', 'bookId'));

        var inscriptionId = Inscriptions.insert(newInscription);

        return inscriptionId;
	},

	updateInscription: function(inscription, id) {

		console.log(inscription.transcription);

		Inscriptions.update(id, {
			$set: {
				city: inscription.city,
				description: inscription.description,
				dimensions: inscription.dimensions,
				letterHeight: inscription.letterHeight,
				date: inscription.date,
				transcription: inscription.transcription,
				analysis: inscription.analysis,
				references: inscription.references,
			}
		});

		return id;
	}
})
