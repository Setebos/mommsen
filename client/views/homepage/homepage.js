Template.homepage.helpers({
    books: function() {
        return Books.find();
    }
});

Template.homepage.events({
    'submit form.search-home': function(e, template) {
        e.preventDefault();

        var $reference1 = $(e.target).find('#reference-1');
        var $reference2 = $(e.target).find('#reference-2');

        var reference = $reference1.val() + " " + $reference2.val();

        Meteor.call('searchInscription', reference, function(error, id) {
            if(error) {
                alert(error.reason);
            } else {
                Router.go('showInscription', {_id: id});
            }
        });
    }
});