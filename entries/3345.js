(function($){

/* ==================================================
    Lock Screen
================================================== */
// 記事編集画面かつステータスが公開のときに限定する
if (mtappVars.screen_id == 'edit-entry' && mtappVars.status == 2) {

    // ロックスクリーン用のアイコンを挿入
    $('body').append('<div id="mtapp-lock-screen"><i id="mtapp-lock-icon" class="fa fa-lock fa-5x"></i></div>');

    // ロックアイコンに関する動作
    $('#mtapp-lock-icon').on({

        // マウスを乗せたら鍵が開いたアイコンにする
        mouseenter: function(){
            $(this).toggleClass('fa-lock').toggleClass('fa-unlock');
        },

        // マウスを離したら鍵が開じたアイコンに戻す
        mouseleave: function(){
            $(this).toggleClass('fa-lock').toggleClass('fa-unlock');
        },

        // クリックしたときの動作
        click: function(){

            // 簡易パスワードは「admin」
            var password = 'admin';

            // プロンプトに入力された値を変数に保存
            var input = prompt('Type the password.');

            // 入力された値によって動作を切り替える
            switch (input) {

                // パスワードと一致するとき、ロックスクリーンを非表示
                case password:
                    this.parentNode.style.display = 'none';
                    break;

                // キャンセルされたとき、何もしない
                case null:
                    break;

                // 間違った値が入力されたとき、アラートを表示
                default:
                    this.parentNode.style.backgroundColor = '#F6BFBC';
                    alert('Invalid password.');
                    this.parentNode.removeAttribute('style');
            }
        }
    });
}
/*  Lock Screen  */

})(jQuery);