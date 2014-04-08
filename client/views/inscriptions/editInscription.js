Template.editInscription.events({
    'submit form': function(e, template) {
        e.preventDefault();

        var $city = $(e.target).find('#city');
        var $description = $(e.target).find('#description');
        var $dimensions = $(e.target).find('#dimensions');
        var $letterHeight = $(e.target).find('#letterHeight');
        var $date = $(e.target).find('#date');
        var $transcription = $(e.target).find('#transcription');
        var $analysis = $(e.target).find('#analysis');
        var $references = $(e.target).find('#references');

        var inscription = {
            city: $city.val(),
            description: $description.val(),
            dimensions: $dimensions.val(),
            letterHeight: $letterHeight.val(),
            date: $date.val(),
            transcription: $transcription.val(),
            analysis: $analysis.val(),
            references: $references.val(),
        }

        Meteor.call('updateInscription', inscription, template.data._id, function(error, id) {
            if(error) {
                // TODO Gestion erreurs
            } else {
                Router.go('showBook', {_id: template.data.bookId});
            }
        });
    }
});