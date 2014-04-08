Template.showBook.helpers({
    inscriptions: function() {
        return Inscriptions.find({}, {sort: {reference: 1}});
    }
});
