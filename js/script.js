$(document).ready(function () {
    $('.kategori button').click(function () {
        var kategori = $(this).data('kategori');

        // menampilkan gambar produk berdasarkan kategori
        if (kategori == 'semua') {
            $('.produk').show();
        } else {
            $('.produk').hide();
            $('.kategori-' + kategori).show();
        }

        // menandai tombol yang dipilih
        $('.kategori button').removeClass('active');
        $(this).addClass('active');
    });
});
