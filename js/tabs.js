function showTab(id) {
    document.querySelectorAll(".tab-content-custom").forEach(tab => tab.classList.add("d-none"));

    document.getElementById(id).classList.remove("d-none");
}