import java.util.Scanner;
import java.util.ArrayList;

class Operation {
    private Scanner input = new Scanner(System.in);
    private InitiateMovie x1 = new InitiateMovie();
    private InitiateUser u = new InitiateUser();
    private InitiateSeries x2 = new InitiateSeries();
    private String pilihan, pilihanDaftar;
    private boolean lanjut = true;
    private Account account = new Account();
    private ArrayList<Movie> listMovie = x1.seedMovies();
    private ArrayList<User> listUser = u.seedUsers();
    private ArrayList<Series> listSeries = x2.seedSeries();
    private User currentAccount = listUser.get(0);

    public void mainMenu() {
        while(lanjut) {
            startMenu();
            
            if(currentAccount.getSubcription() == true) {
                completeMenu();
            }
            // lanjut = getYesorNo("Apakah Anda ingin melanjutkan");
            System.out.println();
        }
    }

    private void startMenu() {
        clearScreen();
        System.out.println("-------------------------------------");
        System.out.println(" Disney+ Clone            [a] "+currentAccount.getUsername());
        System.out.println("-------------------------------------");
        System.out.println();
        System.out.println("[1] Pengabdi Setan");
        System.out.println("[2] Pengabdi Setan 2: Communion");
        System.out.println("[3] Sri Asih");
        System.out.println("[4] Marvel's The Avengers");
        System.out.println("[5] Black Panther: Wakanda Forever");
        System.out.println("[6] Teluh Darah");
        System.out.println("[7] Marvel's Agent Carter");
        System.out.println("[x] Keluar");
        System.out.println();
        System.out.println("-------------------------------------");
        System.out.print("Pilih Film: ");
        pilihan = input.nextLine();
        switch(pilihan) {
            case "1": 
                clearScreen();
                (listMovie.get(0)).showDetail("not complete");
            break;
            case "2":
                clearScreen();
                (listMovie.get(1)).showDetail("not complete");
            break;
            case "3":
                clearScreen();
                (listMovie.get(2)).showDetail("not complete");
            break;
            case "4":
                clearScreen();
                (listMovie.get(3)).showDetail("not complete");
            break;
            case "5":
                clearScreen();
                (listMovie.get(4)).showDetail("not complete");
            break;
            case "6":
                clearScreen();
                (listSeries.get(0)).showDetail("not complete");
            break;
            case "7":
                clearScreen();
                (listSeries.get(1)).showDetail("not complete");
            break;
            case "a":
            case "A":
                    signInAndUpMenu();
                break;
            case "x":
            case "X":
                clearScreen();
                System.exit(0);
                break;
            default:
                clearScreen();
                System.out.println("Error: Input tidak valid");
                break;
        }
    }

    private void completeMenu() {
        while(lanjut) {
            clearScreen();
            System.out.println("-------------------------------------");
            System.out.println(" Disney+ Clone            [a] "+currentAccount.getUsername());
            System.out.println("-------------------------------------");
            System.out.println();
            System.out.println("[1] Pengabdi Setan");
            System.out.println("[2] Pengabdi Setan 2: Communion");
            System.out.println("[3] Sri Asih");
            System.out.println("[4] Marvel's The Avengers");
            System.out.println("[5] Black Panther: Wakanda Forever");
            System.out.println("[6] Teluh Darah");
            System.out.println("[7] Marvel's Agent Carter");
            System.out.println("[x] Keluar");
            System.out.println();
            System.out.println("-------------------------------------");
            System.out.print("Pilih Film: ");
            pilihan = input.nextLine();
            switch(pilihan) {
                case "1": 
                    clearScreen();
                    (listMovie.get(0)).showDetail("complete");
                break;
                case "2":
                    clearScreen();
                    (listMovie.get(1)).showDetail("complete");
                break;
                case "3":
                    clearScreen();
                    (listMovie.get(2)).showDetail("complete");
                break;
                case "4":
                    clearScreen();
                    (listMovie.get(3)).showDetail("complete");
                break;
                case "5":
                    clearScreen();
                    (listMovie.get(4)).showDetail("complete");
                break;
                case "6":
                    clearScreen();
                    (listSeries.get(0)).showDetail("complete");
                break;
                case "7":
                    clearScreen();
                    (listSeries.get(1)).showDetail("complete");
                break;
                case "a":
                case "A":
                    if (currentAccount.getSubcription() == true)
                        signOutMenu();
                    if (currentAccount == listUser.get(0))
                        mainMenu();
                    break;
                case "x":
                case "X":
                    clearScreen();
                    System.exit(0);
                break;
                default:
                    clearScreen();
                    System.out.println("Error: Input tidak valid");
                    break;
            }
            
            // lanjut = getYesorNo("Apakah Anda ingin melanjutkan");
            System.out.println();
        }
    }

    private void signInAndUpMenu() {
        clearScreen();
        System.out.println("-------------------------------------");
        System.out.println(" Disney+ Clone");
        System.out.println("-------------------------------------");
        System.out.println();
        System.out.println("[1] Masuk");
        System.out.println("[2] Daftar");
        System.out.println("[3] Kembali");
        System.out.println();
        System.out.println("-------------------------------------");
        System.out.print("Pilihan: ");
        pilihanDaftar = input.nextLine();
        switch(pilihanDaftar) {
            case "1":
                currentAccount = account.login();
                break;
            case "2":
                account.create();
                break;
            case "3":
                break;
            default:
                System.out.println("Error: pilihan salah!");
                break;
        }
    }

    private void signOutMenu() {
        clearScreen();
        System.out.println("-------------------------------------");
        System.out.println(" Disney+ Clone");
        System.out.println("-------------------------------------");
        System.out.println();
        System.out.println("[1] Keluar");
        System.out.println("[2] Kembali");
        System.out.println();
        System.out.println("-------------------------------------");
        System.out.print("Pilihan: ");
        pilihanDaftar = input.nextLine();
        switch(pilihanDaftar) {
            case "1":
                currentAccount = listUser.get(0);
                break;
            case "2":
                break;
            default:
                System.out.println("Error: pilihan salah!");
                break;
        }
    }
    
    public static void clearScreen(){
        try {
            if (System.getProperty("os.name").contains("Windows")){
                new ProcessBuilder("cmd","/c","cls").inheritIO().start().waitFor();
            } else {
                System.out.print("\033\143");
            }
        } catch (Exception ex){
            System.err.println("tidak bisa clear screen");
        }
    }
}
