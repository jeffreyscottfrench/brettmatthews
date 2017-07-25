/*! PhotoSwipe - v4.1.1 - 2015-12-24
* http://photoswipe.com
* Copyright (c) 2015 Dmitry Semenov;
* Modified by Jeffrey Scott French; */


// build items array
var items = [
    // slide 1
    {
      slide: 1,
      _640Image: {
        src: '../images/city/new-york-city-weddings-01-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-01-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-01-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-01-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-01-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-01-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-01-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-01-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-01-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 2
    {
      slide: 2,
      _640Image: {
        src: '../images/city/new-york-city-weddings-02-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-02-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-02-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-02-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-02-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-02-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-02-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-02-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-02-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 3
    {
      slide: 3,
      _640Image: {
        src: '../images/city/new-york-city-weddings-03-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-03-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-03-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-03-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-03-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-03-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-03-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-03-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-03-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 4
    {
      slide: 4,
      _640Image: {
        src: '../images/city/new-york-city-weddings-04-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-04-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-04-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-04-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-04-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-04-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-04-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-04-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-04-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 5
    {
      slide: 5,
      _640Image: {
        src: '../images/city/new-york-city-weddings-05-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-05-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-05-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-05-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-05-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-05-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-05-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-05-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-05-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 6
    {
      slide: 6,
      _640Image: {
        src: '../images/city/new-york-city-weddings-06-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-06-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-06-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-06-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-06-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-06-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-06-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-06-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-06-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 7
    {
      slide: 7,
      _640Image: {
        src: '../images/city/new-york-city-weddings-07-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-07-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-07-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-07-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-07-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-07-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-07-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-07-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-07-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 8
    {
      slide: 8,
      _640Image: {
        src: '../images/city/new-york-city-weddings-08-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-08-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-08-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-08-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-08-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-08-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-08-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-08-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-08-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 9
    {
      slide: 9,
      _640Image: {
        src: '../images/city/new-york-city-weddings-09-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-09-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-09-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-09-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-09-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-09-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-09-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-09-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-09-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 10
    {
      slide: 10,
      _640Image: {
        src: '../images/city/new-york-city-weddings-10-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-10-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-10-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-10-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-10-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-10-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-10-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-10-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-10-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 11
    {
      slide: 11,
      _640Image: {
        src: '../images/city/new-york-city-weddings-11-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-11-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-11-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-11-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-11-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-11-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-11-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-11-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-11-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 12
    {
      slide: 12,
      _640Image: {
        src: '../images/city/new-york-city-weddings-12-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-12-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-12-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-12-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-12-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-12-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-12-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-12-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-12-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 13
    {
      slide: 13,
      _640Image: {
        src: '../images/city/new-york-city-weddings-13-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-13-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-13-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-13-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-13-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-13-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-13-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-13-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-13-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 14
    {
      slide: 14,
      _640Image: {
        src: '../images/city/new-york-city-weddings-14-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-14-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-14-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-14-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-14-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-14-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-14-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-14-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-14-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 15
    {
      slide: 15,
      _640Image: {
        src: '../images/city/new-york-city-weddings-15-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-15-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-15-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-15-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-15-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-15-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-15-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-15-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-15-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 16
    {
      slide: 16,
      _640Image: {
        src: '../images/city/new-york-city-weddings-16-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-16-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-16-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-16-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-16-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-16-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-16-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-16-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-16-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 17
    {
      slide: 17,
      _640Image: {
        src: '../images/city/new-york-city-weddings-17-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-17-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-17-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-17-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-17-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-17-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-17-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-17-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-17-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 18
    {
      slide: 18,
      _640Image: {
        src: '../images/city/new-york-city-weddings-18-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-18-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-18-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-18-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-18-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-18-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-18-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-18-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-18-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 19
    {
      slide: 19,
      _640Image: {
        src: '../images/city/new-york-city-weddings-19-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-19-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-19-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-19-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-19-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-19-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-19-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-19-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-19-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 20
    {
      slide: 20,
      _640Image: {
        src: '../images/city/new-york-city-weddings-20-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-20-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-20-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-20-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-20-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-20-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-20-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-20-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-20-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 21
    {
      slide: 21,
      _640Image: {
        src: '../images/city/new-york-city-weddings-21-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-21-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-21-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-21-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-21-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-21-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-21-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-21-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-21-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 22
    {
      slide: 22,
      _640Image: {
        src: '../images/city/new-york-city-weddings-22-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-22-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-22-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-22-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-22-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-22-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-22-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-22-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-22-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 23
    {
      slide: 23,
      _640Image: {
        src: '../images/city/new-york-city-weddings-23-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-23-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-23-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-23-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-23-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-23-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-23-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-23-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-23-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 24
    {
      slide: 24,
      _640Image: {
        src: '../images/city/new-york-city-weddings-24-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-24-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-24-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-24-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-24-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-24-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-24-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-24-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-24-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 25
    {
      slide: 25,
      _640Image: {
        src: '../images/city/new-york-city-weddings-25-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-25-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-25-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-25-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-25-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-25-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-25-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-25-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-25-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 26
    {
      slide: 26,
      _640Image: {
        src: '../images/city/new-york-city-weddings-26-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-26-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-26-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-26-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-26-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-26-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-26-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-26-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-26-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 27
    {
      slide: 27,
      _640Image: {
        src: '../images/city/new-york-city-weddings-27-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-27-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-27-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-27-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-27-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-27-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-27-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-27-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-27-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 28
    {
      slide: 28,
      _640Image: {
        src: '../images/city/new-york-city-weddings-28-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-28-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-28-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-28-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-28-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-28-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-28-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-28-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-28-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 29
    {
      slide: 29,
      _640Image: {
        src: '../images/city/new-york-city-weddings-29-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-29-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-29-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-29-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-29-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-29-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-29-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-29-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-29-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 30
    {
      slide: 30,
      _640Image: {
        src: '../images/city/new-york-city-weddings-30-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-30-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-30-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-30-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-30-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-30-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-30-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-30-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-30-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 31
    {
      slide: 31,
      _640Image: {
        src: '../images/city/new-york-city-weddings-31-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-31-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-31-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-31-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-31-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-31-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-31-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-31-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-31-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 32
    {
      slide: 32,
      _640Image: {
        src: '../images/city/new-york-city-weddings-32-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-32-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-32-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-32-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-32-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-32-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-32-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-32-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-32-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 33
    {
      slide: 33,
      _640Image: {
        src: '../images/city/new-york-city-weddings-33-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-33-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-33-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-33-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-33-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-33-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-33-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-33-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-33-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 34
    {
      slide: 34,
      _640Image: {
        src: '../images/city/new-york-city-weddings-34-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-34-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-34-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-34-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-34-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-34-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-34-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-34-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-34-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 35
    {
      slide: 35,
      _640Image: {
        src: '../images/city/new-york-city-weddings-35-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-35-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-35-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-35-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-35-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-35-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-35-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-35-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-35-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 36
    {
      slide: 36,
      _640Image: {
        src: '../images/city/new-york-city-weddings-36-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-36-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-36-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-36-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-36-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-36-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-36-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-36-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-36-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 37
    {
      slide: 37,
      _640Image: {
        src: '../images/city/new-york-city-weddings-37-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-37-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-37-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-37-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-37-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-37-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-37-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-37-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-37-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
    ,
    // slide 38
    {
      slide: 38,
      _640Image: {
        src: '../images/city/new-york-city-weddings-38-640w.jpg',
        w: 640,
        h: 427
      },
      _960Image: {
        src: '../images/city/new-york-city-weddings-38-960w.jpg',
        w: 960,
        h: 640
      },
      _1140Image: {
        src: '../images/city/new-york-city-weddings-38-1140w.jpg',
        w: 1140,
        h: 760
      },
      _1340Image: {
        src: '../images/city/new-york-city-weddings-38-1340w.jpg',
        w: 1340,
        h: 893
      },
      _1500Image: {
        src: '../images/city/new-york-city-weddings-38-1500w.jpg',
        w: 1500,
        h: 1000
      },
      _1750Image: {
        src: '../images/city/new-york-city-weddings-38-1750w.jpg',
        w: 1750,
        h: 1167
      },
      _2000Image: {
        src: '../images/city/new-york-city-weddings-38-2000w.jpg',
        w: 2000,
        h: 1333
      },
      _2250Image: {
        src: '../images/city/new-york-city-weddings-38-2250w.jpg',
        w: 2250,
        h: 1500
      },
      _2500Image: {
        src: '../images/city/new-york-city-weddings-38-2500w.jpg',
        w: 2500,
        h: 1667
      }
    }
];
