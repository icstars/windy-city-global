$(function () {
    var _ul = $('.view-content ul');
    var lists = _ul.find('li');
    var itemHeight = lists.eq(0).outerHeight();
    var arr = [];
    lists.each(function (index, value) {
        arr.push({
            dataPlus: $(this).attr('data-plus'),
            dataStatus: $(this).attr('data-status'),
            dataHTML: $(this)[0].outerHTML
        })
    });


    function moveLis(arr) {
        var str = '';
        lists = _ul.find('li');
        $.each(arr, function (idx, val) {
            str += val.dataHTML;

            lists.each(function (i, v) {
                if ($(this).attr('data-plus') == val.dataPlus && (idx - i) != 0) {
                    v.style.transition = 'transform .5s ease-out';
                    v.style.transform = 'translate3d(0,' + itemHeight * (idx - i) + 'px,0)';
                }
            })
        });

        setTimeout(function () {
            _ul.html(str);
        }, 510)
    }

    _ul.on('click', 'li', function () {
        var ds = Number($(this).attr('data-status'));
        var start = $(this).index();
        var isOpen = _ul.find('[data-status=1]').length;
        var tmp = arr.splice(start, 1)[0];
        if (ds == 1) {
            tmp.dataStatus = 0;
            tmp.dataHTML = tmp.dataHTML.replace('slide on', 'slide').replace('data-status="1"', 'data-status="0"');
            arr.push(tmp);
        } else {
            tmp.dataStatus = 1;
            tmp.dataHTML = tmp.dataHTML.replace(/\s?slide\s?/, 'slide on').replace('data-status="0"', 'data-status="1"');
            arr.splice(isOpen, 0, tmp);
        }

        moveLis(arr);

        ds ? (ds = 0, $(this).find('.slide').removeClass('on')) : (ds = 1, $(this).find('.slide').addClass('on'));
        $(this).attr('data-status', ds);
    })
});