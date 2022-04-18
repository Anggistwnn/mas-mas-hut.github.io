<?php
// latiha mengambil data json mengguanakn decode
$data =  file_get_contents('coba.json');
$mahasiswa = json_decode($data, true);

var_dump($mahasiswa);

echo $mahasiswa[0]["pembimbing"]["pembimbing2"];