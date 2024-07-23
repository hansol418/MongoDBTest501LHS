use("testMember");
db.users.insertMany([
    {name : "이상용", lunchMenuList : ["국밥","된장찌개"], age : 30 , comment : { title : "메뉴글1", writer : "이상용" } },
    {name : "이상용2", lunchMenuList : ["비빔밥","설렁탕"], age : 30 , comment : { title : "메뉴글2", writer : "이상용2" } },
    {name : "이상용3", lunchMenuList : ["제육덮밥","국수"], age : 30 , comment : { title : "메뉴글3", writer : "이상용3" } },
  ]);

use("testMember");  
db.users.find()

//객체 수정 예, 
use("testMember");  
db.users.update(
    { name: "이상용2" },
    {
      $set: { "comment.title": "수정메뉴글" },
    }
     
  );

  use("testMember");  
  db.users.find()

//객체 수정 예2, 
use("testMember");
db.users.updateOne(
    { name: "이상용2" },
    { 
        $set: { 
            "comment.title": "새로운 제목",
            "comment.writer": "새로운 작성자"
        }
    }
);

//객체 수정 예3, 중첩 객체안의 요소 수정.
use("testMember");
db.users.updateOne(
    { name: "이상용2" },
    { 
        $set: { 
            "comment.subComment.subTitle": "업데이트된 서브 제목",
            "comment.subComment.subWriter": "업데이트된 서브 작성자"
        }
    },
    { upsert: true }
);

  use("testMember");  
  db.users.find()

  // 배열 수정 예1
use("testMember"); 
  db.users.updateOne(
    { name: "이상용2", lunchMenuList: "비빔밥" },
    { $set: { "lunchMenuList.$": "새로운 비빔밥" } }
);
// $는 배열에서 조건에 맞는 첫 번째 원소를 의미

use("testMember");  
db.users.find()

// 배열 수정 예2
use("testMember"); 
db.users.updateOne(
    { name: "이상용2" },
    { $set: { "lunchMenuList.1": "새로운 두번째 메뉴2" } }
);


use("testMember");  
db.users.find()
// 배열 수정 예3, upsert , 없으면 추가, 있으면 수정
use("testMember"); 
db.users.updateOne(
    { name: "이상용4" },
    { $set: { "lunchMenuList.0": "업데이트된 첫번째 메뉴" } },
    { upsert: true }
);

// 배열 수정 예4, 
use("testMember");
db.users.updateOne(
    { name: "이상용2" },
    { 
        $set: { 
            "lunchMenuList.0": "새로운 첫번째 메뉴11111",
            "lunchMenuList.1": "새로운 두번째 메뉴22222"
        }
    }
);

use("testMember");  
db.users.find()
// 배열 수정 예5,객체 필드안 리스트의 첫번째 요소 변경 
use("testMember");
db.users.updateOne(
    { name: "이상용2" },
    { 
        $set: { 
            "comment.lunchMenuList.1": "업데이트된 두번째 메뉴33333"
        }
    },
    {upsert : true}
);

use("testMember");  
db.users.find()

//배열의 첫번째 삭제 
use("testMember");
db.users.updateOne(
    { name: "이상용2" },
    { $pop: { lunchMenuList: -1 } }
);

use("testMember");  
db.users.find()

//배열의 특정요소 삭제 
use("testMember");
db.users.updateOne(
    { name: "이상용2" },
    { $pull: { lunchMenuList: "새로운 두번째 메뉴22222" } }
);


use("testMember");  
db.users.find()

//객체의 특정요소 삭제 
use("testMember");
db.users.updateOne(
    { name: "이상용2" },
    { $unset: { "comment.writer": "" } }
);
//$unset 연산자는 지정된 필드를 제거

//객체의 특정요소 삭제 
use("testMember");
db.users.updateOne(
    { name: "이상용2" },
    { $unset: { "comment.title": "", "comment.writer": "" } }
);