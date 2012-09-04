var url = window.location.href;

if (url.indexOf('http://vnexpress.net') != -1){
    $(document).ready(function(){
        $('#linksiteEH').remove();

        var arr = [];

        $('#content').find('.box-item').filter(function(index) {
            return (index != 2) && (index != 5);
        }).each(function(){
            arr.push($(this));
        });

        for (i=0; i<arr.length; i++){
            arr[i].remove();
        }
        $('#BASIC_LOGO').remove();
        $("[id^=FIXED_FLOAT_BANNER]").remove();
        $("div.adv-title").remove();
        $("div.adv-header").remove();
        $('.promo').remove();
        $('#header').remove();
        $('.smenu-home').remove();


        $('.content-left').remove();
        $('#divL').remove();
        $('#divR').remove();
        $('#ARTICLE_BANNER').remove();
        $('#BALLOON_BANNER_CPM').remove();
    });
}
