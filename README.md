# CreateReactApp + Express Example

create-react-app で作成した環境とBackendを連携するサンプルです。

## Setup

```sh
npm install
npm start
↓
# Express Api Server Running http://localhost:4000/
# Webpack Dev Server Running http://localhost:3000/
```
ブラウザで[http://localhost:3000/](http://localhost:3000/)を開き、フロントエンドの開発を行える。


- 開発環境では、APIサーバーにプロキシする。（package.jsonのproxy設定を参照）
- 本番環境では、```npm run buld```でビルドしたJSファイルを配信すれば良い。

## Reference

- [How to get "create-react-app" to work with your API](https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/)