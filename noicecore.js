function tambahKeKeranjang(namaProduk) {
        const listItem = document.createElement('li');
        listItem.textContent = namaProduk;
        document.getElementById('keranjang').appendChild(listItem);
        alert(namaProduk + " berhasil ditambahkan ke keranjang!");
}
 function toggleVisibility(id) {
      const input = document.getElementById(id);
      input.type = input.type === 'password' ? 'text' : 'password';
}
