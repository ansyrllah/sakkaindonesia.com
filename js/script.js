
// data
const jumlahKerah = 14;

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

