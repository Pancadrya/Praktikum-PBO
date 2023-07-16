# No. 1
Tidak ada nama algoritma khusus yang digunakan dalam membuat project Disney+ Clone Java ini, tetapi terdapat beberapa algoritma umum seperti perulangan dan percabangan. Berikut adalah link source codenya:
https://github.com/Pancadrya/Praktikum-PBO/blob/main/Tugas/02%20-%20Project%20Disney%2B%20Clone/Operation.java

![CodeRevisi1](https://github.com/Pancadrya/Praktikum-PBO/assets/94888050/773c2b8a-8e3b-4694-aa2b-460748ef34cf)
![CodeRevisi2](https://github.com/Pancadrya/Praktikum-PBO/assets/94888050/4a95ea0d-5c3f-4130-98d0-0cb66cb9f2eb)
![CodeRevisi3](https://github.com/Pancadrya/Praktikum-PBO/assets/94888050/4635e10c-22ea-43bc-9e78-0dfe35f1b75a)
![CodeRevisi4](https://github.com/Pancadrya/Praktikum-PBO/assets/94888050/7ff572a5-74fb-4ed6-8f86-fbab996e5d6b)
![CodeRevisi5](https://github.com/Pancadrya/Praktikum-PBO/assets/94888050/332abdd1-b3c8-4cbb-948c-eb63430ff511)
![CodeRevisi6](https://github.com/Pancadrya/Praktikum-PBO/assets/94888050/996c17c7-207c-4a1a-bb9d-283431cd0c40)
![CodeRevisi7](https://github.com/Pancadrya/Praktikum-PBO/assets/94888050/86ea3644-4086-4193-9813-88742d19b3e0)

# No. 2
Secara keseluruhan, project ini memiliki alur, inisialiasi movie dan series dengan membuat satu class khusus untuk menampung. Kemudian data-data tersebut dimasukkan ke dalam suatu arraylist untuk nantinya digunakan pada bagian tampilan. Selain itu, ada juga bagian user yang berkaitan tentang akun pengguna. Di sana berisi semua logika operasi dan penyimpanan data user, seperti login, sign in, dan lain-lain. Di bagian tampilan, terdapat banyak perintah operasi juga, mulai dari menampilkan menu, memilih film, login, logout, dan lain-lain. Pengguna yang sudah memiliki akun dan login saja yang bisa melihat secara lengkap konten yang ada. Berikut adalah link source codenya:
https://github.com/Pancadrya/Praktikum-PBO/tree/main/Tugas/02%20-%20Project%20Disney+%20Clone

# No. 3
Object Oriented Programming (OOP) adalah paradigma pemrograman yang berorientasi pada objek. Program dibuat dengan berbagai macam kelas-kelas dan objek-objek. Konsep dasar dalam OOP ada empat, yaitu abstraction, encapsulation, inheritance, dan polymorphism.
- Abstraction adalah konsep untuk memberikan kerangka atau guideline pada pemrogram hal apa saja yang harus diimplementasikan ke depannya. Hal-hal yang harus ada biasanya adalah atribut atau method apa saja yang harus dimiliki oleh turunan dari abstraction. Ciri utama dari abstraction atau lebih detailnya kelas abstrak adalah class tersebut tidak bisa diinisiasikan.
- Encapsulation adalah konsep pengamanan agar suatu atribut atau method yang mengandung hal-hal sensitif atau rahasia tidak bisa diakses secara langsung dan mudah. Encapsulation biasanya diterapkan dengan menambahkan identifier private pada atribut atau methid yang diinginkan. Pengaksesan atribut atau method private dapat melalui mthod khusus yang dibuat public, umumnya dinamai getter dan setter.
- Inheritence adalah konsep penurunan atribut dan method dari class super/parent kepada sub/child class-nya. Penggunaan inheritence membuat sub class tidak perlu lagi mendefinisikan hal-hal yamh sudah ada pada parentnya dan tinggal menambahkan ciri khas yang diperlukan pada dirinya sendiri. Umumnya inheritance dilakukan dengan keyword extends.
- Polymorphism adalah konsep dimana subclass dapat memiliki perilaku yang berbeda meskipun memiliki method yang sama dengan superclassnya. Misalnya dalam dunia nyata, hewan memiliki suara, tapi masing-masing suara mereka memiliki ciri khas masing-masing.

# No. 4
Pada project ini, encapsulation dicontohkan dengan class user. Di sana semua atribut variabel dibuat private agar tidak bisa dipanggil dan diubah langsung dari luar kelas. Konsekuensinya, dibuatlah method-method public yang berfungsi memanggil nilai-nilai yang ada pada class ini dengan filter logic yang ditambahkan (idealnya), seperti siapa yang bisa mengakses nama user, password user dan lain-lain, sehingga meminimalisir kerentanan kode terhadap akses yang tidak diinginkan Berikut adalah source codenya: 
https://github.com/Pancadrya/Praktikum-PBO/blob/main/Tugas/02%20-%20Project%20Disney%2B%20Clone/User.java

![code 8 encapsulation](https://github.com/Pancadrya/Praktikum-PBO/assets/94888050/c73bfaa2-6d74-48da-92ae-d581856ad263)

# No. 5
Abstraction di sini bernama Video. Alasannya karena semua konten yang ada pada Disney+ menurut pengamatan penulis pribadi berjenis video. Ini memberikan kerangka bagi programmer untuk menyesuaikan bahwa semua video pasti mempunyai nama dan durasi, selebihnya mungkin ada perbedaan dalam tahap khusus. Berikut adalah source codenya:
https://github.com/Pancadrya/Praktikum-PBO/blob/main/Tugas/02%20-%20Project%20Disney%2B%20Clone/Video.java

![code 9 abstraction](https://github.com/Pancadrya/Praktikum-PBO/assets/94888050/bba7e082-e0c4-4fad-a62a-0c97805abfd6)

# No. 6
Seperti diketahui bersama, movie dan series itu sama-sama video. Bedanya, movie hanya terdiri dari satu babak atau video, sedangkan series memiliki jumlah season dan episode yang berbeda-beda sehingga diperlukan polymorphism dalam menampilkan keduanya Berikut adalah source codenya:
https://github.com/Pancadrya/Praktikum-PBO/blob/main/Tugas/02%20-%20Project%20Disney%2B%20Clone/Video.java

![code 10 inheritence](https://github.com/Pancadrya/Praktikum-PBO/assets/94888050/6ba1c493-bdd8-4961-ad69-ff403892d5ae)
![code 11 polymorphism](https://github.com/Pancadrya/Praktikum-PBO/assets/94888050/58a02ec6-65f7-4688-834e-de9babbb1312)
![CodeRevisi12 Polymorphism](https://github.com/Pancadrya/Praktikum-PBO/assets/94888050/bfe3daf5-ecdc-4433-86be-7e54eea5ce9b)

# No. 7
Proses Bisnis Disney+

Sudah terimplementasi
- Program dapat menampilkan daftar film dan series yang tersedia
- Program dapat menampilkan informasi detail dari film yang dipilih user
- Program dapat menampilkan informasi detail dari series yang dipilih user
- Program dapat menampilkan daftar season dari series yang dipilih user
- Program dapat menampilkan daftar episode dari season series yang dipilih user
- Program dapat menyediakan form dan menyimpan data dari form untuk sign up visitors
- Program dapat menyediakan form dan memverifikasi input dari form untuk sign in users
- Program dapat menyediakan form sign out untuk user
- Program dapat melimitasi fitur berdasarkan status subscription user

Belum terimplementasi
- Program dapat menampilkan form penawaran paket langganan kepada user yang belum berlangganan
- Program dapat menyediakan form dan menyimpan data dari form penawaran langganan yang diinput user
- Admin dapat menambahkan film dan series
- Admin dapat mengubah data film dan series
- Admin dapat menghapus data film dan series

Dari list proses bisnis yang kemungkinan ada, pemrogram akan menganalisis apa saja kemungkinan class yang akan dibuat, apa saja atributnya, apa saja methodnya, bagaimana perilaku programnya, dan lain-lain.

Catatan: untuk update dapat dilihat pada jawaban interview 2

# No. 8
Class Diagram

![image](https://github.com/Pancadrya/Praktikum-PBO/assets/94888050/a3d49176-c477-4698-acbf-c8527de8e2ea)

Use Case Table

![image](https://github.com/Pancadrya/Praktikum-PBO/assets/94888050/58e01979-e99d-410d-8510-ac5cfdda78a8)

Catatan: untuk update dapat dilihat pada jawaban interview 2

# No. 9
https://youtu.be/GoPL8HgeJE0

Penjelasan dalam video di atas merupakan penjelasan program sebelum dilakukannya revisi sehingga kode yang ditampilkan dalam video berbeda dengan yang ada pada link source codenya. Meskipun berbeda, kurang lebih konsep dasarnya masih sama.

# No. 10
![Demo Program Disney Clone (3) (1) (1)](https://github.com/Pancadrya/Praktikum-PBO/assets/94888050/aa08766c-fcda-4b52-98dd-b3f35673d452)
