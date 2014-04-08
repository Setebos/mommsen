if (Books.find().count() === 0) {
    Books.insert({
        title: 'CIL I'
    });
    Books.insert({
        title: 'CIL II'
    });
    Books.insert({
        title: 'CIL III'
    });
    Books.insert({
        title: 'CIL IV'
    });
    Books.insert({
        title: 'CIL V'
    });
    Books.insert({
        title: 'CIL VI'
    });
    Books.insert({
        title: 'CIL VII'
    });
    var id = Books.insert({
        title: 'CIL VIII'
    });
    Books.insert({
        title: 'CIL IX'
    });
    Books.insert({
        title: 'CIL X'
    });
    Books.insert({
        title: 'CIL XI'
    });
    Books.insert({
        title: 'CIL XII'
    });
    Books.insert({
        title: 'CIL XIII'
    });
    Books.insert({
        title: 'CIL XIV'
    });
    Books.insert({
        title: 'CIL XV'
    });
    Books.insert({
        title: 'CIL XVI'
    });
    Books.insert({
        title: 'CIL XVII'
    });

    Inscriptions.insert({
        reference: 'test 1',
        bookId: id
    });
    Inscriptions.insert({
        reference: 'test 2',
        bookId: id
    });
    Inscriptions.insert({
        reference: 'test 3',
        bookId: id
    });
}