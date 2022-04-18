// MENGUBAH DARI OBJECT MENJADI JSON

// const mahasiswa = {
//     nama: "Anggi Setiawan",
//     nim: "181011400567",
//     email: "anggi  stwnn@tokopedia.ac.id"
// }

// console.log(JSON.stringify(mahasiswa));


// MENGUBAH JSON MENGGUNAKAN OBJECT MENGGUNAKAN VANILA JS XMLHttpRequest


// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         const mahasiswa = JSON.parse(this.responseText);
//         console.log(mahasiswa);
//     }
// }

// xhr.open('GET', 'coba.json', true);
// xhr.send();

//  MENGUBAH JSON MENGGUNAKAN OBJECT MENGGUNAKAN JQUERY 

// $.getJSON('coba.json', function (data) {
//     console.log(data);
// })