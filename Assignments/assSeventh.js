var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingCompleted: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingCompleted: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingCompleted: false
    }];

    for(i=0;i<library.length;i++)
    {
        if(library[i].readingCompleted==true)
        {
            console.log(library[i].title);
        }
    }