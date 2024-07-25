db.by_road_type.find({'기타단일로.death_toll':0}, {city_or_province:1, county:1, "기타단일로.death_toll": 1})
db.by_month.find({county: {$regex: /구$/, $gte: "아", $ㅣㅅ:"자"}}, {
    month
})