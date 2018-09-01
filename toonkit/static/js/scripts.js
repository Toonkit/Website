$(document).ready(() => {
    var showNav2Links = () => {
        if (localStorage.getItem("cc_true_ttr_false") !== null) {
            if (localStorage.getItem("cc_true_ttr_false") == 'true') {
                console.log("True dat")
                $('.ttr').css('display', 'none');
                $('.cc').css('display', 'list-item');
                $('#cclogo').addClass("selected");
            } else {
                console.log("Falso")
                $('.cc').css('display', 'none');
                $('.ttr').css('display', 'list-item');
                $('#ttrlogo').addClass("selected");
            };
        } else {
            console.log("Null")
            $('.ttr').css('display', 'none');
            $('.cc').css('display', 'list-item');
            $('#cclogo').addClass("selected");
        };
    };
    showNav2Links();

    function swapSelected(id_prev, id_new) {
        $(id_prev).removeClass("selected");
        $(id_new).addClass("selected");
    }

    var swapNavs = (showing, hidden) => {
        $(showing).slideUp();
        window.setTimeout(() => {
            $(hidden).slideDown();
        }, 400);
    };

    $('#cclogo').on('click', () => {
        if ($('.cc').css('display') == 'none') {
            console.log('cclogo');
            var [showing, hidden] = ['.ttr', '.cc'];
            swapNavs(showing, hidden);
            swapSelected('#ttrlogo', '#cclogo');
            localStorage.setItem('cc_true_ttr_false', true);
        };
    });

    $('#ttrlogo').on('click', () => {
        if ($('.ttr').css('display') == 'none') {
            console.log('ttrlogo');
            var [showing, hidden] = ['.cc', '.ttr'];
            swapNavs(showing, hidden);
            swapSelected('#cclogo', '#ttrlogo');
            localStorage.setItem('cc_true_ttr_false', false);

        };
    });
});