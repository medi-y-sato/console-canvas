# Console Canvas

![Console Canvas Screenshot](https://via.placeholder.com/800x400?text=Console+Canvas+Screenshot) <!-- Placeholder for a future screenshot -->

Console Canvas は、リッチテキストエディタで作成した装飾付きテキストを、ブラウザのコンソールに表示するための `console.log()` 形式の JavaScript コードに変換する Web アプリケーションです。開発者やデバッグ作業を行うユーザーが、視覚的に分かりやすいコンソール出力を手軽に作成できるよう支援します。

このアプリケーションは、サーバーサイドの処理を一切含まない、完全にクライアントサイドのみで動作します。そのため、GitHub Pages のような静的ホスティングサービスに簡単にデプロイ可能です。

## 🚀 機能 (Features)

- **リッチテキストエディタ:** 直感的で使いやすい WYSIWYG エディタでテキストを入力・装飾できます。
  - サポートされる装飾: 太字、斜体、下線、打ち消し線、文字色、背景色。
- **リアルタイム変換:** エディタの編集内容が、即座に `console.log()` で実行可能な JavaScript コードに変換され、画面に表示されます。
- **デバウンス付きライブプレビュー:** ユーザーの入力が1秒間停止した後に、生成されたコードが自動的にブラウザのコンソールで実行され、リアルタイムなプレビューを提供します。
- **コードコピー機能:** 生成された JavaScript コードをワンクリックでクリップボードにコピーできます。
- **セーブ・ロード機能:** エディタの内容をローカルストレージに保存し、必要な時に復元できます。

## 🛠️ 技術スタック (Tech Stack)

- **フロントエンド:** React (Vite)
- **リッチテキストエディタ:** Quill.js (via `react-quill-new`)
- **UI コンポーネント:** MUI (Material-UI)
- **デプロイ:** GitHub Pages (GitHub Actions)

## 💻 開発環境のセットアップ (Setup)

### 前提条件 (Prerequisites)

- Node.js (推奨バージョン: 20.x)
- npm (または yarn / pnpm)

### インストール (Installation)

1.  リポジトリをクローンします:
    ```bash
    git clone https://github.com/medi-y-sato/console-canvas.git
    cd console-canvas
    ```
2.  依存関係をインストールします:
    ```bash
    npm install
    # または yarn install
    # または pnpm install
    ```

### 開発サーバーの起動 (Running the Application)

開発サーバーを起動するには、以下のコマンドを実行します:

```bash
npm run dev
# または yarn dev
# または pnpm dev
```

通常、`http://localhost:5173` (または利用可能な別のポート) でアプリケーションがブラウザで開きます。

## 🚀 デプロイ (Deployment)

このアプリケーションは静的サイトとして設計されており、GitHub Pages などのサービスにデプロイできます。本番用にビルドするには:

```bash
npm run build
# または yarn build
# または pnpm build
```

ビルドされたファイルは `dist/` ディレクトリに出力されます。GitHub Pages への自動デプロイは、`.github/workflows/deploy.yml` で設定されています。

## 🐛 既知の問題 (Known Issues)

- **エディタのレイアウト崩れ:** 長いアルファベットの文字列（スペースを含まない単語）を入力すると、エディタが画面幅を超えて広がり、レイアウトが崩れる問題が完全に解決されていない可能性があります。

## 🤝 貢献 (Contributing)

貢献を歓迎します！バグ報告や機能提案は、GitHub の Issues をご利用ください。

## 📄 ライセンス (License)

[MIT License](LICENSE) <!-- If you have a LICENSE file, link it here -->
