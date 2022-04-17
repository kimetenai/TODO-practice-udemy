import "./styles.css";

/*　フォームに入力された文字を取得する */
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value =
    ""; /*　←空文字を入れて書かれた文字を初期化できる */

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText; //liの中にinputTextの文字が入る

  //完了ボタン　タグ生成・クリックイベント付与
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromInconpleteList(completeButton.parentNode);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ぼたんの親タグ（div）を未完了リストから削除
    deleteFromInconpleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

//未完了リストを削除する関数追加
const deleteFromInconpleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
/*  ↑は↓が元
    const deleteTarget = completeButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
*/

/*　追加ボタンを押したときに関数が実行される */
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
