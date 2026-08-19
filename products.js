const products = [
    // DANH MỤC GIÀY DÉP
    { id: 1, cat: "giay", condition: "96% NEW", img: "Image/Zorgobola.png", title: "Jogarbola - JD", price: "300$", sizes: ["40", "41", "42", "43"] },
    { id: 2, cat: "giay", condition: "95% NEW", img: "Image/MB-O2-removebg-preview.png", title: "Puma MB - 02", price: "110$", sizes: ["40", "41", "42", "43"] },
    { id: 3, cat: "giay", condition: "90% NEW", img: "Image/Mb-01-.png", title: "Puma MB - 01", price: "99$", sizes: ["40", "41", "42", "43"] },
    { id: 4, cat: "giay", condition: "88% NEW", img: "Image/Freak 2 Bred.png", title: "Freak 2 Bred", price: "100$", sizes: ["40", "41", "42", "43"] },
    { id: 5, cat: "giay", condition: "90% NEW", img: "Image/Freak EP Jade Ice.png", title: "FR EP Jade Ice", price: "80$", sizes: ["40", "41", "42", "43"] },
    { id: 6, cat: "giay", condition: "95% NEW", img: "Image/Flex Frame 8603.png", title: "Flex Frame", price: "30$", sizes: ["40", "41", "42", "43"] },
    { id: 7, cat: "giay", condition: "87% NEW", img: "Image/Peak.png", title: "Peak S Master", price: "35$", sizes: ["40", "41", "42", "43"] },
    { id: 8, cat: "giay", condition: "75% NEW", img: "Image/Nike Kyrie 3.png", title: "Nike Kyrie 3", price: "25$", sizes: ["40", "41", "42", "43"] },
    { id: 9, cat: "giay", condition: "75% NEW", img: "Image/Dame 5.png", title: "Dame 5 Orange", price: "99$", sizes: ["40", "41", "42", "43"] },
    { id: 10, cat: "giay", condition: "70% NEW", img: "Image/Shock Wave 7.0.png", title: "Shock Wave 7.0", price: "30$", sizes: ["40", "41", "42", "43"] },

    // DANH MỤC ĐỒ ĐIỆN TỬ
    { id: 11, cat: "dientu", condition: "98% NEW", img: "Image/IPhone_13_Pro_10690-removebg-preview.png", title: "IPhone 13 Pro", price: "10.690.000 VNĐ", sizes: ["128GB", "256GB"]},
    { id: 12, cat: "dientu", condition: "96% NEW", img: "Image/Oppo-Reno-15F.png", title: "Oppo_Reno_15F", price: "11.990.000 VNĐ", sizes: ["128GB", "256GB"]},
    { id: 13, cat: "dientu", condition: "93% NEW", img: "Image/IP15.png", title: "IPhone 15", price: "20.690.000 VNĐ", sizes: ["256GB", "512GB"]},
    { id: 14, cat: "dientu", condition: "90% NEW", img: "Image/Samsung Galaxy S22 Ultra.png", title: "Galaxy S22 Ultra", price: "8.900.000 VNĐ", sizes: ["256GB", "512GB"]},
    { id: 15, cat: "dientu", condition: "88% NEW", img: "Image/SSGLXS23Ultra.png", title: "Galaxy S23 Ultra", price: "11.000.000 VNĐ", sizes: ["256GB", "512GB"]},
    { id: 16, cat: "dientu", condition: "85% NEW", img: "Image/IPhone_13_Pro_10690-removebg-preview.png", title: "IPhone 13 Pro", price: "10.690.000 VNĐ", sizes: ["128GB", "256GB"]},
    { id: 17, cat: "dientu", condition: "88% NEW", img: "Image/IPhone_13_Pro_10690-removebg-preview.png", title: "IPhone 13 Pro", price: "10.690.000 VNĐ", sizes: ["128GB", "256GB"]},
    { id: 18, cat: "dientu", condition: "89% NEW", img: "Image/IPhone_13_Pro_10690-removebg-preview.png", title: "IPhone 13 Pro", price: "10.690.000 VNĐ", sizes: ["128GB", "256GB"]},
    { id: 19, cat: "dientu", condition: "80% NEW", img: "Image/IPhone_13_Pro_10690-removebg-preview.png", title: "IPhone 13 Pro", price: "10.690.000 VNĐ", sizes: ["128GB", "256GB"]},
    { id: 20, cat: "dientu", condition: "82% NEW", img: "Image/IPhone_13_Pro_10690-removebg-preview.png", title: "IPhone 13 Pro", price: "10.690.000 VNĐ", sizes: ["128GB", "256GB"]},

    // DANH MỤC ĐỒ GIA DỤNG
    { id: 21, cat: "giadung", condition: "97% NEW", img: "Image/Bình đá Omo 5L.png", title: "Bình đá Omo 5L", price: "80.000 VNĐ", sizes: ["5L"] },
    { id: 22, cat: "giadung", condition: "90% NEW", img: "Image/Nồi cơm điện Taka.png", title: "Nồi cơm điện Taka", price: "350.000 VNĐ", sizes: [""] },
    { id: 23, cat: "giadung", condition: "90% NEW", img: "Image/Bếp ga xanh dương.png", title: "Bếp ga xanh dương", price: "400.000 VNĐ", sizes: [""] },
    { id: 24, cat: "giadung", condition: "90% NEW", img: "https://via.placeholder.com/200", title: "Máy xay sinh tố Philips", price: "40$", sizes: ["1.5L"] },
    { id: 25, cat: "giadung", condition: "90% NEW", img: "https://via.placeholder.com/200", title: "Máy xay sinh tố Philips", price: "40$", sizes: ["1.5L"] },
    { id: 26, cat: "giadung", condition: "90% NEW", img: "https://via.placeholder.com/200", title: "Máy xay sinh tố Philips", price: "40$", sizes: ["1.5L"] },
    { id: 27, cat: "giadung", condition: "90% NEW", img: "https://via.placeholder.com/200", title: "Máy xay sinh tố Philips", price: "40$", sizes: ["1.5L"] },
    { id: 28, cat: "giadung", condition: "90% NEW", img: "https://via.placeholder.com/200", title: "Máy xay sinh tố Philips", price: "40$", sizes: ["1.5L"] },
    { id: 29, cat: "giadung", condition: "90% NEW", img: "https://via.placeholder.com/200", title: "Máy xay sinh tố Philips", price: "40$", sizes: ["1.5L"] },
    { id: 30, cat: "giadung", condition: "90% NEW", img: "https://via.placeholder.com/200", title: "Máy xay sinh tố Philips", price: "40$", sizes: ["1.5L"] },


    // DANH MỤC THỜI TRANG NAM
    { id: 31, cat: "nam", condition: "85% NEW", img: "https://via.placeholder.com/200", title: "Áo khoác Jean Denim", price: "25$", sizes: ["M", "L", "XL"] },
    { id: 32, cat: "nam", condition: "92% NEW", img: "https://via.placeholder.com/200", title: "Áo khoác Jean Denim", price: "25$", sizes: ["M", "L", "XL"] },
    { id: 33, cat: "nam", condition: "92% NEW", img: "https://via.placeholder.com/200", title: "Áo khoác Jean Denim", price: "25$", sizes: ["M", "L", "XL"] },
    { id: 34, cat: "nam", condition: "92% NEW", img: "https://via.placeholder.com/200", title: "Áo khoác Jean Denim", price: "25$", sizes: ["M", "L", "XL"] },
    { id: 35, cat: "nam", condition: "92% NEW", img: "https://via.placeholder.com/200", title: "Áo khoác Jean Denim", price: "25$", sizes: ["M", "L", "XL"] },
    { id: 36, cat: "nam", condition: "92% NEW", img: "https://via.placeholder.com/200", title: "Áo khoác Jean Denim", price: "25$", sizes: ["M", "L", "XL"] },
    { id: 37, cat: "nam", condition: "92% NEW", img: "https://via.placeholder.com/200", title: "Áo khoác Jean Denim", price: "25$", sizes: ["M", "L", "XL"] },
    { id: 38, cat: "nam", condition: "92% NEW", img: "https://via.placeholder.com/200", title: "Áo khoác Jean Denim", price: "25$", sizes: ["M", "L", "XL"] },
    { id: 39, cat: "nam", condition: "92% NEW", img: "https://via.placeholder.com/200", title: "Áo khoác Jean Denim", price: "25$", sizes: ["M", "L", "XL"] },
    { id: 40, cat: "nam", condition: "92% NEW", img: "https://via.placeholder.com/200", title: "Áo khoác Jean Denim", price: "25$", sizes: ["M", "L", "XL"] },


    // DANH MỤC THỜI TRANG NỮ
    { id: 41, cat: "nu", condition: "99% NEW", img: "https://via.placeholder.com/200", title: "Váy xòe Vintage Nữ", price: "20$", sizes: ["S", "M"] },
    { id: 42, cat: "nu", condition: "99% NEW", img: "https://via.placeholder.com/200", title: "Váy xòe Vintage Nữ", price: "20$", sizes: ["S", "M"] },
    { id: 43, cat: "nu", condition: "99% NEW", img: "https://via.placeholder.com/200", title: "Váy xòe Vintage Nữ", price: "20$", sizes: ["S", "M"] },
    { id: 44, cat: "nu", condition: "99% NEW", img: "https://via.placeholder.com/200", title: "Váy xòe Vintage Nữ", price: "20$", sizes: ["S", "M"] },
    { id: 45, cat: "nu", condition: "99% NEW", img: "https://via.placeholder.com/200", title: "Váy xòe Vintage Nữ", price: "20$", sizes: ["S", "M"] },
    { id: 46, cat: "nu", condition: "99% NEW", img: "https://via.placeholder.com/200", title: "Váy xòe Vintage Nữ", price: "20$", sizes: ["S", "M"] },
    { id: 47, cat: "nu", condition: "99% NEW", img: "https://via.placeholder.com/200", title: "Váy xòe Vintage Nữ", price: "20$", sizes: ["S", "M"] },
    { id: 48, cat: "nu", condition: "99% NEW", img: "https://via.placeholder.com/200", title: "Váy xòe Vintage Nữ", price: "20$", sizes: ["S", "M"] },
    { id: 49, cat: "nu", condition: "99% NEW", img: "https://via.placeholder.com/200", title: "Váy xòe Vintage Nữ", price: "20$", sizes: ["S", "M"] },
    { id: 50, cat: "nu", condition: "99% NEW", img: "https://via.placeholder.com/200", title: "Váy xòe Vintage Nữ", price: "20$", sizes: ["S", "M"] }
];

document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("grid-product");
    if (!gridContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const selectedCat = urlParams.get("cat");

    const filteredProducts = selectedCat
        ? products.filter(item => item.cat === selectedCat)
        : products;

    if (filteredProducts.length === 0) {
        gridContainer.innerHTML = `<h2 style="grid-column: 1/-1; text-align: center; padding: 50px 0; color: #666;">Chưa có sản phẩm nào thuộc danh mục này</h2>`;
        return;
    }

    gridContainer.innerHTML = filteredProducts.map(item => `
    <div class="card cat-${item.cat}">
        <div class="card-cart">
            <i class="fa-solid fa-shopping-cart"></i>
        </div>
        <div class="card-board">
            <p>${item.condition}</p>
        </div>
        <div class="card-img">
            <img src="${item.img}" alt="${item.title}">
        </div>
        <div class="card-title">
            ${item.title}
        </div>
        <div class="card-price">
            ${item.price}
        </div>
        <div class="card-size">
            <h3>Size: </h3>
            ${item.sizes.map(size => `<span>${size}</span>`).join('')}
        </div>
        <div class="card-action">
            <button>Buy Now</button>
            <button>Add Cart</button>
        </div>
    </div>
    `).join('');
});