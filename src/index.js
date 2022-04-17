import "./styles.css";

/*　フォームに入力された文字を取得する */
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value =
    ""; /*　←空文字を入れて書かれた文字を初期化できる */

  createIncompletelist(inputText);
};

//未完了リストを削除する関数追加
const deleteFromInconpleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const deleteFromconpleteList = (target) => {
  document.getElementById("complete-list").removeChild(target);
};
/*  ↑は↓が元
    const deleteTarget = completeButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
*/

//未完了リストに追加する関数
const createIncompletelist = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = text; //liの中にinputTextの文字が入る

  //完了ボタン　タグ生成・クリックイベント付与
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //リストから消す
    deleteFromInconpleteList(completeButton.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode; //div

    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText; //divの中のliの文字

    //div以下を初期化
    addTarget.textContent = null;

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグ(div)を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompletelist(text);
    });

    //divタグ子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    addTarget.appendChild(deleteButton2);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton2 = document.createElement("button");
  deleteButton2.innerText = "削除";
  deleteButton2.addEventListener("click", () => {
    //押された削除ぼたんの親タグ（div）を未完了リストから削除
    deleteFromconpleteList(deleteButton2.parentNode);
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

/*　追加ボタンを押したときに関数が実行される */
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
