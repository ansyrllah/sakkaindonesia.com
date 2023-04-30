// $(document).ready(function () {
//     $('.kategori button').click(function () {
//         var kategori = $(this).data('kategori');

//         // menampilkan gambar produk berdasarkan kategori
//         if (kategori == 'semua') {
//             $('.produk').show();
//         } else {
//             $('.produk').hide();
//             $('.kategori-' + kategori).show();
//         }

//         // menandai tombol yang dipilih
//         $('.kategori button').removeClass('active');
//         $(this).addClass('active');
//     });
// });

// data
const jumlahKerah = 14;
const jumlahFont = 25;

// JENIS KERAH
// bikin array katalog kerah
function getGambarKerah(jumlahKerah) {
    const katalog = [];
    if (jumlahKerah === 0) {
        return 0;
    } else {
        for (let i = 1; i <= jumlahKerah; i++) {
            const kerah_item = {
                name: `Jenis Kerah-${i}`,
                image: `assets/image/jenis-kerah/jenis-kerah (${i}).jpg`,
            };
            katalog.push(kerah_item);
        }
        return katalog;
    }
}

// tampilkan semua gambar jenis kerah
let products = getGambarKerah(jumlahKerah);
const jenisKerahSection = document.getElementById('jenis-kerah');
jenisKerahSection.innerHTML = products
    .map(
        (products) => `
                    <div class="card">
                        <img src="${products.image}" width="262px" class="card-img-top img-scroll" alt="${products.name}" />
                        <div class="card-body">
                            <h5 class="card-title text-capitalize">${products.name}</h5>
                        </div>
                    </div>
                `
    )
    .join(' ');

// JENIS FONT
// bikin array katalog font
function getGambarFont(jumlahFont) {
    const katalogFont = [];
    if (jumlahFont === 0) {
        return 0;
    } else {
        for (let i = 1; i <= jumlahFont; i++) {
            const fontItem = {
                name: `Jenis Font-${i}`,
                image: `assets/image/jenis-font/jenis-font (${i}).jpg`,
            };
            katalogFont.push(fontItem);
        }
        return katalogFont;
    }
}

// tampilkan semua gambar jenis kerah
let fonts = getGambarFont(jumlahFont);
const jenisFontSection = document.getElementById('jenis-font');
jenisFontSection.innerHTML = fonts
    .map(
        (font) => `
                    <div class="card">
                        <img src="${font.image}" width="262px" class="card-img-top img-scroll" alt="${font.name}" />
                        <div class="card-body">
                            <h5 class="card-title text-capitalize">${font.name}</h5>
                        </div>
                    </div>
                `
    )
    .join(' ');
