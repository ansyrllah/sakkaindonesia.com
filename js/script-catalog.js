const params = new URLSearchParams(window.location.search);
const category = params.get('category');

const jumlahKatalogRunning = 0;
const jumlahKatalogCycling = 0;
const jumlahKatalogBasket = 0;
const jumlahKatalogVolly = 3;
const jumlahKatalogFutsal = 78;
const jumlahKatalogGolf = 0;
const jumlahKatalogMotorcycle = 1;
const jumlahKatalogTableTennis = 0;
const jumlahKatalogArchery = 0;

// Data produk dengan kategori Running
function getKatalogRunning(jumlahKatalog) {
    const katalog = [];
    if (jumlahKatalog === 0) {
        return 0;
    } else {
        for (let i = 1; i <= jumlahKatalog; i++) {
            const produk_item = {
                name: `Katalog Running-${i}`,
                image: `assets/catalogs/running/running (${i}).png`,
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
                image: `assets/catalogs/cycling/cycling (${i}).png`,
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
                image: `assets/catalogs/basket/basket (${i}).png`,
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
                image: `assets/catalogs/volly/volly (${i}).png`,
            };
            katalog.push(produk_item);
        }
        return katalog;
    }
}

// Data produk dengan kategori Futsal
function getKatalogFutsal(jumlahKatalog) {
    const katalog = [];
    if (jumlahKatalog === 0) {
        return 0;
    } else {
        for (let i = 1; i <= jumlahKatalog; i++) {
            const produk_item = {
                name: `Katalog Futsal-${i}`,
                image: `assets/catalogs/futsal/futsal (${i}).png`,
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
                image: `assets/catalogs/golf/golf (${i}).png`,
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
                image: `assets/catalogs/motorcycle/motorcycle (${i}).png`,
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
                image: `assets/catalogs/table-tennis/table-tennis (${i}).png`,
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
                image: `assets/catalogs/archery/archery (${i}).png`,
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

        case 'futsal':
            products = getKatalogFutsal(jumlahKatalogFutsal);
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
                            <img src="${products.image}" alt="${products.name}" width="255">
                            <p> ${products.name} </p>
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