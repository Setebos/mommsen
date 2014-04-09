Template.newInscription.helpers({
    books: function() {
        return Books.find();
    }
});

Template.newInscription.events({
    'submit form': function(e, template) {
        e.preventDefault();

        var $reference1 = $(e.target).find('#reference-1');
        var $reference2 = $(e.target).find('#reference-2');
        var $city = $(e.target).find('#city');
        var $description = $(e.target).find('#description');
        var $dimensions = $(e.target).find('#dimensions');
        var $letterHeight = $(e.target).find('#letterHeight');
        var $date = $(e.target).find('#date');
        var $transcription = $(e.target).find('#transcription');
        var $analysis = $(e.target).find('#analysis');
        var $references = $(e.target).find('#references');

        var reference = $reference1.val() + " " + $reference2.val();

        var bookTitle = $reference1.val();

        var book = Books.findOne({title: bookTitle});

        var inscription = {
            reference: reference,
            city: $city.val(),
            description: $description.val(),
            dimensions: $dimensions.val(),
            letterHeight: $letterHeight.val(),
            date: $date.val(),
            transcription: $transcription.val(),
            analysis: $analysis.val(),
            references: $references.val(),
            bookId: book._id
        }

        console.log(inscription);

        Meteor.call('createInscription', inscription, function(error, id) {
            if(error) {
                // TODO Gestion erreurs
            } else {
                Router.go('showBook', {_id: book._id});
            }
        });
    }
});