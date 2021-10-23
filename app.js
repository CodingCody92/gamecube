const bestGameSystem = [
    {
        Console: 'Nintendo Gamecube',
        Developer: 'Nintendo',
        Year: 2001,
        Price: 199,
        Lifespan: '6 years',
        Sold: '21 million'
    },

    {
        Console: 'Nintendo Switch',
        Developer: 'Nintendo',
        Year: 2007,
        Price: 299,
        Lifespan: '2017 to Present',
        Sold: '89 million'
    },

    {
        Console: 'Sony Playstation 2',
        Developer: 'Sony',
        Year: 2000,
        Price: 299,
        Lifespan: 13,
        Sold: '155 million'
    },

    {
        Console: 'Microsoft Xbox 360',
        Developer: 'Microsoft',
        Year: 2005,
        Price: 299,
        Lifespan: 11,
        Sold: '85 million'
    },

    {
        Console: 'Sega Genesis',
        Developer: 'Sega',
        Year: 1988,
        Price: 189,
        Lifespan: 9,
        Sold: '32 million'
    },

    {
        Console: 'Nintendo Gameboy Color',
        Developer: 'Nintendo',
        Year: 1998,
        Price: 70,
        Lifespan: 5,
        Sold: '120 million'
    },

    {
        Console: 'Sony Playstation 3',
        Developer: 'Sony',
        Year: 2006,
        Price: 599,
        Lifespan: 11,
        Sold: '88 Million'
    },

    {
        Console: 'Atari 2600',
        Developer: 'Atari',
        Year: 1977,
        Price: 190,
        Lifespan: 16,
        Sold: '30 Million'
    },
]

// const years = bestGameSystem.map(time => (
//     `${time.Console} + ${time.Year}`
// ))

const longYear = bestGameSystem.filter(time => {
    if (time.Year < 2000) {
        console.log('old ass game!')
    }
})

const cost = bestGameSystem.filter(costs => costs.Price > 300);
console.log(cost)