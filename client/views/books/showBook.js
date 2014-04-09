Template.showBook.helpers({
    inscriptions: function() {
        return Inscriptions.find({}, {sort: {reference: 1}});
    }
});

Template.showBook.events({
    'submit form.search-book': function(e, template) {
        e.preventDefault();

        var $reference2 = $(e.target).find('#reference-2');

        var book = template.data.title

        var reference = book + " " + $reference2.val();

        Meteor.call('searchInscription', reference, function(error, id) {
            if(error) {
                alert(error.reason);
            } else {
                Router.go('showInscription', {_id: id});
            }
        });
    }
});