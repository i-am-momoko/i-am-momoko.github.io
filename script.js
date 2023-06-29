// 5秒後に実行を取り消すためのタイマーを設定する
var timer = setTimeout(cancelExecution, 5000);

// 実行を取り消す関数
function cancelExecution() {
  // タイマーをクリアして実行を取り消す
  clearTimeout(timer);

  // ここにコードの実行を取り消す処理を書く
  // 例えば、アニメーションの停止や要素のスタイルの変更などを行う

  // フローティングテキスト要素を取得
  var floatingText = document.querySelector(".floating-text");

  // アニメーションを一時停止させる
  floatingText.style.animationPlayState = "paused";

  // フローティングテキスト要素を非表示にする
  floatingText.style.display = "none";
}
