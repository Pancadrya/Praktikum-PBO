import java.util.Scanner;
import java.util.ArrayList;
import java.awt.Desktop;
import java.net.URI;

abstract class Video {
    abstract public void setTitle(String title);
    abstract public String getTitle();
    abstract public void setDuration(String duration);
    abstract public String getDuration();
    // abstract public void setFileLocation(String title);
    // abstract public String getFileLocation();
    // abstract public SubscriptionStatus getSubscriptionStatus();
}

class Movie extends Video { // inheritance
    private String title;
    private String genre;
    private String linkWatch;
    private String linkTrailer;
    private int releaseDate;
    private String duration;
    private String ageRating;
    private String synopsis;
    private String director;

    // Movie (String title, String genre, int releaseDate, String duration, String ageRating, String synopsis, String director, String linkWatch, String linkTrailer) {
    //     this.title = title;
    //     this.genre = genre;
    //     this.releaseDate = releaseDate;
    //     this.duration = duration;
    //     this.ageRating = ageRating;
    //     this.synopsis = synopsis;
    //     this.director = director;
    //     this.linkWatch = linkWatch;
    //     this.linkTrailer = linkTrailer;
    // }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTitle() {
        return this.title;
    }

    public void setLinkWatch(String linkWatch) {
        this.linkWatch = linkWatch;
    }

    public String getLinkWatch() {
        return this.linkWatch;
    }
    
    public void setLinkTrailer(String linkTrailer) {
        this.linkTrailer = linkTrailer;
    }

    public String getLinkTrailer() {
        return this.linkTrailer;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getGenre() {
        return this.genre;
    }

    public void setReleaseDate(int releaseDate) {
        if (releaseDate >= 1888) {
            
        this.releaseDate = releaseDate;
        } else {
            System.out.println("Error: tahun tidak valid");
        }
    }

    public int getReleaseDate() {
        return this.releaseDate;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getDuration() {
        return this.duration;
    }

    public void setAgeRating(String ageRating) {
        this.ageRating = ageRating;
    }

    public String getAgeRating() {
        return this.ageRating;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public String getDirector() {
        return this.director;
    }

    public void SetSynopsis(String synopsis) {
        this.synopsis = synopsis;
    }

    public String getSynopsis() {
        return this.synopsis;
    }

    void showDetail(String status) {
        Scanner input = new Scanner(System.in);
        String pilihan;
        String linkWatch = this.getLinkWatch();
        String linkTrailer = this.getLinkTrailer();
        Operation op = new Operation();
        boolean lanjut = true;

        while(lanjut) {
            op.clearScreen();
            if(status.equals("complete")) {
                System.out.println("-------------------------------------");
                System.out.println(" Disney+ Clone");
                System.out.println("-------------------------------------");
                System.out.println();
                System.out.println(this.getTitle());
                System.out.print(this.getReleaseDate());
                System.out.print(" | ");
                System.out.print(this.getDuration());
                System.out.print(" | ");
                System.out.print(this.getGenre());
                System.out.print(" | ");
                System.out.print(this.getAgeRating());
                // System.out.print(" | ");
                // System.out.println(this.getDirector());
                System.out.println();
                System.out.println(this.getSynopsis());
                System.out.println();
                System.out.println("[1] Tonton Film   [2] Trailer   [x] Kembali");
                System.out.println();
                System.out.print("Pilihan: ");
                pilihan = input.nextLine();
                switch(pilihan) {
                    case "1": 
                        try {
                            Desktop.getDesktop().browse(new URI(linkWatch));
                        } catch (Exception e) {

                        }
                    break;
                    case "2":
                    try {
                            Desktop.getDesktop().browse(new URI(linkTrailer));
                        } catch (Exception e) {
                            
                        }
                    break;
                    case "x":
                    case "X":
                        lanjut = false;
                    break;
                }
            }

            else {
                System.out.println("-------------------------------------");
                System.out.println(" Disney+ Clone");
                System.out.println("-------------------------------------");
                System.out.println();
                System.out.println(this.getTitle());
                System.out.print(this.getReleaseDate());
                System.out.print(" | ");
                System.out.print(this.getDuration());
                System.out.print(" | ");
                System.out.print(this.getGenre());
                System.out.print(" | ");
                System.out.print(this.getAgeRating());
                System.out.print(" | ");
                System.out.println(this.getDirector());
                System.out.println();
                System.out.println(this.getSynopsis());
                System.out.println();
                System.out.println("[1] Trailer   [x] Kembali");
                System.out.println();
                System.out.print("Pilihan: ");
                pilihan = input.nextLine();
                switch(pilihan) {
                    case "1":
                    try {
                            Desktop.getDesktop().browse(new URI(linkTrailer));
                        } catch (Exception e) {
                            
                        }
                    break;
                    case "x":
                    case "X":
                        lanjut = false;
                    break;
                }
            }
        }
    }
}

class Series extends Movie {
    private int season;
    private int episode;
    private ArrayList<String> linkWatchSeries1 = new ArrayList<String>();
    private ArrayList<String> linkWatchSeries2 = new ArrayList<String>();
    private ArrayList<String> linkWatchSeries3 = new ArrayList<String>();
    private ArrayList<String> linkWatchSeries4 = new ArrayList<String>();
    private ArrayList<String> linkWatchSeries5 = new ArrayList<String>();
    private ArrayList<String> linkWatchSeries6 = new ArrayList<String>();
    private ArrayList<String> linkWatchSeries7 = new ArrayList<String>();
    private ArrayList<String> linkWatchSeries8 = new ArrayList<String>();
    private ArrayList<String> linkWatchSeries9 = new ArrayList<String>();
    private ArrayList<String> linkWatchSeries10 = new ArrayList<String>();
    private Scanner input = new Scanner(System.in);


    public void setSeason(int season) {
        this.season = season;
    }

    public int getSeason() {
        return this.season;
    }

    public void SetEpisode(int episode) {
        this.episode = episode;
    }

    public int getEpisode() {
        return this.episode;
    }

    public void setLinkWatchSeries(int season, String linkWatch) {
        if (season == 1)
            this.linkWatchSeries1.add(linkWatch);
        else if (season == 2)
            this.linkWatchSeries2.add(linkWatch);
        else if (season == 3)
            this.linkWatchSeries3.add(linkWatch);
        else if (season == 4)
            this.linkWatchSeries4.add(linkWatch);
        else if (season == 5)
            this.linkWatchSeries5.add(linkWatch);
        else if (season == 6)
            this.linkWatchSeries6.add(linkWatch);
        else if (season == 7)
            this.linkWatchSeries7.add(linkWatch);
        else if (season == 8)
            this.linkWatchSeries8.add(linkWatch);
        else if (season == 9)
            this.linkWatchSeries9.add(linkWatch);
        else if (season == 10)
            this.linkWatchSeries10.add(linkWatch);
    }

    public String getLinkWatchSeries(int season, int episode) {
        String seasonChoice = "";

        if (season == 1)
            seasonChoice = this.linkWatchSeries1.get(episode);
        else if (season == 2)
            seasonChoice = this.linkWatchSeries2.get(episode);
        else if (season == 3)
            seasonChoice = this.linkWatchSeries3.get(episode);
        else if (season == 4)
            seasonChoice = this.linkWatchSeries4.get(episode);
        else if (season == 5)
            seasonChoice = this.linkWatchSeries5.get(episode);
        else if (season == 6)
            seasonChoice = this.linkWatchSeries6.get(episode);
        else if (season == 7)
            seasonChoice = this.linkWatchSeries7.get(episode);
        else if (season == 8)
            seasonChoice = this.linkWatchSeries8.get(episode);
        else if (season == 9)
            seasonChoice = this.linkWatchSeries9.get(episode);
        else if (season == 10)
            seasonChoice = this.linkWatchSeries10.get(episode);
        return seasonChoice;
    }    


    void showDetail(String status) {
        String linkTrailer = this.getLinkTrailer();
        String pilihanSeason;
        String pilihan, pilihanEpisode;
        int linkSeriesSize = 0;
        Operation op = new Operation();

        while(true) {
            op.clearScreen();
            if(status.equals("complete")) {
                System.out.println("-------------------------------------");
                System.out.println(" Disney+ Clone");
                System.out.println("-------------------------------------");
                System.out.println();
                System.out.println(this.getTitle());
                System.out.print(this.getSeason()+" Season");
                System.out.print(" | ");
                System.out.print(this.getEpisode()+" Episode");
                System.out.print(" | ");
                System.out.print(this.getReleaseDate());
                System.out.print(" | ");
                System.out.print(this.getAgeRating());
                // System.out.print(" | ");
                // System.out.println(this.getDirector());
                System.out.println();
                System.out.println(this.getSynopsis());
                System.out.println();
                System.out.println("[1] Daftar Season   [2] Trailer   [x] Kembali");
                System.out.println();
                System.out.print("Pilihan: ");
                pilihan = input.nextLine();
                if (pilihan.equals("1")) {
                    while(true) {
                        op.clearScreen();
                        System.out.println("-------------------------------------");
                        System.out.println(" Disney+ Clone");
                        System.out.println("-------------------------------------");
                        System.out.println();
                        for (int i = 1; i <= season; i++) {
                            System.out.println("[" + i + "]" + " Season " + i );
                        }
                        System.out.println("[x] Kembali");
                        System.out.println();
                        System.out.print("Pilihan: ");
                        pilihanSeason = input.nextLine();
                        if (pilihanSeason.equals("x") || pilihanSeason.equals("X")) {
                            break;
                        }

                        // Menentukan ukuran season sesuai season yang dipilih
                        if (pilihanSeason.equals("1")) 
                            linkSeriesSize = linkWatchSeries1.size();
                        if (pilihanSeason.equals("2")) 
                            linkSeriesSize = linkWatchSeries2.size();
                        if (pilihanSeason.equals("3")) 
                            linkSeriesSize = linkWatchSeries3.size();
                        if (pilihanSeason.equals("4")) 
                            linkSeriesSize = linkWatchSeries4.size();
                        if (pilihanSeason.equals("5")) 
                            linkSeriesSize = linkWatchSeries5.size();
                        if (pilihanSeason.equals("6")) 
                            linkSeriesSize = linkWatchSeries6.size();
                        if (pilihanSeason.equals("7")) 
                            linkSeriesSize = linkWatchSeries7.size();
                        if (pilihanSeason.equals("8")) 
                            linkSeriesSize = linkWatchSeries8.size();
                        if (pilihanSeason.equals("9")) 
                            linkSeriesSize = linkWatchSeries9.size();
                        if (pilihanSeason.equals("10")) 
                            linkSeriesSize = linkWatchSeries10.size();

                    
                        for (int j = 1; j <= season; j++) {
                            if (Integer.parseInt(pilihanSeason) == j) {
                                while(true) {
                                    op.clearScreen();
                                    System.out.println("-------------------------------------");
                                    System.out.println(" Disney+ Clone");
                                    System.out.println("-------------------------------------");
                                    System.out.println();
                                    for (int k = 1; k <= linkSeriesSize; k++) {
                                        System.out.println("[" + k + "]" + " Episode " + k );
                                    }
                                    System.out.println("[x] Kembali");
                                    System.out.println();
                                    System.out.print("Pilihan: ");
                                    pilihanEpisode = input.nextLine();

                                    if(pilihanEpisode.equals("x") || pilihanEpisode.equals("X")) {
                                        break;
                                    }

                                    for (int l = 0; l < linkSeriesSize; l++) {
                                        if (Integer.parseInt(pilihanEpisode) == l + 1) {
                                            try {
                                                Desktop.getDesktop().browse(new URI(getLinkWatchSeries(Integer.parseInt(pilihanSeason), l)));
                                            } catch (Exception e) {
                                                
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

                else if (pilihan.equals("2")) {
                    try {
                        Desktop.getDesktop().browse(new URI(linkTrailer));
                    } catch (Exception e) {
                        
                    }
                }

                else if (pilihan.equals("x") || pilihan.equals("X")) {
                    break;
                }
            
            }
        
            else {
                System.out.println("-------------------------------------");
                System.out.println(" Disney+ Clone");
                System.out.println("-------------------------------------");
                System.out.println();
                System.out.println(this.getTitle());
                System.out.print(this.getSeason()+" Season");
                System.out.print(" | ");
                System.out.print(this.getEpisode()+" Episode");
                System.out.print(" | ");
                System.out.print(this.getReleaseDate());
                System.out.print(" | ");
                System.out.print(this.getAgeRating());
                // System.out.print(" | ");
                // System.out.println(this.getDirector());
                System.out.println();
                System.out.println(this.getSynopsis());
                System.out.println();
                System.out.println("[1] Trailer   [x] Kembali");
                System.out.println();
                System.out.print("Pilihan: ");
                pilihan = input.nextLine();
                if (pilihan.equals("1")) {
                    try {
                        Desktop.getDesktop().browse(new URI(linkTrailer));
                    } catch (Exception e) {
                        
                    }
                }
                else if (pilihan.equals("x") || pilihan.equals("X")) {
                    break;
                }
            }
        }
    }
}

class InitiateMovie {

    private ArrayList<Movie> movieList = new ArrayList<Movie>();

    public ArrayList<Movie> seedMovies() {
    //     Movie[] movies = new Movie[10];

        Movie movies1 = new Movie();
        movies1.setTitle("Pengabdi Setan");
        movies1.setGenre("Horor");
        movies1.setReleaseDate(2017);
        movies1.setDuration("1 jam 47 menit");
        movies1.setAgeRating("17+");
        movies1.setDirector("Joko Anwar");
        movies1.SetSynopsis("Setelah sakit misterius selama hampir 3 tahun, ibu akhirnya meninggal dunia. Ayah kemudian meninggalkan kota untuk pekerjaan meninggalkan anak-anak sendirian. Segera, anak-anak merasakan bahwa ibu telah kembali ke rumah.");
        movies1.setLinkWatch("https://www.hotstar.com/id/movies/pengabdi-setan/1260040130/watch");
        movies1.setLinkTrailer("https://www.youtube.com/embed/0hSptYxWB3E");
        Movie movies2 = new Movie();
        movies2.setTitle("Pengabdi Setan 2: Communion");
        movies2.setGenre("Horor");
        movies2.setReleaseDate(2022);
        movies2.setDuration("1 jam 59 menit");
        movies2.setAgeRating("17+");
        movies2.setDirector("Joko Anwar");
        movies2.SetSynopsis("Saat badai besar melanda, bukan badai yang harus ditakuti oleh sebuah keluarga, tapi orang-orang dan entitas non-manusia yang keluar mengejar mereka.");
        movies2.setLinkWatch("https://www.hotstar.com/id/movies/pengabdi-setan-2-communion/1260119056/watch");
        movies2.setLinkTrailer("https://www.youtube.com/embed/8LIHcd7WfWI");
        Movie movies3 = new Movie();
        movies3.setTitle("Sri Asih");
        movies3.setGenre("Aksi");
        movies3.setReleaseDate(2022);
        movies3.setDuration("2 jam 13 menit");
        movies3.setAgeRating("13+");
        movies3.setDirector("Upi Avianto");
        movies3.SetSynopsis("Alana tidak mengerti mengapa dia selalu dikuasai oleh kemarahan. Tapi dia selalu berusaha untuk melawannya. Dia lahir saat letusan gunung berapi yang memisahkan dia dan orang tuanya. Dia kemudian diadopsi oleh seorang wanita kaya yang berusaha membantunya menjalani kehidupan normal. Tapi saat dewasa, Alana menemukan kebenaran tentang asalnya.");
        movies3.setLinkWatch("https://www.hotstar.com/id/movies/sri-asih/1260133861/watch");
        movies3.setLinkTrailer("https://www.youtube.com/embed/oQWpRUbWZnU");
        Movie movies4 = new Movie();
        movies4.setTitle("Marvel's The Avengers");
        movies4.setGenre("Aksi");
        movies4.setReleaseDate(2012);
        movies4.setDuration("2 jam 22 menit");
        movies4.setAgeRating("17+");
        movies4.setDirector("Joss Whedon");
        movies4.SetSynopsis("Ketika musuh tak terduga muncul dan mengancam nasib umat manusia, Nick Fury, Direktur SHIELD, mendapati dirinya membutuhkan sebuah tim untuk menarik dunia dari jurang bencana. Menjangkau seluruh dunia, perekrutan yang berani upaya dimulai.");
        movies4.setLinkWatch("https://www.hotstar.com/id/movies/marvels-the-avengers/1660000015/watch");
        movies4.setLinkTrailer("https://www.youtube.com/embed/eOrNdBpGMv8");
        Movie movies5 = new Movie();
        movies5.setTitle("Black Panther: Wakanda Forever");
        movies5.setGenre("Aksi");
        movies5.setReleaseDate(2022);
        movies5.setDuration("2 jam 41 menit");
        movies5.setAgeRating("13+");
        movies5.setDirector("Ryan Coogler");
        movies5.SetSynopsis("Ratu Ramonda, Shuri, M'Baku, Okoye dan Dora Milaje berjuang untuk melindungi bangsa mereka dari campur tangan kekuatan dunia setelah kematian Raja T'Challa.");
        movies5.setLinkWatch("https://www.hotstar.com/id/movies/black-panther-wakanda-forever/1260118821/watch");
        movies5.setLinkTrailer("https://www.youtube.com/embed/_Z3QKkl1WyM");

        movieList.add(movies1);
        movieList.add(movies2);
        movieList.add(movies3);
        movieList.add(movies4);
        movieList.add(movies5);
        return movieList;
    }
}

class InitiateSeries {

    private ArrayList<Series> seriesList = new ArrayList<Series>();

    public ArrayList<Series> seedSeries() {
    //     Movie[] movies = new Movie[10];

        Series series1 = new Series();
        series1.setTitle("Teluh Darah");
        series1.setGenre("Horor");
        series1.setReleaseDate(2023);
        series1.setAgeRating("17+");
        // series1.setDirector("Kimo Stamboel");
        series1.setSeason(1);
        series1.SetEpisode(10);
        series1.SetSynopsis("Dunia Wulan runtuh saat serangan ilmu hitam menimpa keluarganya. Demi keluarganya, Wulan akan berjuang untuk menemukan dalang dari semua teror ini.");
        series1.setLinkWatchSeries(1, "https://www.hotstar.com/id/tv/teluh-darah/1260126026/the-parcel/1260129958");
        series1.setLinkWatchSeries(1, "https://www.hotstar.com/id/tv/teluh-darah/1260126026/bloody-anniversary/1260129959");
        series1.setLinkWatchSeries(1, "https://www.hotstar.com/id/tv/teluh-darah/1260126026/retribution/1260129960");
        series1.setLinkWatchSeries(1, "https://www.hotstar.com/id/tv/teluh-darah/1260126026/signs/1260129961");
        series1.setLinkWatchSeries(1, "https://www.hotstar.com/id/tv/teluh-darah/1260126026/the-uninvited-guests/1260129962");
        series1.setLinkWatchSeries(1, "https://www.hotstar.com/id/tv/teluh-darah/1260126026/the-flower-withers/1260129963");
        series1.setLinkWatchSeries(1, "https://www.hotstar.com/id/tv/teluh-darah/1260126026/double-identity/1260129964");
        series1.setLinkWatchSeries(1, "https://www.hotstar.com/id/tv/teluh-darah/1260126026/reckoning/1260129965");
        series1.setLinkWatchSeries(1, "https://www.hotstar.com/id/tv/teluh-darah/1260126026/the-source/1260129966");
        series1.setLinkWatchSeries(1, "https://www.hotstar.com/id/tv/teluh-darah/1260126026/blood-debt/1260129967");
        series1.setLinkTrailer("https://www.youtube.com/embed/9L6iVfMxTyQ");

        Series series2 = new Series();
        series2.setTitle("Marvel's Agent Carter");
        series2.setGenre("Action");
        series2.setReleaseDate(2015);
        series2.setAgeRating("17+");
        // series2.setDirector("Timo Stamboel");
        series2.setSeason(2);
        series2.SetEpisode(18);
        series2.SetSynopsis("Tahun 1946. Bekerja di badan rahasia SSR (Strategic Scientific Reserve), Peggy harus melakukan pekerjaan administrasi meski dia lebih suka bekerja di lapangan menangkap penjahat.");
        series2.setLinkWatchSeries(1, "https://www.hotstar.com/id/tv/marvels-agent-carter/1260027615/now-is-not-the-end/1260027685");
        series2.setLinkWatchSeries(1, "https://www.hotstar.com/id/tv/marvels-agent-carter/1260027615/bridge-and-tunnel/1260027686");
        series2.setLinkWatchSeries(1, "https://www.hotstar.com/id/tv/marvels-agent-carter/1260027615/time-tide/1260027687");
        series2.setLinkWatchSeries(1, "https://www.hotstar.com/id/tv/marvels-agent-carter/1260027615/the-blitzkrieg-button/1260027688");
        series2.setLinkWatchSeries(1, "https://www.hotstar.com/id/tv/marvels-agent-carter/1260027615/the-iron-ceiling/1260027691");
        series2.setLinkWatchSeries(1, "https://www.hotstar.com/id/tv/marvels-agent-carter/1260027615/sin-to-err/1260027692");
        series2.setLinkWatchSeries(1, "https://www.hotstar.com/id/tv/marvels-agent-carter/1260027615/snafu/1260027693");
        series2.setLinkWatchSeries(1, "https://www.hotstar.com/id/tv/marvels-agent-carter/1260027615/valediction/1260027694");
        series2.setLinkWatchSeries(2, "https://www.hotstar.com/id/tv/marvels-agent-carter/1260027615/the-lady-in-the-lake/1260027698");
        series2.setLinkWatchSeries(2, "https://www.hotstar.com/id/tv/marvels-agent-carter/1260027615/a-view-in-the-dark/1260027716");
        series2.setLinkWatchSeries(2, "https://www.hotstar.com/id/tv/marvels-agent-carter/1260027615/better-angels/1260027717");
        series2.setLinkWatchSeries(2, "https://www.hotstar.com/id/tv/marvels-agent-carter/1260027615/smoke-mirrors/1260027718");
        series2.setLinkWatchSeries(2, "https://www.hotstar.com/id/tv/marvels-agent-carter/1260027615/the-atomic-job/1260027722");
        series2.setLinkWatchSeries(2, "https://www.hotstar.com/id/tv/marvels-agent-carter/1260027615/life-of-the-party/1260027725");
        series2.setLinkWatchSeries(2, "https://www.hotstar.com/id/tv/marvels-agent-carter/1260027615/monsters/1260027726");
        series2.setLinkWatchSeries(2, "https://www.hotstar.com/id/tv/marvels-agent-carter/1260027615/the-edge-of-mystery/1260027728");
        series2.setLinkWatchSeries(2, "https://www.hotstar.com/id/tv/marvels-agent-carter/1260027615/a-little-song-and-dance/1260027731");
        series2.setLinkWatchSeries(2, "https://www.hotstar.com/id/tv/marvels-agent-carter/1260027615/hollywood-ending/1260027732");
        series2.setLinkTrailer("https://www.youtube.com/embed/V13W9gQ_1GA");
        
        seriesList.add(series1);
        seriesList.add(series2);
        return seriesList;
    }
}
