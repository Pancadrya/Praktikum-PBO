class Kegiatan {
    String nama;
    String status;
    int poinBaik;
    int poinBuruk;
}

class Manusia {
    String nama;
    int totalAmalBaik = 50;
    int totalAmalBuruk = 50;

    void beramal(Kegiatan kegiatan) {
        if(kegiatan.status == "baik") {
            System.out.println(this.nama + " telah melakukan " + kegiatan.nama);
            System.out.println("Amal baik +" + kegiatan.poinBaik);
            System.out.println("Amal buruk -" + kegiatan.poinBuruk);
            this.totalAmalBaik += kegiatan.poinBaik;
            this.totalAmalBuruk -= kegiatan.poinBuruk;
        } else {
            System.out.println(this.nama + " telah melakukan " + kegiatan.nama);
            System.out.println("Amal baik -" + kegiatan.poinBaik);
            System.out.println("Amal buruk +" + kegiatan.poinBuruk);
            this.totalAmalBaik -= kegiatan.poinBaik;
            this.totalAmalBuruk += kegiatan.poinBuruk;
        }
    }

    void tampilkanAmal() {
        System.out.println("Total amal baik " + this.nama + "     : " + this.totalAmalBaik);
        System.out.println("Total amal buruk " + this.nama + "    : " + this.totalAmalBuruk);
        System.out.println("---------------------------------------------");
    }
}

public class simulasiAmal {
    public static void main(String[] args) {
        Kegiatan k1 = new Kegiatan();
        k1.nama = "sedekah";
        k1.poinBaik = 5;
        k1.poinBuruk = 10;
        k1.status = "baik";

        Kegiatan k2 = new Kegiatan();
        k2.nama = "ibadah";
        k2.poinBaik = 5;
        k2.poinBuruk = 5;
        k2.status = "baik";
        
        Kegiatan k3 = new Kegiatan();
        k3.nama = "pencurian";
        k3.poinBaik = 1;
        k3.poinBuruk = 1;
        k3.status = "buruk";

        Kegiatan k4 = new Kegiatan();
        k4.nama = "penipuan";
        k4.poinBaik = 25;
        k4.poinBuruk = 25;
        k4.status = "buruk";

        System.out.println("---------------------------------------------");
        System.out.println("         SISTEM PENCATAT AMAL MANUSIA        ");
        System.out.println("---------------------------------------------");
        
        Manusia m1 = new Manusia();
        m1.nama = "Ujang";
        m1.tampilkanAmal();
        m1.beramal(k1);
        m1.tampilkanAmal();
        m1.beramal(k3);
        m1.tampilkanAmal();
        m1.beramal(k2);
        m1.tampilkanAmal();
        m1.beramal(k4);
        m1.tampilkanAmal();
    }
}
