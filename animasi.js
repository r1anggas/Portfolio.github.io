    // Menambahkan kelas "active" saat konten terlihat di layar
    const sections = document.querySelectorAll('.section');

    const options = {
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
    // =======================================================
    // Fungsi untuk membuka modal dan menampilkan gambar sertifikat penuh
    function openModal(src) {
        var modal = document.getElementById("certificateModal");
        var fullImage = document.getElementById("fullCertificate");
        modal.style.display = "block";
        fullImage.src = src;
    }

    // Fungsi untuk menutup modal saat area luar gambar diklik
    function closeModal() {
        var modal = document.getElementById("certificateModal");
        modal.style.display = "none";
    }
