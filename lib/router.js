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

    this.route('editInscription', {
        path: '/inscription/edit/:_id',
        waitOn: function() { 
            return Meteor.subscribe('oneInscription', this.params._id);
        },
        data: function() { 
            return Inscriptions.findOne({_id: this.params._id});
        }
    });

    this.route('showInscription', {
        path: '/inscription/show/:_id',
        waitOn: function() { 
            return Meteor.subscribe('oneInscription', this.params._id);
        },
        data: function() { 
            return Inscriptions.findOne({_id: this.params._id});
        }
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