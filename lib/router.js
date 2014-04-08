Router.configure({
	layoutTemplate: 'layout',
    waitOn: function() { 
        return Meteor.subscribe('books');
    }
});

Router.map(function() {

    this.route('homepage', {
        path: '/',
        waitOn: function() { 
            return Meteor.subscribe('inscriptions');
        }
    });

    this.route('newInscription', {
        path: '/inscription/new'
    });

    this.route('showBook', {
        path: '/book/show/:_id',
        waitOn: function() { 
            return [
                Meteor.subscribe('inscriptionsByBook', this.params._id),
                Meteor.subscribe('oneBook', this.params._id)
            ]
        },
        data: function() { 
            return Books.findOne(this.params._id);
        }
    });
});