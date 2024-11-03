/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

    $(document).ready(function() {
        var table = $('#karyawanTable').DataTable();

        $('#addDataButton').on('click', function() {
            // Mengambil nilai dari form input
            var kode = $('#kode').val();
            var nama = $('#nama').val();
            var email = $('#email').val();
            var alamat = $('#alamat').val();

            // Validasi input
            if (kode && nama && email && alamat) {
                // Menambahkan data baru ke tabel
                table.row.add([
                    kode,
                    nama,
                    email,
                    alamat
                ]).draw(false);

                // Mengosongkan form setelah input
                $('#kode').val('');
                $('#nama').val('');
                $('#email').val('');
                $('#alamat').val('');
            } else {
                alert('Harap isi semua kolom.');
            }
        });
    });

    $(document).ready(function() {
        $('#addJabatanButton').on('click', function() {
            // Ambil data dari form input
            var kode = $('#kode').val();
            var namaJabatan = $('#namaJabatan').val();
            var deskripsi = $('#deskripsi').val();

            // Validasi form
            if (kode && namaJabatan && deskripsi) {
                // Tambah data ke tabel
                $('#jabatanTable tbody').append(
                    '<tr>' +
                        '<td>' + kode + '</td>' +
                        '<td>' + namaJabatan + '</td>' +
                        '<td>' + deskripsi + '</td>' +
                    '</tr>'
                );

                // Kosongkan form setelah data ditambahkan
                $('#kode').val('');
                $('#namaJabatan').val('');
                $('#deskripsi').val('');
            } else {
                alert('Harap isi semua kolom.');
            }
        });
    });

    document.getElementById("addDivisiButton").addEventListener("click", function() {
        // Get the input values
        const kodeDivisi = document.getElementById("kodeDivisi").value;
        const namaDivisi = document.getElementById("namaDivisi").value;
    
        // Check if inputs are empty
        if (kodeDivisi === "" || namaDivisi === "") {
            alert("Please fill out both fields.");
            return;
        }
    
        // Get the table and tbody
        const table = document.getElementById("divisiTable").getElementsByTagName("tbody")[0];
    
        // Create a new row and cells
        const newRow = table.insertRow();
        const cellNo = newRow.insertCell(0);
        const cellKodeDivisi = newRow.insertCell(1);
        const cellNamaDivisi = newRow.insertCell(2);
    
        // Fill the cells with data
        cellNo.innerText = table.rows.length; // Auto-increment the row number
        cellKodeDivisi.innerText = kodeDivisi;
        cellNamaDivisi.innerText = namaDivisi;
    
        // Clear the input fields
        document.getElementById("kodeDivisi").value = "";
        document.getElementById("namaDivisi").value = "";
    });

});
