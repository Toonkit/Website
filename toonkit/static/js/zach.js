$(document).ready(() => {
    var swapNavs = (showing, hidden) => {
        $(showing).slideUp();
        window.setTimeout(() => {
            $(hidden).slideDown();
        }, 200);
    };

    $('#cclogo').on('click', () => {
        if ($('.cc').css('display') == 'none') {
            console.log('cclogo');
            var [showing, hidden] = ['.ttr', '.cc'];
            swapNavs(showing, hidden);
        };
    });
    $('#ttrlogo').on('click', () => {
        if ($('.ttr').css('display') == 'none') {
            console.log('ttrlogo');
            var [showing, hidden] = ['.cc', '.ttr'];
            swapNavs(showing, hidden);
        };
    });
});