
const branchData=[
    {
        id:1,
        title:'DHAKA',
        img:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitZ-3eZiCREiKN7iFpar-G1W6SFxJCgB75MXMOGIxhLOVpu7OWRpxLXTpHpNM5q60Ynw6dSMXmUAdvLlDvtPHny-0llS3EoSWKT5jgsAsaf82azkYj-zzYKu-oCQSwfbSJ6jMC14tkkQUIDg3KFn3_4I8AYi9iTf5ry3YokyLM66Pg1aGiHAhpI_Gk/s320/diet-health-nutrition-life-food-eating-concept_53876-120817.jpg'
    },
    {
        id:2,
        title:'Mirpur-1',
        img:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitZ-3eZiCREiKN7iFpar-G1W6SFxJCgB75MXMOGIxhLOVpu7OWRpxLXTpHpNM5q60Ynw6dSMXmUAdvLlDvtPHny-0llS3EoSWKT5jgsAsaf82azkYj-zzYKu-oCQSwfbSJ6jMC14tkkQUIDg3KFn3_4I8AYi9iTf5ry3YokyLM66Pg1aGiHAhpI_Gk/s320/diet-health-nutrition-life-food-eating-concept_53876-120817.jpg'
    },
    {
        id:3,
        title:'Mirpur-2',
        img:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitZ-3eZiCREiKN7iFpar-G1W6SFxJCgB75MXMOGIxhLOVpu7OWRpxLXTpHpNM5q60Ynw6dSMXmUAdvLlDvtPHny-0llS3EoSWKT5jgsAsaf82azkYj-zzYKu-oCQSwfbSJ6jMC14tkkQUIDg3KFn3_4I8AYi9iTf5ry3YokyLM66Pg1aGiHAhpI_Gk/s320/diet-health-nutrition-life-food-eating-concept_53876-120817.jpg'
    },
    {
        id:4,
        title:'Khulna ',
        img:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitZ-3eZiCREiKN7iFpar-G1W6SFxJCgB75MXMOGIxhLOVpu7OWRpxLXTpHpNM5q60Ynw6dSMXmUAdvLlDvtPHny-0llS3EoSWKT5jgsAsaf82azkYj-zzYKu-oCQSwfbSJ6jMC14tkkQUIDg3KFn3_4I8AYi9iTf5ry3YokyLM66Pg1aGiHAhpI_Gk/s320/diet-health-nutrition-life-food-eating-concept_53876-120817.jpg'
    },
    {
        id:5,
        title:'Borishal',
        img:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitZ-3eZiCREiKN7iFpar-G1W6SFxJCgB75MXMOGIxhLOVpu7OWRpxLXTpHpNM5q60Ynw6dSMXmUAdvLlDvtPHny-0llS3EoSWKT5jgsAsaf82azkYj-zzYKu-oCQSwfbSJ6jMC14tkkQUIDg3KFn3_4I8AYi9iTf5ry3YokyLM66Pg1aGiHAhpI_Gk/s320/diet-health-nutrition-life-food-eating-concept_53876-120817.jpg'
    },
    {
        id:6,
        title:'magura',
        img:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitZ-3eZiCREiKN7iFpar-G1W6SFxJCgB75MXMOGIxhLOVpu7OWRpxLXTpHpNM5q60Ynw6dSMXmUAdvLlDvtPHny-0llS3EoSWKT5jgsAsaf82azkYj-zzYKu-oCQSwfbSJ6jMC14tkkQUIDg3KFn3_4I8AYi9iTf5ry3YokyLM66Pg1aGiHAhpI_Gk/s320/diet-health-nutrition-life-food-eating-concept_53876-120817.jpg'
    },
    {
        id:7,
        title:'Syleth',
        img:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitZ-3eZiCREiKN7iFpar-G1W6SFxJCgB75MXMOGIxhLOVpu7OWRpxLXTpHpNM5q60Ynw6dSMXmUAdvLlDvtPHny-0llS3EoSWKT5jgsAsaf82azkYj-zzYKu-oCQSwfbSJ6jMC14tkkQUIDg3KFn3_4I8AYi9iTf5ry3YokyLM66Pg1aGiHAhpI_Gk/s320/diet-health-nutrition-life-food-eating-concept_53876-120817.jpg'
    },
    {
        id:8,
        title:'Norshindhi',
        img:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitZ-3eZiCREiKN7iFpar-G1W6SFxJCgB75MXMOGIxhLOVpu7OWRpxLXTpHpNM5q60Ynw6dSMXmUAdvLlDvtPHny-0llS3EoSWKT5jgsAsaf82azkYj-zzYKu-oCQSwfbSJ6jMC14tkkQUIDg3KFn3_4I8AYi9iTf5ry3YokyLM66Pg1aGiHAhpI_Gk/s320/diet-health-nutrition-life-food-eating-concept_53876-120817.jpg'
    },
    {
        id:9,
        title:'Foridpur',
        img:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitZ-3eZiCREiKN7iFpar-G1W6SFxJCgB75MXMOGIxhLOVpu7OWRpxLXTpHpNM5q60Ynw6dSMXmUAdvLlDvtPHny-0llS3EoSWKT5jgsAsaf82azkYj-zzYKu-oCQSwfbSJ6jMC14tkkQUIDg3KFn3_4I8AYi9iTf5ry3YokyLM66Pg1aGiHAhpI_Gk/s320/diet-health-nutrition-life-food-eating-concept_53876-120817.jpg'
    },
    {
        id:10,
        title:'Ragbari',
        img:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitZ-3eZiCREiKN7iFpar-G1W6SFxJCgB75MXMOGIxhLOVpu7OWRpxLXTpHpNM5q60Ynw6dSMXmUAdvLlDvtPHny-0llS3EoSWKT5jgsAsaf82azkYj-zzYKu-oCQSwfbSJ6jMC14tkkQUIDg3KFn3_4I8AYi9iTf5ry3YokyLM66Pg1aGiHAhpI_Gk/s320/diet-health-nutrition-life-food-eating-concept_53876-120817.jpg'
    },

    {
        id:11,
        title:'Kustiya',
        img:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitZ-3eZiCREiKN7iFpar-G1W6SFxJCgB75MXMOGIxhLOVpu7OWRpxLXTpHpNM5q60Ynw6dSMXmUAdvLlDvtPHny-0llS3EoSWKT5jgsAsaf82azkYj-zzYKu-oCQSwfbSJ6jMC14tkkQUIDg3KFn3_4I8AYi9iTf5ry3YokyLM66Pg1aGiHAhpI_Gk/s320/diet-health-nutrition-life-food-eating-concept_53876-120817.jpg'
    },
    {
        id:12,
        title:'Jhenaidah',
        img:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEitZ-3eZiCREiKN7iFpar-G1W6SFxJCgB75MXMOGIxhLOVpu7OWRpxLXTpHpNM5q60Ynw6dSMXmUAdvLlDvtPHny-0llS3EoSWKT5jgsAsaf82azkYj-zzYKu-oCQSwfbSJ6jMC14tkkQUIDg3KFn3_4I8AYi9iTf5ry3YokyLM66Pg1aGiHAhpI_Gk/s320/diet-health-nutrition-life-food-eating-concept_53876-120817.jpg'
    },

]

export default branchData;