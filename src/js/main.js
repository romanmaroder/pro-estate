$(function () {
    //magnific-popup
    var list;
    var loader;
    var button;
    $('.popup_about_link').magnificPopup({
        type: 'inline',
    })
    $(document).on('click', '.popup_about-dismiss', function (e) {
        e.preventDefault()
        $.magnificPopup.close()
    })

    //pagetoscroll
    $(window).on('load', function () {
        $('a,a[href=\'#top\'],a[rel=\'m_PageScroll2id\'],a.PageScroll2id').mPageScroll2id({
            highlightSelector: 'a',
        })
    })





    //     let files = [];


    //     button= document.getElementById('button');
    //     loader = document.getElementById('loader');
    //     list = document.getElementById('list');

    //     button.addEventListener('click', function () {
    //         loader.click();
    //     });

    //     loader.addEventListener('change', function () {
    //         for (let i = 0; i < loader.files.length; i++) {
    //             let file = loader.files[i]
    //             let item = document.createElement('div')
    //             item.classList.add('order__form-close-file')

    //             files.push(file)
    //             list.appendChild(item)

    //             item.textContent = file.name
    //             item.addEventListener('click', function () {
    //                 // files = files.filter(f => f.name !== file.name)
    //                 files = files.filter(function(f){return f.name !== file.name})

    //                 item.remove()
    //             })
    //         }

    //         loader.value = ''

    //     });

    // });


})
var files = [];
var button = document.getElementById('button');
var loader = document.getElementById('loader');
button.addEventListener('click', function (event) {
    loader.click();
});
loader.addEventListener('change', function (event) {
    var _loop = function _loop(i) {
        var file = loader.files[i];
        var item = document.createElement('div');
        var list = document.getElementById('list');
        item.classList.add('order__form-close-file');
        files.push(file);
        list.appendChild(item);
        item.textContent = file.name;
        item.addEventListener('click', function (event) {
            files = files.filter(function (f) {
                return f.name !== file.name;
            });
            item.parentNode.removeChild(item);
        });
    };
    for (var i = 0; i < loader.files.length; i++) {
        _loop(i);
    }
    loader.value = '';

});