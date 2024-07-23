//use("test");
db.character.insertMany([
    { name: "x", inventory: ["pen", "cloth", "pen"] },
    { name: "y", inventory: ["book", "cloth"], position: { x: 1, y: 5 } },
    { name: "z", inventory: ["wood", "pen"], position: { x: 0, y: 9 } },
  ]);
  
  //조회
  db.character.find();
  
  // 수정 예
  db.character.update(
    {},
    {
      $set: { "inventory.$[penElm]": "pen" },
    },
    { arrayFilters: [{ penElm: "pencil2" }] }
  );
  
  // 복수개 수정.
  db.character.updateMany(
    {},
    {
      $set: { "inventory.$[penElm]": "pencil" },
    },
    { arrayFilters: [{ penElm: "pen" }] }
  );

//   "_id":0 , 이 컬럼 제외하고 다 보여줘, 이 컬럼만 예외.
// "name":1 이것만 보여줘, 나머지는 안볼래.
// "inventory":1 이것만 보여줘, 나머지는 안볼래. -> inventory
// "name":0 : 이 컬럼 빼고 다 보여줘.  -> _id, inventory
  db.character.find({},{"_id":1, "name":0, "inventory":1})
  // select * , 전체 열 다보기. 
  // select _id, inventory 
  db.character.find({},{"_id":1, "inventory":1})
db.character.find()
  db.character.deleteOne({name:"x"})
  db.character.deleteMany({})
  db.character.drop()