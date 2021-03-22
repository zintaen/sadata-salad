const products = [
  {
    id: 1,
    name: "Vietnamese Style Sadata",
    desc_en:
      "Roasted beef, yellow grape cherry tomatoes, cress, carrots, black rice, eggs, Chili - lime salad dressing ( Lemon juice, olive oil, garlic, chili )",
    desc_vi:
      "Bò áp chảo, cà chua bi vàng, xà lách xoong, càrốt, cơm gạo lứt, trứng, Chili - lime saladdressing (nước sốt từ nước cốt chanh, dầu oliu,tỏi, gia vị cay)",
    image: "salad1.jpeg",
  },
  {
    id: 2,
    name: "Italian Pollo Sadata",
    desc_en:
      "Roasted chicken breast, mixed tomatoes, red onions, avocados, cucumbers, sweet potatoes, Italian salad dressing ( Balsamic vinegar, olive oil, herbs )",
    desc_vi:
      "Ức gà áp chảo, hỗn hợp cà chua, hành tâytím, trái bơ, dưa leo, khoai lang, Italiansalad dressing (nước sốt từ giấm Balsamic,dầu oliu, lá thơm herb)",
    image: "salad2.jpeg",
  },
  {
    id: 3,
    name: "Shrimp Cobb Sadata",
    desc_en:
      "Roasted shrimp, spinachs, bell peppers, red onions, quinoa, honey mustard salad dressing ( Honey, mustard )",
    desc_vi:
      "Tôm nướng, cải bó xôi, Ớt chuông ba màu,hành tây tím, quinoa, honey mustard saladdressing (nước sốt từ mật ong, mù tạt)",
    image: "salad3.png",
  },
  {
    id: 4,
    name: "Tropical Mix Sadata",
    desc_en:
      "Mixed salad, oranges, pumkin seeds, red onions, chic - peas, lemon vinaigrette salad - dressing ( Lemon juice, vinegar, olive oil )",
    desc_vi:
      "Hỗn hợp salad, cam, hạt bí, hành tây tím, chic -peas (đậu gà), lemon vinaigrette salad -dressing (nước sốt từ chanh, dầu giấm, dầuoliu)",
    image: "salad4.jpeg",
  },
  {
    id: 5,
    name: "Greek Specialty Sadata",
    desc_en:
      "Spinachs, quinoa, almonds, dried fruits, cucumbers, corns, greek yogurt ranch salad - dressing ( Greek yogurt )",
    desc_vi:
      "Cải bó xôi, quinoa, hạnh nhân, trái cây sấy,dưa leo, bắp, greek yogurt ranch salad -dressing (nước sốt từ yogurt)",
    image: "salad5.jpeg",
  },
  {
    id: 6,
    name: "Soothing Green Juice",
    desc_en: "Kales, green apples, pineapples, peppermint, celery",
    desc_vi: "Cải kale, táo xanh, thơm, lá bạc hà, cần tây",
    price: 29,
    image: "juice1.jpeg",
  },
  {
    id: 7,
    name: "Yellow Mellow Juice",
    desc_en: "Pineapples, mangos, oranges, gingers, lemons, apples",
    desc_vi: "Thơm, xoài, cam, gừng, chanh, táo đỏ",
    price: 29,
    image: "juice2.WEBP",
  },
  {
    id: 8,
    name: "Pink Lady Juice",
    desc_en: "Beetrots, watermelons, apples, lemon, pineapples",
    desc_vi: "Củ dền, dưa hấu, táo đỏ, chanh, thơm",
    price: 29,
    image: "juice3.jpeg",
  },
  {
    id: 9,
    name: "Triple Vitamin C Juice",
    desc_en: "Carrots, oranges, lemon, pineapples",
    desc_vi: "Cà rốt, cam, chanh, thơm",
    price: 29,
    image: "juice4.jpeg",
  },
  {
    id: 10,
    name: "Very Berries Juice",
    desc_en: "Mixed strawberries, pineapples, green apples",
    desc_vi: "Hỗn hợp dâu, thơm, táo xanh",
    price: 29,
    image: "juice5.jpg",
  },
];

const lang = {
  home: {
    vi: "Trang Chủ",
    en: "Home",
  },
  "contact-us": { vi: "Liên hệ", en: "Contact Us" },
  "lang-vi": {
    vi: "Tiếng Việt",
    en: "Vietnamese",
  },
  "lang-en": {
    vi: "Tiếng Anh",
    en: "English",
  },
  "for-delivery-call-us": {
    vi: "Liên hệ vận chuyển",
    en: "For Delivery, Call us",
  },
  "cooking-with-passion": {
    vi: "Ẩm Thực Từ Đam Mê",
    en: "Cooking With Passion",
  },
  "cooking-with-passion-content": {
    vi:
      "Salad có nguồn gốc từ Địa Trung Hải, đầu tiên là Hy Lạp với tên gọi là Sadata – bắt nguồn từ Sal trong tiếng La-Tinh nghĩa là muối. Vì vậy chúng tôi sử dụng tên gốc – SADATA cho chính công ty chuyên cung cấp thực phẩm healthy chủ yếu là salad của mình. SADATA được thành lập ngày 8/3/2021 bởi 6 con người có tính cách, suy nghĩ, ngoại hình khác nhau nhưng lại cùng một lối sống Xanh – Sạch – Tốt cho Sức Khoẻ. Với ba tiêu chí chính Dinh Dưỡng - Sạch Sẽ - Tiện Lợi, chúng tôi mong muốn đem đến cho khách hàng một khẩu phần ăn Dinh Dưỡng đầy đủ chất đạm, béo, xơ, protein, vitamin,…các chất cần thiết cho cơ thể; Sạch Sẽ đảm bảo an toàn vệ sinh theo tiêu chuẩn GlobalGap (công nhận những loại thực phẩm sạch khi đáp ứng được một số tiêu chí như: Môi trường nuôi, trồng sạch sẽ; không sử dụng hóa chất độc hại đối với các loại thực phẩm; bao bì sản phẩm rõ ràng; điều kiện làm việc của người lao động tốt; quá trình kiểm tra, giám sát của những người sản xuất thực hiện); Tiện Lợi với những công thức sốt đơn giản kết hợp Á – Âu nhưng vô cùng đặc sắc phù hợp với khẩu vị người Việt Nam.",
    en:
      "Salad was originated from the Mediterranean, first appeared in Greek with the name of Sadata- derived from the word Sal in Latin which means salt. The reason behind our company’s name is that we want to be a provider of the essential and original of all healthy foods: salad. SADATA was found on the 8th of April 2021 by 6 university students with different personalities, thoughts and looks, but they all have the same way of living Green-Clean-Healthy. With three main criteria: Nutritious-Clean-Convenient, we want to deliver to our customers with a nutritious diet includes all of the necessary protein, fat, fiber, vitamins,… and essential substances for the human body. SADATA follows strictly the GlobalG.A.P standards ( a certification of safe and hygienic food products that are certified with these criteria: Clean farming environment, No usage of toxic chemicals, Clean and clear product packaging, Great working conditions for the workers and supervision carried out by the producer) and we dedicate our company’s goal to the costumer’s health and hygienic. Our products are convenient with simple sauce formulas combing Asia-Europe taste extremely unique and very suitable for the taste of Vietnamese cuisine.",
  },
  "fresh-ingredients": {
    vi: "Nguyên Liệu Tươi Sạch",
    en: "Fresh Ingredients",
  },
  "the-certified-chefs": {
    vi: "Đầu Bếp Hạng Nhất",
    en: "The Certified Chefs",
  },
  "30-min-delivery": {
    vi: "Giao trong 30 phút",
    en: "30 Mins Delivery",
  },
  "our-special-deals": {
    vi: "Ưu Đãi Đặc Biệt Của Chúng Tôi",
    en: "Our Special Deals",
  },
  salads: {
    vi: "Salads",
    en: "Salads",
  },
  juices: {
    vi: "Nước Ép",
    en: "Juices",
  },
  price: {
    vi: "Giá",
    en: "Price",
  },
  "add-to-cart": {
    vi: "Mua",
    en: "Add To Cart",
  },
  subscribe: {
    vi: "Đăng ký nhận thông tin khuyến mãi, Giảm giá & Ưu đãi",
    en: "Subscribe for Promos, Discounts & Deals",
  },
  socials: {
    vi: "Mạng Xã Hội",
    en: "Socials",
  },
  "our-instagram": {
    vi: "Instagram Của Chúng Tôi",
    en: "Our Instagram",
  },
  "opening-hours": {
    vi: "Giờ Mở Cửa",
    en: "Opening Hours",
  },
  "mon-sat": {
    vi: "Thứ 2 - Thứ 7",
    en: "Mon – Sat",
  },
  saturday: {
    vi: "Thứ 7",
    en: "Saturday",
  },
  sun: {
    vi: "Chủ Nhật",
    en: "Sun",
  },
  phone: {
    vi: "Điện Thoại",
    en: "Phone",
  },
  purchase: {
    vi: "Thanh Toán",
    en: "Purchase",
  },
  "contact-details": {
    vi: "Chi Tiết Liên Hệ",
    en: "Contact Details",
  },
  "delivery-hours": {
    vi: "Giờ Giao Hàng",
    en: "Delivery Hours",
  },
  "mon-to-fri": {
    vi: "T2 - T6",
    en: "Mon to Fri",
  },
  "send-us-a-message": {
    vi: "Gửi tin đến chúng tôi",
    en: "Send us a Message",
  },
  "order-today": {
    vi: "Order Ngay, Khi Còn Tươi Xanh",
    en: "Order Today, While It’s Fresh!",
  },
  "product-detail": {
    vi: "Chi tiết Món Ăn",
    en: "Product Detail",
  },
  reviews: {
    vi: "Đánh giá",
    en: "Reviews",
  },
  "leave-a-reply": {
    vi: "Để lại đánh giá",
    en: "Leave a Reply",
  },
  "reply-note": {
    vi:
      "Địa chỉ email của bạn sẽ không được công khai. Các trường bắt buộc được đánh dấu *",
    en:
      "Your email address will not be published. Required fields are marked *",
  },
};

let currentLang = localStorage.getItem("lang");

$(document).ready(function ($) {
  if (currentLang) {
    $("#lang").val(currentLang);
  } else {
    currentLang = "vi";
    localStorage.setItem("lang", currentLang);
  }

  Object.keys(lang).forEach((key) => {
    $(`[lang-value="${key}"]`).text(lang[key][currentLang]);
  });

  const isHomePage = $("body#pageHome").length > 0;

  if (isHomePage) {
    $("#saladList").html(
      products.map((product, idx) =>
        idx < 5
          ? `<li>
    <div class="product-item">
      <div class="product-item__box">
        <div class="product-item__intro">
          <div class="product-item__not-active">
            <div class="product-item__media">
              <div
                class="uk-inline-clip uk-transition-toggle uk-light"
                data-uk-lightbox="data-uk-lightbox"
              >
                <a href="assets/img/salads/${product.image}"
                  ><img
                    src="assets/img/salads/${product.image}"
                    alt="${product.name}"
                  />
                  <div
                    class="uk-transition-fade uk-position-cover uk-overlay uk-overlay-primary"
                  ></div>
                  <div class="uk-position-center">
                    <span
                      class="uk-transition-fade"
                      data-uk-icon="icon: search;"
                    ></span>
                  </div>
                </a>
              </div>
            </div>
            <div class="product-item__title">
              <a href="page-product-${product.id}.html"
                >${product.name}</a
              >
            </div>
            <div class="product-item__desc">
            ${product[`desc_${currentLang}`]}
            </div>
          </div>
        </div>
        <div class="product-item__info">
          <div class="product-item__price">
            <span>${lang.price[currentLang]}: </span
            ><span class="value">29K-39K-59K</span>
          </div>
          <div class="product-item__addcart">
            <a
              class="uk-button uk-button-default"
              href="page-product-${product.id}.html"
              >${lang["add-to-cart"][currentLang]}<span
                data-uk-icon="cart"
              ></span
            ></a>
          </div>
        </div>
      </div>
    </div>
  </li>`
          : ""
      )
    );

    $("#juiceList").html(
      products.map((product, idx) =>
        idx > 4
          ? `<li>
          <div class="product-item">
            <div class="product-item__box">
              <div class="product-item__intro">
                <div class="product-item__not-active">
                  <div class="product-item__media">
                    <div
                      class="uk-inline-clip uk-transition-toggle uk-light"
                      data-uk-lightbox="data-uk-lightbox"
                    >
                      <a href="assets/img/salads/${product.image}"
                        ><img
                          src="assets/img/salads/${product.image}"
                          alt="${product.name}"
                        />
                        <div
                          class="uk-transition-fade uk-position-cover uk-overlay uk-overlay-primary"
                        ></div>
                        <div class="uk-position-center">
                          <span
                            class="uk-transition-fade"
                            data-uk-icon="icon: search;"
                          ></span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="product-item__title">
                    <a href="page-product-${product.id}.html"
                      >${product.name}</a
                    >
                  </div>
                  <div class="product-item__desc">
                  ${product[`desc_${currentLang}`]}
                  </div>
                </div>
              </div>
              <div class="product-item__info">
                <div class="product-item__price">
                  <span>${lang["price"][currentLang]}: </span
                  ><span class="value">29k</span>
                </div>
                <div class="product-item__addcart">
                  <a
                    class="uk-button uk-button-default"
                    href="page-product-${product.id}.html"
                    >${lang["add-to-cart"][currentLang]}<span
                      data-uk-icon="cart"
                    ></span
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </li>`
          : ""
      )
    );
  }

  const isProductPage = $("body#pageProduct").length > 0;

  if (isProductPage) {
    $("#productDesc").text(
      products.find((item) => item.id === parseInt($("body").attr("page")))[
        `desc_${currentLang}`
      ]
    );
  }

  $("#lang").on("change", function (e) {
    localStorage.setItem("lang", e.target.value);
    window.location.reload();
  });
  $(window).on("load", function () {
    setTimeout(function () {
      $(".preloader").fadeOut().end().delay(500).fadeOut("slow");
    }, 1000);
  });
  $(".product-item__toggle button").on("click", function () {
    $(this)
      .offsetParent(".product-item")
      .find(".product-item__active")
      .toggleClass("is-show");
    $(this).parent(".product-item__toggle").toggleClass("is-show");
  });
  $(".product-item__whish").on("click", function () {
    $(this).toggleClass("is-active");
  });
  $(".product-full-card__toggle button").on("click", function () {
    $(this)
      .offsetParent(".product-full-card")
      .find(".product-full-card__active")
      .toggleClass("is-show");
    $(this).parent(".product-full-card__toggle").toggleClass("is-show");
  });
  $(".product-full-card__whish").on("click", function () {
    $(this).toggleClass("is-active");
  });
  $(".counter .minus").on("click", function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".counter .plus").on("click", function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
  $(".js-hidden-box").each(function () {
    $(this).children("div").hide();
    $(this).children("div").slice(0, 6).show();
    $(this)
      .next(".js-hidden-btn")
      .on("click", function (e) {
        e.preventDefault();
        $(this)
          .prev(".js-hidden-box")
          .children("div:hidden")
          .slice(0, 3)
          .slideDown();
        var elHidden = $(this).prev(".js-hidden-box").children("div:hidden")
          .length;

        if (elHidden <= 0) {
          $(this).hide();
        }
      });
  });
  $(".js-checkbox").on("click", function () {
    $(this).toggleClass("is-checked");
  });

  const currentCart = localStorage.getItem("cart");

  if (!currentCart) {
    $("#cart").attr("data-after", "0");
  } else {
    const parsedCart = JSON.parse(currentCart);
    const isCartPage = $("body#pageCart").length > 0;

    if (parsedCart.length > 0) {
      $("#cart").attr("data-after", parsedCart.length);
    }

    if (isCartPage) {
      if (parsedCart.length > 0) {
        $("#cartContent").html(
          parsedCart.map(
            (product) =>
              `<li>
              <div class="product-item">
                <div class="product-item__box">
                  <div class="product-item__intro">
                    <div class="product-item__not-active">
                      <div class="product-item__media">
                        <div
                          class="uk-inline-clip uk-transition-toggle uk-light"
                          data-uk-lightbox="data-uk-lightbox"
                        >
                          <a href="assets/img/salads/${product.image}">
                            <img
                              src="assets/img/salads/${product.image}"
                              alt="${product.name}"
                            />
                            <div class="uk-transition-fade uk-position-cover uk-overlay uk-overlay-primary"></div>
                            <div class="uk-position-center">
                              <span
                                class="uk-transition-fade"
                                data-uk-icon="icon: search;"
                              ></span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div class="product-item__title">
                        <a href="page-product-${product.id}.html">${
                product.name
              }</a>
                      </div>
                      <div class="product-item__desc">
                      ${product[`desc_${currentLang}`]}
                      </div>
                    </div>
                  </div>
                  <div class="product-item__info">
                    <div class="product-item__price">
                      <span>${lang["price"][currentLang]}: </span>
                      <span class="value">${product.price}k</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>`
          )
        );
        $("#empty").hide();
        $("#notEmpty").show();
      } else {
        $("#empty").show();
        $("#notEmpty").hide();
      }
    }
  }
});

/////////////////////////////////////////////////////////////////
// Preloader
/////////////////////////////////////////////////////////////////

var $preloader = $("#page-preloader"),
  $spinner = $preloader.find(".spinner-loader");
$spinner.fadeOut();
$preloader.delay(50).fadeOut("slow");

const mediaQueryTablet = window.matchMedia("(max-width: 768px)");

function handleTabletChange(e) {
  if (e.matches) {
    console.log("Media Query 768!");
  }
}

mediaQueryTablet.addListener(handleTabletChange);
handleTabletChange(mediaQueryTablet);

function addToCart(id) {
  const price = parseInt($('input[name="price"]:checked').val());
  const amount = parseInt($("input#amount").val());
  const foundProduct = products.find((item) => item.id === id);
  const currentCart = localStorage.getItem("cart");
  let newCart;

  if (currentCart) {
    const parsedCart = JSON.parse(currentCart);
    const existedItem = parsedCart.find(
      (item) => item.id === id && item.price === price
    );

    if (existedItem) {
      newCart = parsedCart.map((item) => {
        if (item.id === id) {
          item.amount = item.amount + amount;
        }
        return item;
      });
    } else {
      newCart = [...parsedCart, { ...foundProduct, price, amount }];
    }
  } else {
    newCart = [{ ...foundProduct, price, amount }];
  }

  localStorage.setItem("cart", JSON.stringify(newCart));
  $("#cart").attr("data-after", newCart.length);
}
