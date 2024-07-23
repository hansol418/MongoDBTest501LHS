// 데이터 추가
use("testMember");
db.users.insertMany([
    { name: "이상용", lunchMenuList: ["국밥", "된장찌개"], age: 30, comment: { title: "메뉴글1", writer: "이상용" }},
    { name: "김철수", lunchMenuList: ["김치찌개", "라면"], age: 25, comment: { title: "메뉴글2", writer: "김철수" }},
    { name: "박영희", lunchMenuList: ["비빔밥", "초밥"], age: 28, comment: { title: "메뉴글3", writer: "박영희" }},
]);

// 데이터 조회
db.users.find();

// 데이터 수정 (특정 조건에 맞는 모든 배열 요소 수정)
// "된장찌개"를 "김치찌개"로 변경
db.users.update(
    {},
    { $set: { "lunchMenuList.$[menuElem]": "김치찌개" }},
    { arrayFilters: [{ menuElem: "된장찌개" }] }
);

// 복수 데이터 수정 (특정 조건에 맞는 모든 배열 요소 수정)
// "라면"을 "짬뽕"으로 변경
db.users.updateMany(
    {},
    { $set: { "lunchMenuList.$[menuElem]": "짬뽕" }},
    { arrayFilters: [{ menuElem: "라면" }] }
);

// 특정 필드만 조회 (_id 제외)
db.users.find({}, { "_id": 0, "name": 1, "lunchMenuList": 1 });

// 특정 필드만 조회 (name 제외)
db.users.find({}, { "_id": 1, "name": 0, "lunchMenuList": 1 });

// 사용자 삭제
db.users.deleteOne({ name: "이상용" });

// 모든 사용자 삭제
db.users.deleteMany({});

// 컬렉션 삭제
db.users.drop();