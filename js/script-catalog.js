const params = new URLSearchParams(window.location.search);
const category = params.get('category');

const jumlahKatalogRunning = 0;
const jumlahKatalogCycling = 0;
const jumlahKatalogBasket = 0;
const jumlahKatalogVolly = 3;
const jumlahKatalogFutsalSoccer = 83;
const jumlahKatalogGolf = 0;
const jumlahKatalogMotorcycle = 1;
const jumlahKatalogTableTennis = 0;
const jumlahKatalogArchery = 0;
const jumlahKatalogCasual = 4;
const jumlahKatalogEvent = 14;
const jumlahKatalogKoko = 32;
const jumlahKatalogShirt = 3;
const jumlahKatalogBadminton = 4;
const jumlahKatalogSoccer = 0;
const jumlahKatalogVarsity = 0;
const jumlahKatalogJaket = 0;
const jumlahKatalogRompi = 0;
const jumlahKatalogKemeja = 46;

// Data produk dengan kategori Running
function getKatalogRunning(jumlahKatalog) {
    const katalog = [];
    if (jumlahKatalog === 0) {
        return 0;
    } else {
        for (let i = 1; i <= jumlahKatalog; i++) {
            const produk_item = {
                name: `Katalog Running-${i}`,
                image: `assets/catalogs/running/running (${i}).webp`,
            };
            katalog.push(produk_item);
        }
        return katalog;
    }
}

// Data produk dengan kategori Cycling
function getKatalogCycling(jumlahKatalog) {
    const katalog = [];
    if (jumlahKatalog === 0) {
        return 0;
    } else {
        for (let i = 1; i <= jumlahKatalog; i++) {
            const produk_item = {
                name: `Katalog Cycling-${i}`,
                image: `assets/catalogs/cycling/cycling (${i}).webp`,
            };
            katalog.push(produk_item);
        }
        return katalog;
    }
}

// Data produk dengan kategori Basket
function getKatalogBasket(jumlahKatalog) {
    const katalog = [];
    if (jumlahKatalog === 0) {
        return 0;
    } else {
        for (let i = 1; i <= jumlahKatalog; i++) {
            const produk_item = {
                name: `Katalog Basket-${i}`,
                image: `assets/catalogs/basket/basket (${i}).webp`,
            };
            katalog.push(produk_item);
        }
        return katalog;
    }
}
// Data produk dengan kategori Rompi
function getKatalogRompi(jumlahKatalog) {
    const katalog = [];
    if (jumlahKatalog === 0) {
        return 0;
    } else {
        for (let i = 1; i <= jumlahKatalog; i++) {
            const produk_item = {
                name: `Katalog Rompi-${i}`,
                image: `assets/catalogs/rompi/rompi (${i}).webp`,
            };
            katalog.push(produk_item);
        }
        return katalog;
    }
}
// Data produk dengan kategori Jaket
function getKatalogJaket(jumlahKatalog) {
    const katalog = [];
    if (jumlahKatalog === 0) {
        return 0;
    } else {
        for (let i = 1; i <= jumlahKatalog; i++) {
            const produk_item = {
                name: `Katalog Jaket-${i}`,
                image: `assets/catalogs/jaket/jaket (${i}).webp`,
            };
            katalog.push(produk_item);
        }
        return katalog;
    }
}
// Data produk dengan kategori Kemeja
function getKatalogKemeja(jumlahKatalog) {
    const katalog = [];
    if (jumlahKatalog === 0) {
        return 0;
    } else {
        for (let i = 1; i <= jumlahKatalog; i++) {
            const produk_item = {
                name: `Katalog Kemeja-${i}`,
                image: `assets/catalogs/kemeja/kemeja (${i}).webp`,
            };
            katalog.push(produk_item);
        }
        return katalog;
    }
}
// Data produk dengan kategori Varsity
function getKatalogVarsity(jumlahKatalog) {
    const katalog = [];
    if (jumlahKatalog === 0) {
        return 0;
    } else {
        for (let i = 1; i <= jumlahKatalog; i++) {
            const produk_item = {
                name: `Katalog Varsity-${i}`,
                image: `assets/catalogs/varsity/varsity (${i}).webp`,
            };
            katalog.push(produk_item);
        }
        return katalog;
    }
}

// Data produk dengan kategori Volly
function getKatalogVolly(jumlahKatalog) {
    const katalog = [];
    if (jumlahKatalog === 0) {
        return 0;
    } else {
        for (let i = 1; i <= jumlahKatalog; i++) {
            const produk_item = {
                name: `Katalog Volly-${i}`,
                image: `assets/catalogs/volly/volly (${i}).webp`,
            };
            katalog.push(produk_item);
        }
        return katalog;
    }
}

// Data produk dengan kategori FutsalSoccer
function getKatalogFutsalSoccer(jumlahKatalog) {
    const katalog = [];
    if (jumlahKatalog === 0) {
        return 0;
    } else {
        for (let i = 1; i <= jumlahKatalog; i++) {
            const produk_item = {
                name: `Katalog FutsalSoccer-${i}`,
                image: `assets/catalogs/futsal-soccer/futsal-soccer (${i}).webp`,
            };
            katalog.push(produk_item);
        }
        return katalog;
    }
}

// Data produk dengan kategori Golf
function getKatalogGolf(jumlahKatalog) {
    const katalog = [];
    if (jumlahKatalog === 0) {
        return 0;
    } else {
        for (let i = 1; i <= jumlahKatalog; i++) {
            const produk_item = {
                name: `Katalog Golf-${i}`,
                image: `assets/catalogs/golf/golf (${i}).webp`,
            };
            katalog.push(produk_item);
        }
        return katalog;
    }
}

// Data produk dengan kategori Motorcycle
function getKatalogMotorcycle(jumlahKatalog) {
    const katalog = [];
    if (jumlahKatalog === 0) {
        return 0;
    } else {
        for (let i = 1; i <= jumlahKatalog; i++) {
            const produk_item = {
                name: `Katalog Motorcycle-${i}`,
                image: `assets/catalogs/motorcycle/motorcycle (${i}).webp`,
            };
            katalog.push(produk_item);
        }
        return katalog;
    }
}

// Data produk dengan kategori Table Tennis
function getKatalogTableTennis(jumlahKatalog) {
    const katalog = [];
    if (jumlahKatalog === 0) {
        return 0;
    } else {
        for (let i = 1; i <= jumlahKatalog; i++) {
            const produk_item = {
                name: `Katalog Table Tennis-${i}`,
                image: `assets/catalogs/table-tennis/table-tennis (${i}).webp`,
            };
            katalog.push(produk_item);
        }
        return katalog;
    }
}

// Data produk dengan kategori Archery
function getKatalogArchery(jumlahKatalog) {
    const katalog = [];
    if (jumlahKatalog === 0) {
        return 0;
    } else {
        for (let i = 1; i <= jumlahKatalog; i++) {
            const produk_item = {
                name: `Katalog Archery-${i}`,
                image: `assets/catalogs/archery/archery (${i}).webp`,
            };
            katalog.push(produk_item);
        }
        return katalog;
    }
}
// Data produk dengan kategori Casual
function getKatalogCasual(jumlahKatalog) {
    const katalog = [];
    if (jumlahKatalog === 0) {
        return 0;
    } else {
        for (let i = 1; i <= jumlahKatalog; i++) {
            const produk_item = {
                name: `Katalog Casual-${i}`,
                image: `assets/catalogs/casual/casual (${i}).webp`,
            };
            katalog.push(produk_item);
        }
        return katalog;
    }
}
// Data produk dengan kategori Event
function getKatalogEvent(jumlahKatalog) {
    const katalog = [];
    if (jumlahKatalog === 0) {
        return 0;
    } else {
        for (let i = 1; i <= jumlahKatalog; i++) {
            const produk_item = {
                name: `Katalog Event-${i}`,
                image: `assets/catalogs/event/event (${i}).webp`,
            };
            katalog.push(produk_item);
        }
        return katalog;
    }
}
// Data produk dengan kategori Koko
function getKatalogKoko(jumlahKatalog) {
    const katalog = [];
    if (jumlahKatalog === 0) {
        return 0;
    } else {
        for (let i = 1; i <= jumlahKatalog; i++) {
            const produk_item = {
                name: `Katalog Koko-${i}`,
                image: `assets/catalogs/koko/koko (${i}).webp`,
            };
            katalog.push(produk_item);
        }
        return katalog;
    }
}
// Data produk dengan kategori Shirt
function getKatalogShirt(jumlahKatalog) {
    const katalog = [];
    if (jumlahKatalog === 0) {
        return 0;
    } else {
        for (let i = 1; i <= jumlahKatalog; i++) {
            const produk_item = {
                name: `Katalog Shirt-${i}`,
                image: `assets/catalogs/shirt/shirt (${i}).webp`,
            };
            katalog.push(produk_item);
        }
        return katalog;
    }
}
// Data produk dengan kategori Badminton
function getKatalogBadminton(jumlahKatalog) {
    const katalog = [];
    if (jumlahKatalog === 0) {
        return 0;
    } else {
        for (let i = 1; i <= jumlahKatalog; i++) {
            const produk_item = {
                name: `Katalog Badminton-${i}`,
                image: `assets/catalogs/badminton/badminton (${i}).webp`,
            };
            katalog.push(produk_item);
        }
        return katalog;
    }
}
// Data produk dengan kategori Soccer
function getKatalogSoccer(jumlahKatalog) {
    const katalog = [];
    if (jumlahKatalog === 0) {
        return 0;
    } else {
        for (let i = 1; i <= jumlahKatalog; i++) {
            const produk_item = {
                name: `Katalog Soccer-${i}`,
                image: `assets/catalogs/soccer/soccer (${i}).webp`,
            };
            katalog.push(produk_item);
        }
        return katalog;
    }
}

// Fungsi untuk menampilkan produk berdasarkan kategori yang dipilih
function showProducts(category) {
    let products;
    switch (category) {
        case 'running':
            products = getKatalogRunning(jumlahKatalogRunning);
            break;

        case 'cycling':
            products = getKatalogCycling(jumlahKatalogCycling);
            break;

        case 'basket':
            products = getKatalogBasket(jumlahKatalogBasket);
            break;

        case 'volly':
            products = getKatalogVolly(jumlahKatalogVolly);
            break;

        case 'futsal-soccer':
            products = getKatalogFutsalSoccer(jumlahKatalogFutsalSoccer);
            break;

        case 'golf':
            products = getKatalogGolf(jumlahKatalogGolf);
            break;

        case 'motorcycle':
            products = getKatalogMotorcycle(jumlahKatalogMotorcycle);
            break;

        case 'table-tennis':
            products = getKatalogTableTennis(jumlahKatalogTableTennis);
            break;

        case 'archery':
            products = getKatalogArchery(jumlahKatalogArchery);
            break;
        case 'casual':
            products = getKatalogCasual(jumlahKatalogCasual);
            break;
        case 'event':
            products = getKatalogEvent(jumlahKatalogEvent);
            break;
        case 'koko':
            products = getKatalogKoko(jumlahKatalogKoko);
            break;
        case 'shirt':
            products = getKatalogShirt(jumlahKatalogShirt);
            break;
        case 'badminton':
            products = getKatalogBadminton(jumlahKatalogBadminton);
            break;
        case 'soccer':
            products = getKatalogSoccer(jumlahKatalogSoccer);
            break;
        case 'rompi':
            products = getKatalogRompi(jumlahKatalogRompi);
            break;
        case 'varsity':
            products = getKatalogVarsity(jumlahKatalogVarsity);
            break;
        case 'kemeja':
            products = getKatalogKemeja(jumlahKatalogKemeja);
            break;

        default:
            // products = 0;
            break;
    }

    
    // Tampilkan produk dalam bentuk gambar dan nama produk
    const catalogList = document.getElementById('catalogs');
    if (products === 0) {
        catalogList.innerHTML = `
                <div class="col text-center">
                    <h5> Katalog <span class="text-capitalize"> ${category} </span> Tidak Ditemukan </h5>
                </div>
            `;
    } else {
        catalogList.innerHTML = products
            .map(
                (products) => `
                        <div class="col mb-3" >
                            <img class="catalog-item" src="${products.image}" alt="${products.name}" width="255">
                            <h5 class="card-title"> ${products.name} </h5>
                        </div>
                    `
            )
            .join('');
    }
    const catalogTitle = document.getElementById('catalogsTitle');
    catalogTitle.innerHTML = `
                    <div class="col mt-5 mb-4">
                        <h2 class="text-center text-capitalize">Katalog ${category} Terbaik</h2>
                    </div>
                `;
}

showProducts(category);

// for modals
// ambil element modal yang dibutuhkan
var modal = document.getElementById('myModal');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');
var images = document.querySelectorAll('.catalog-item');
// tambahkan event listener untuk setiap gambar
images.forEach(function (image) {
    image.addEventListener('click', function () {
        modal.style.display = 'block'; // untuk menampilkan modal
        modalImg.src = this.src; // set gambar modal sesuai dengan yang di klik

        captionText.innerHTML = this.alt;
        // captionText.innerHTML = this.nextElementSibling.querySelector('.card-title').innerHTML;
        // set caption modal sesuai dengan caption gambar yang diklik
    });
});
// tambahkan event listener untuk tombol close di modal
var closeBtn = document.getElementsByClassName('close')[0];
closeBtn.addEventListener('click', function () {
    modal.style.display = 'none'; // akan menyembunyikan modal saat tombol di klik
});
