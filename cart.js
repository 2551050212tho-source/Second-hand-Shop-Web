
      function formatVND(amount) {
        return amount.toLocaleString("vi-VN") + " đ";
      }

      function updateTotal(input) {
        const row = input.closest("tr");
        const price = parseInt(row.getAttribute("data-price"));
        const quantity = parseInt(input.value);
        const total = price * quantity;

        row.querySelector(".item-total").textContent = formatVND(total);
        updateGrandTotal();
      }

      function updateGrandTotal() {
        let grandTotal = 0;
        const rows = document.querySelectorAll("#cart-table tbody tr");

        rows.forEach((row) => {
          const price = parseInt(row.getAttribute("data-price"));
          const quantity = parseInt(row.querySelector(".quantity-input").value);
          grandTotal += price * quantity;
        });

        document.getElementById("cart-grand-total").textContent =
          formatVND(grandTotal);
      }

      function removeRow(button) {
        if (confirm("Bạn có chắc chắn muốn xóa món đồ này khỏi giỏ hàng?")) {
          const row = button.closest("tr");
          row.remove();
          updateGrandTotal();
        }
      }

      function confirmOrder() {
        const cartTbody = document.querySelector("#cart-table tbody");
        const cartRows = cartTbody.querySelectorAll("tr");

        if (cartRows.length === 0) {
          alert("Giỏ hàng của bạn đang trống!");
          return;
        }

        alert("Chúc mừng! Bạn đã đặt hàng thành công.");

        const purchasedTbody = document.getElementById("purchased-tbody");
        const emptyMsg = document.getElementById("empty-purchased-msg");

        if (emptyMsg) {
          emptyMsg.remove();
        }

        cartRows.forEach((row) => {
          const imgSrc = row.querySelector(".product-img").src;
          const name = row.cells[1].innerText;
          const priceText = row.cells[2].innerText;
          const quantity = row.querySelector(".quantity-input").value;
          const totalText = row.querySelector(".item-total").innerText;

          const newRow = document.createElement("tr");
          newRow.innerHTML = `
                <td><img src="${imgSrc}" class="product-img"></td>
                <td>${name}</td>
                <td>${priceText}</td>
                <td>${quantity}</td>
                <td><strong>${totalText}</strong></td>
                <td><span class="badge-success">Mua thành công</span></td>
            `;
          purchasedTbody.appendChild(newRow);
        });

        cartTbody.innerHTML = "";
        updateGrandTotal();
      }

      updateGrandTotal();