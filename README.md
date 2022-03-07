# Tetris in <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JS" width=30>

# 制作風景

<img src="https://c.tenor.com/VVOA7SCKgmkAAAAC/test.gif" alt="GIF" width=auto>

やっぱり動いたり操作できるのは楽しい!!

この講習で見た目をいじる手段を学べたのが本当に大きい

# 学んだこと、総動員

- deep/shallow copy でハマる...
  - ブロックが表示されず、ずっと真っ白状態
- ブロックの衝突判定でハマる...
  - 回転で、壁にめり込む特別仕様
- 何故か、github.io 上では表示が違う...
  - 色んなブラウザでチェックするとブラウザ独自の CSS があたっていたりするので注意
  - CSS が更新されないときは **Shift 押しながら更新**

# Tetris で工夫したこと

- タイトル部分以外は DOM 操作で生成
  - JS 操作で機能追加が簡単
  - 動的に生成しているので,定数を変更すれば,色々と変更できるように
- 操作する関数(`control.js`)と表示する関数(`view.js`)を分離する
  - ボタンを増やしたり,スマホ対応が簡単

# 参考

```mermaid
sequenceDiagram

rect rgb(240, 240, 240)
activate Browser
Note Right of Browser: DOM生成
Browser->>view.js: 1.ゲーム説明文
Browser->>view.js: 2.パネル(左:ゲーム画面 右:スコア,次のブロック)
Browser->>view.js: 3.リンク
deactivate Browser
end

rect rgb(240, 240, 240)
Note right of Browser : 以降,定期実行

rect rgb(240, 240, 200)
activate control.js
Browser-->>control.js: ユーザー操作,キー入力
end

rect rgb(240, 240, 200)
activate Data
control.js->>Data: データ操作(回転,左右移動,落下,ライン消去)
deactivate control.js
end

rect rgb(240, 240, 200)
activate view.js
Data->>view.js: 1.固定ブロックを表示
Data->>view.js: 2.操作ブロックを表示
end
deactivate Data

rect rgb(240, 240, 200)
view.js-->>-Browser: DOM操作,表示更新
end

end
```
