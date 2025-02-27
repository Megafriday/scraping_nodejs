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
|promise|index02.js|自分自身で考えたrequestを使ったもの（期待する動作しない）|
|request-promise|index03.js|自分自身で考えたrequest-promiseを使ったもの（期待する動作しない）|
|teratail|index04.js|teratailのrequestを使った回答|
|teratail2|index05.js|teratailのrequest-promiseを使った回答|
