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

    // MẪU THỬ CÁC DANH MỤC KHÁC 
    { id: 11, cat: "dientu", condition: "98% NEW", img: "https://via.placeholder.com/200", title: "Laptop Dell XPS 13", price: "450$", sizes: ["Core i7", "16GB"] },
    { id: 12, cat: "giadung", condition: "90% NEW", img: "https://via.placeholder.com/200", title: "Máy xay sinh tố Philips", price: "40$", sizes: ["1.5L"] },
    { id: 13, cat: "nam", condition: "92% NEW", img: "https://via.placeholder.com/200", title: "Áo khoác Jean Denim", price: "25$", sizes: ["M", "L", "XL"] },
    { id: 14, cat: "nu", condition: "99% NEW", img: "https://via.placeholder.com/200", title: "Váy xòe Vintage Nữ", price: "20$", sizes: ["S", "M"] }
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
        <div class="card">
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