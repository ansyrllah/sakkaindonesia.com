
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
const jenisKerahSection = document.getElementById('images-jenis-kerah');
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



// panah 
// $(document).ready(function() {
//     var scrollWrapper = $('.scrolling-wrapper');
//     var cards = $('.scrolling-wrapper .card');
//     var cardWidth = cards.first().outerWidth();
//     var cardMarginRight = parseInt(cards.first().css('margin-right'));
//     var cardsTotalWidth = (cardWidth + cardMarginRight) * cards.length;
//     var wrapperWidth = scrollWrapper.outerWidth();
//     var scrollLeftMax = cardsTotalWidth - wrapperWidth;
//     var scrollLeftMin = 0;
  
//     function scrollCardsLeft(scrollLeft) {
//       scrollWrapper.animate({
//         scrollLeft: scrollLeft
//       }, 500);
//     } 
  
//     $('.scroll-btn.next').click(function() {
//         var scrollingWrapperId = $(this).data('scrolling-wrapper');
//         var scrollWrapper = $('#' + scrollingWrapperId + ' .scrolling-wrapper')
//         var cards = scrollWrapper.find('.card');
//         var cardWidth = cards.first().outerWidth();
//         var scrollLeft = scrollWrapper.scrollLeft() + cardWidth + cardMarginRight;
//         if (scrollLeft > scrollLeftMax) {
//             scrollLeft = scrollLeftMax;
//         }
//         scrollCardsLeft(scrollLeft);
//         });
//   });


//   $('.scroll-btn.prev').click(function() {
//     var scrollingWrapperId = $(this).data('scrolling-wrapper');
//     var scrollWrapper = $('#' + scrollingWrapperId + ' .scrolling-wrapper')
//     var scrollLeft = scrollWrapper.scrollLeft() - cardWidth - cardMarginRight;
//     if (scrollLeft < scrollLeftMin) {
//         scrollLeft = scrollLeftMin;
//     }
//     scrollCardsLeft(scrollLeft);
// });


// $(document).ready(function() {
//     $('.scroll-btn.prev').click(function() {
//       var scrollWrapper = $(this).closest('.scrolling-wrapper');
//       var cards = scrollWrapper.find('.card');
//       var cardWidth = cards.first().outerWidth();
//       var cardMarginRight = parseInt(cards.first().css('margin-right'));
//       var scrollLeft = scrollWrapper.scrollLeft() - cardWidth - cardMarginRight;
//       var scrollLeftMin = 0;
      
//       if (scrollLeft < scrollLeftMin) {
//         scrollLeft = scrollLeftMin;
//       }
      
//       scrollWrapper.animate({
//         scrollLeft: scrollLeft
//       }, 500);
//     });
  
//     $('.scroll-btn.next').click(function() {
//       var scrollWrapper = $(this).closest('.scrolling-wrapper');
//       var cards = scrollWrapper.find('.card');
//       var cardWidth = cards.first().outerWidth();
//       var cardMarginRight = parseInt(cards.first().css('margin-right'));
//       var scrollLeft = scrollWrapper.scrollLeft() + cardWidth + cardMarginRight;
//       var wrapperWidth = scrollWrapper.outerWidth();
//       var cardsTotalWidth = (cardWidth + cardMarginRight) * cards.length;
//       var scrollLeftMax = cardsTotalWidth - wrapperWidth;
      
//       if (scrollLeft > scrollLeftMax) {
//         scrollLeft = scrollLeftMax;
//       }
      
//       scrollWrapper.animate({
//         scrollLeft: scrollLeft
//       }, 500);
//     });
//   });

// $(document).ready(function() {
//     $('.scroll-btn.prev').click(function() {
//       var scrollingWrapperId = $(this).data('scrolling-wrapper');
//       var scrollWrapper = $('#' + scrollingWrapperId + ' .scrolling-wrapper');
//       var cards = scrollWrapper.find('.card');
//       var cardWidth = cards.first().outerWidth(true);
//       var cardMarginRight = parseInt(cards.first().css('margin-right'));
//       var scrollLeft = scrollWrapper.scrollLeft() - cardWidth - cardMarginRight;
//       var scrollLeftMin = 0;
  
//       if (scrollLeft < scrollLeftMin) {
//         scrollLeft = scrollLeftMin;
//       }
  
//       scrollWrapper.animate({
//         scrollLeft: scrollLeft
//       }, 500);
//     });
  
//     $('.scroll-btn.next').click(function() {
//       var scrollingWrapperId = $(this).data('scrolling-wrapper');
//       var scrollWrapper = $('#' + scrollingWrapperId + ' .scrolling-wrapper');
//       var cards = scrollWrapper.find('.card');
//       var cardWidth = cards.first().outerWidth(true);
//       var cardMarginRight = parseInt(cards.first().css('margin-right'));
//       var scrollLeft = scrollWrapper.scrollLeft() + cardWidth + cardMarginRight;
//       var wrapperWidth = scrollWrapper.outerWidth();
//       var cardsTotalWidth = (cardWidth + cardMarginRight) * cards.length;
//       var scrollLeftMax = cardsTotalWidth - wrapperWidth;
  
//       if (scrollLeft > scrollLeftMax) {
//         scrollLeft = scrollLeftMax;
//       }
  
//       scrollWrapper.animate({
//         scrollLeft: scrollLeft
//       }, 500);
//     });
//   });

// $(document).ready(function() {
//     $('.scroll-btn.prev').click(function() {
//       var scrollingWrapperId = $(this).data('scrolling-wrapper');
//       var scrollWrapper = $('#' + scrollingWrapperId);
//       var cards = scrollWrapper.find('.card');
//       var cardWidth = cards.first().outerWidth(); // Gunakan true untuk memperhitungkan margin
//       var cardMarginRight = parseInt(cards.first().css('margin-right'));
//       var scrollLeft = scrollWrapper.scrollLeft() - cardWidth - cardMarginRight;
//       var scrollLeftMin = 0;
  
//       if (scrollLeft < scrollLeftMin) {
//         scrollLeft = scrollLeftMin;
//       }
  
//       scrollWrapper.animate({
//         scrollLeft: scrollLeft
//       }, 500);
//     });
  
//     $('.scroll-btn.next').click(function() {
//       var scrollingWrapperId = $(this).data('scrolling-wrapper');
//       var scrollWrapper = $('#' + scrollingWrapperId + ' .scrolling-wrapper');
//       var cards = scrollWrapper.find('.card');
//       var cardWidth = cards.first().outerWidth(); // Gunakan true untuk memperhitungkan margin
//       var cardMarginRight = parseInt(cards.first().css('margin-right'));
//       var scrollLeft = scrollWrapper.scrollLeft() + cardWidth + cardMarginRight;
//       var wrapperWidth = scrollWrapper.outerWidth();
//       var cardsTotalWidth = (cardWidth + cardMarginRight) * cards.length;
//       var scrollLeftMax = cardsTotalWidth - wrapperWidth;
  
//       if (scrollLeft > scrollLeftMax) {
//         scrollLeft = scrollLeftMax;
//       }
  
//       scrollWrapper.animate({
//         scrollLeft: scrollLeft
//       }, 500);
//     });
//   });
  
$(document).ready(function() {
    $('.scroll-btn.prev').click(function() {
      var scrollingWrapperId = $(this).data('scrolling-wrapper');
      var scrollWrapper = $('#' + scrollingWrapperId);
      var scrollLeft = scrollWrapper.scrollLeft() - scrollWrapper.width()/4;
      var scrollLeftMin = 0;
  
      if (scrollLeft < scrollLeftMin) {
        scrollLeft = scrollLeftMin;
      }
  
      scrollWrapper.animate({
        scrollLeft: scrollLeft
      }, 500);
    });
  
    $('.scroll-btn.next').click(function() {
      var scrollingWrapperId = $(this).data('scrolling-wrapper');
      var scrollWrapper = $('#' + scrollingWrapperId);
      var scrollLeft = scrollWrapper.scrollLeft() + scrollWrapper.width()/4;
      var scrollWidth = scrollWrapper[0].scrollWidth;
      var wrapperWidth = scrollWrapper.width();
      var scrollLeftMax = scrollWidth - wrapperWidth;
  
      if (scrollLeft > scrollLeftMax) {
        scrollLeft = scrollLeftMax;
      }
  
      scrollWrapper.animate({
        scrollLeft: scrollLeft
      }, 500);
    });
  });

// $(document).ready(function() {
//     $('.scroll-btn.prev').click(function() {
//       var scrollingWrapperId = $(this).data('scrolling-wrapper');
//       var scrollWrapper = $('#' + scrollingWrapperId).find('.scrolling-wrapper');
//       var scrollLeft = scrollWrapper.scrollLeft() - scrollWrapper.width() / 2;
//       var scrollLeftMin = 0;
  
//       if (scrollLeft < scrollLeftMin) {
//         scrollLeft = scrollLeftMin;
//       }
  
//       scrollWrapper.animate({
//         scrollLeft: scrollLeft
//       }, 500);
//     });
  
//     $('.scroll-btn.next').click(function() {
//       var scrollingWrapperId = $(this).data('scrolling-wrapper');
//       var scrollWrapper = $('#' + scrollingWrapperId).find('.scrolling-wrapper');
//       var scrollLeft = scrollWrapper.scrollLeft() + scrollWrapper.parent().width() / 2;
//       var scrollWidth = scrollWrapper[0].scrollWidth;
//       var wrapperWidth = scrollWrapper.width();
//       var scrollLeftMax = scrollWidth - wrapperWidth;
  
//       if (scrollLeft > scrollLeftMax) {
//         scrollLeft = scrollLeftMax;
//       }
  
//       scrollWrapper.animate({
//         scrollLeft: scrollLeft
//       }, 500);
//     });
//   });

// $(document).ready(function() {
//     $('.scroll-btn.prev').click(function() {
//       var scrollingWrapperId = $(this).data('scrolling-wrapper');
//       var scrollWrapper = $('#' + scrollingWrapperId).find('.scrolling-wrapper');
//       var scrollLeft = scrollWrapper.scrollLeft() - scrollWrapper.parent().width() / 2;
//       var scrollLeftMin = 0;
  
//       if (scrollLeft < scrollLeftMin) {
//         scrollLeft = scrollLeftMin;
//       }
  
//       scrollWrapper.animate({
//         scrollLeft: scrollLeft
//       }, 500);
//     });
  
//     $('.scroll-btn.next').click(function() {
//       var scrollingWrapperId = $(this).data('scrolling-wrapper');
//       var scrollWrapper = $('#' + scrollingWrapperId).find('.scrolling-wrapper');
//       var scrollLeft = scrollWrapper.scrollLeft() + scrollWrapper.parent().width() / 2;
//       var scrollWidth = scrollWrapper[0].scrollWidth;
//       var wrapperWidth = scrollWrapper.parent().width();
//       var scrollLeftMax = scrollWidth - wrapperWidth;
  
//       if (scrollLeft > scrollLeftMax) {
//         scrollLeft = scrollLeftMax;
//       }
  
//       scrollWrapper.animate({
//         scrollLeft: scrollLeft
//       }, 500);
//     });
//   });
  
  
    
  
  