## 概要

jsdomによるスクレイピング


## 実行方法

node index.js > title.txt


## 参考

https://qiita.com/ledsun/items/0965a60f9bdff04f2fa0


## branchの説明
いちいち `git switch` するのも面倒なので、ファイルで分けた。
master ブランチのファイルで一括して内容が確認出来る。

|branch名|ファイル名|説明|
|---|---|---|
|master|index01.js|teratailに質問をしたもの（期待する動作しない）|
|promise|index02.js|自分自身で考えたaxiosを使ったもの（期待する動作しない）|
|request-promise|index03.js|自分自身で考えたaxiosを使ったもの（期待する動作しない）|
|teratail|index04.js|teratailのaxiosを使った回答|
|teratail2|index05.js|teratailのaxiosを使った回答|

## 依存関係の更新について

依存関係の競合を解決するために、以下の変更を行いました：

1. `request` パッケージ（非推奨）を `axios` に置き換え
2. `request-promise` と `request-promise-native` も `axios` に置き換え

これにより、`tough-cookie` の依存関係の競合が解消され、セキュリティ脆弱性も修正されました。
