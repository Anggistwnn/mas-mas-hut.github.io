function tampilkanSemuaMenu() {
    $.getJSON('data/pizza.json', function (data) {
        let menu = data.menu;
        $.each(menu, function (i, data) {
            $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3"><img src="img/menu/' + data.gambar + '" class=" card-img-top"alt="american favorite"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text"> ' + data.deskripsi + ' </p><h5>Rp ' + data.harga + '</h5><a href="#" class="btn btn-primary">Pesan Sekarang!</a></div></div></div>')
        });

    });
}

tampilkanSemuaMenu();

// membuat menu dinavbar menjadi active ketika diclick
$('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    // menambahkan kategori pada menu dan menampilkan nya di h1 menggunakn js
    let kategori = $(this).html();
    $('h1').html(kategori);

    if (kategori == 'All Menu') {
        tampilkanSemuaMenu();
        return;
    }


    $.getJSON('data/pizza.json', function (data) {
        let menu = data.menu;
        let content = '';

        $.each(menu, function (i, data) {
            if (data.kategori == kategori.toLowerCase()) {
                content += '<div class="col-md-4"><div class="card mb-3"><img src="img/menu/' + data.gambar + '" class=" card-img-top"alt="american favorite"><div class="card-body"><h5 class="card-title">' + data.nama + '</h5><p class="card-text"> ' + data.deskripsi + ' </p><h5>Rp ' + data.harga + '</h5><a href="#" class="btn btn-primary">Pesan Sekarang!</a></div></div></div>';
            }
        });
        $('#daftar-menu').html(content);
    });
});