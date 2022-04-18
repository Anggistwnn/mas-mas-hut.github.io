<!-- latihan mengubah array yang berisi data menjadi json -->
<?php
$mahasiswa = [
    [
        "nama" => "Anggi Setiawan",
        "nim" => "181011400567",
        "email" => "anggistwnn.tokopedia.ac.id",
        "pekerjaan" => "junior frontend dev",
    ],

    [
        "nama" => "Tantan Quarantino",
        "nim" => "181011400511",
        "email" => "tantan.shop.ac.id",
        "pekerjaan" => "Lead Olshop",
    ]
];

var_dump($mahasiswa);

$data = json_encode($mahasiswa);
echo $data;

// latihan mengambil data json menggunakan encode

$dbh = new PDO('mysql:host=localhost;dbname=db_sekolah', 'root', '');
$db = $dbh->prepare('SELECT * FROM tb_siswa');
$db->execute();
$tb_siswa = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($tb_siswa);
echo $data;

?>