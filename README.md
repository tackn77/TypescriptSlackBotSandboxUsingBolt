# TypeScriptを利用したBoltの勉強

## 環境

リモート環境にSSHでアクセスして、Dockerを用いてTypeScript開発について学ぶ

- RaspberryPi4
  - Linux deskpi 5.10.0-11-arm64 #1 SMP Debian 5.10.92-1 (2022-01-18) aarch64 GNU/Linux
- Docker
  - Docker version 20.10.12, build e91ed57
  - Docker Image
    - arm64v8/node:lts-alpine
      - Node.js
        - v16.14.0
- VSCode
  - 1.64.2
  - 拡張
    - Japanese Languge Pack
    - Remote - Containers
    - Remote - SSH
    - Remote - SSH: Editing Configuration Files
    - vscode-icons
    - Auto Add Brackets in String
    - GitLens
    - Markdown All in One
    - Markdown Preview Enhanced
    - markdownlint
    - Path Autocomplete

## フォルダ構成

- .devcontainer
  - VSCodeのRemote - Containersで利用する設定ファイル
    - Dockerfileの指定や、Portのマッピングなど設定
    - ポートはホストOSではなく、VSCodeを起動している端末にフォワードされローカルで確認が出来た。
- .vscode
  - launch.json
    - 実行とデバッグ画面で実行する設定を記述出来る。
    - BuildしてTypeScriptをJavaScriptファイルにする設定
    - ts-nodeを利用してTypeScriptから直接実行する設定
- node_modules
  - package.json で管理してプロジェクトで利用しているnodejsのモジュール
- src
  - ソースコードを記述するフォルダ
- .env
  - 環境変数に設定してプログラムに渡すTOKENなどを記載しているファイル
  - dotenvモジュールを利用して.envファイルを読み込める
  - git管理にはしない。
- .env.sample
  - .env をgit管理しないので、設定項目ひな型として項目名のみ記載して管理
- .eslintc
  - lintの設定
- .gitignore
  - git管理しないファイルの定義ファイル
- Dockerfile
  - コンテナ設定ファイル
- package-lock.json
  - pakage.json管理されているモジュールの利用バージョンを固定
- package.json
  - npmで利用しているモジュール定義
  - 必要なバージョンが設定される。利用中バージョンはpackage-lock.jsonで管理
- README.md
  - このファイル
- tsconfig.eslint.json
  - TypeScriptファイルへesLintの設定ファイル
- tsconfig.json
  - TypeScriptについての設定ファイル

## launch.json memo

| 置換変数         | 説明                                           |
| :--------------- | :--------------------------------------------- |
| ${workspaceRoot} | VisualStudioCodeで開いたフォルダのパス         |
| ${file}          | 現在アクティブなファイル                       |
| ${fileBasename}  | 現在アクティブなファイルのベース名             |
| ${fileDirname}   | 現在アクティブなファイルのディレクトリ名       |
| ${fileExtname}   | 現在アクティブなファイルの拡張子               |
| ${CWD}           | 起動時にタスクランナーの現在の作業ディレクトリ |

### tsconfig.json memo

- ビルドしたjsファイルの設定確認
  - [Node Green](https://node.green/)
    - Node.jsでどの規格まで対応している確認が出来る
- tsconfigの設定の際に参考にしたサイト
  - [tsconfig.jsonのよく使いそうなオプションを理解する](https://zenn.dev/chida/articles/bdbcd59c90e2e1)
- [スキーマ](http://json.schemastore.org/tsconfig)

## Bolt

- Slack Botのためのnode.jsのライブラリ
- 参考にしたサイト
  - [Bolt 入門ガイド](https://slack.dev/bolt-js/ja-jp/tutorial/getting-started)
  - [自宅Slackサーバーの作り方②〜Bolt-jsをソケットモード（WebSocket）で試す](https://deep.tacoskingdom.com/blog/156)

## Slack

- [tacknsoft](https://tacknsoft.slack.com/)
  - 勉強用ワークスペース
- [bolt@tacknsoft](https://app.slack.com/app-settings/T01LTRWJDJQ/A032GVDEWTG/)
  - 勉強のために作成したBot設定画面

## Links

- [TypeScript](https://www.typescriptlang.org/)
- [Slack: Web API methods](https://api.slack.com/methods)
- [Slack: Bolt Web API](https://slack.dev/bolt-js/ja-jp/concepts#web-api)
- [Slash Commands](https://api.slack.com/apps/A032GVDEWTG/slash-commands)
