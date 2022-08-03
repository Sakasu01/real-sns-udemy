const router = require("express").Router(); //Routerにルーティング設定

router.get("/", (req, res) => {
    res.send("posts router");
});

module.exports = router; //server.jsで呼び出せるようになる
