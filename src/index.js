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
  console.log(li);
};

/*　追加ボタンを押したときに関数が実行される */
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
