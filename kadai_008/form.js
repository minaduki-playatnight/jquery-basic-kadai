let output = "クリックしました！"

$(function(){
    //id要素がbtnの要素がクリックされたら
    $('.btn').on('click',function(){
        //Valueにクリックしました！を入れる
        $('.text-box').prop('value',output);
    });
});