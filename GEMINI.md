# Console Canvas - Known Issues & TODOs

## TODOs

- **エディタのレイアウト崩れ:** 長いアルファベットの文字列（スペースを含まない単語）を入力すると、エディタが画面幅を超えて広がり、レイアウトが崩れる問題。`word-break: break-all;` を適用したが、完全に解決されていない可能性がある。
- **monospace以外のフォントに対応:** `console.log()`のスタイル指定で、monospace以外のフォントも利用できるようにする。
- **デフォルトアイコンの置き換え:** `public/vite.svg` と `src/assets/react.svg` をプロジェクト固有のアイコンに置き換える。
