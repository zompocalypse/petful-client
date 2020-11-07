# FIFO Petful Adoptions

FIFO Petful Adoptions is a First In First Out pet adoption service! That means every pet finds a home and both you and the pet don't have to wait long to be matched.

Neat! How do I adopt?

It's simple... Start by clicking the button below to go to the adoption page. Add you name to the list, wait your turn, then click to adopt a cat or a dog!

## Repo Details

- Client - https://github.com/zompocalypse/petful-client/tree/master
- Server - https://github.com/zompocalypse/petful-server

## How to use the API

### /api/cat - GET

returns the cat located at the top of the cat queue

```
{
    "age": 2,
    "breed": "Bengal",
    "description": "Orange bengal cat with black stripes lounging on concrete.",
    "gender": "Female",
    "imageURL": "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "name": "Steve French",
    "story": "Thrown on the street"
}
```

### /api/dog - GET

returns the dog located at the top of the dog queue

```
{
    "age": 3,
    "breed": "Golden Retriever",
    "description": "A smiling golden-brown golden retreiver listening to music.",
    "gender": "Male",
    "imageURL": "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "name": "Zim",
    "story": "Owner Passed away"
}
```

### /api/pets - GET

returns all pets from both the dog and cat queues

```
{
    "cats": [
        {
            "age": 2,
            "breed": "Bengal",
            "description": "Orange bengal cat with black stripes lounging on concrete.",
            "gender": "Female",
            "imageURL": "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "name": "Steve French",
            "story": "Thrown on the street"
        },
        ...
    ],
    "dogs": [
        {
            "age": 3,
            "breed": "Golden Retriever",
            "description": "A smiling golden-brown golden retreiver listening to music.",
            "gender": "Male",
            "imageURL": "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "name": "Zim",
            "story": "Owner Passed away"
        },
        ...
    ]
}
```

### /api/pets/:type - DELETE

removes the top dog/cat AND top person from the respective queues

```
:type should be 'cat' or 'dog'
```

### /api/people - GET

returns all queue currently in queue

```
[
    "Randy Lahey",
    "Trevor Cory",
    "Jim Lahey"
]
```

## Tech Stack

- Client - React
- Server - Express
- Database - no database currently
