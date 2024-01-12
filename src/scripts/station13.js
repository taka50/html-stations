data = "global data";

// このreturnDataに代入される関数の形をアロー関数に変えて"global data"が表示されるようにしてください
// ↓関数の中の処理は変更しないでください

/* アロー関数 this.data は宣言された時点で、thisを確定、
   すなわち、どこで呼び出しても宣言時点のdata(ここでは１行目)を呼び出す */
const returnThisData = (data) => {
  return this.data;
};
// ↑関数の中の処理は変更しないでください

/* 通常の関数 this.data は呼び出し元のオブジェクトのdata 呼び出す場所で中身が変わる */
// const returnThisData = function () {
//   return this.data;
// };

const object = {
  data: "object data",
  func: returnThisData,
};

function getData() {
  return object.func();
}
