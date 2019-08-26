// event pada saat link di buka

$('.page-scroll').on('click', function(e){

// ambil isi href
var tujuan = $(this).attr('href');
//tangkap elemen ybs

var elemenTujuan = $(tujuan);


//pindahkan scrool
$('body').animate({
	scrolltop: elemenTujuan.offset().top -50

},v1250, 'easeinoutexpo');

e.preventdefault();


});