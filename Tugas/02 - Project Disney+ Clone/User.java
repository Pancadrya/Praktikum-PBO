import java.util.Scanner;
import java.util.ArrayList;

class User {
    private String username;
    private boolean subscription;
    private String password;

    public void setUsername(String username) {
        this.username = username;
    }
    
    public String getUsername() {
        return this.username;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    
    public String getPassword() {
        return this.password;
    }

    public void setSubcription(boolean subscription) {
        this.subscription = subscription;
    }
    
    public boolean getSubcription() {
        return this.subscription;
    }

}


class InitiateUser {
    private ArrayList<User> userList = new ArrayList<User>();

    public void signUp(String username, String password, boolean subscription) {
        User newUser = new User();
        newUser.setUsername(username);
        newUser.setPassword(password);
        newUser.setSubcription(subscription);
        userList.add(newUser);
    }

    public ArrayList<User> seedUsers() {
        User user1 = new User();
        user1.setUsername("Akun");
        user1.setSubcription(false);

        User user2 = new User();
        user2.setUsername("Udin");
        user2.setPassword("456");
        user2.setSubcription(true);

        User user3 = new User();
        user3.setUsername("Imam");
        user3.setPassword("masukAkun");
        user3.setSubcription(true);

        User user4 = new User();
        user4.setUsername("Agus");
        user4.setPassword("qwerty");
        user4.setSubcription(true);

        userList.add(user1);
        userList.add(user2);
        userList.add(user3);
        userList.add(user4);

        return userList;
    }
}

class Account {
    Scanner input = new Scanner(System.in);
    String username;
    String password;
    String ensurePassword;
    boolean isFound = false;
    boolean isCreated = false;
    InitiateUser u = new InitiateUser();
    ArrayList<User> users = u.seedUsers();

    public void create() {
        clearScreen();
        System.out.println("-------------------------------------");
        System.out.println(" Disney+ Clone");
        System.out.println("-------------------------------------");
        System.out.print("Masukkan username: ");
        username = input.nextLine();
        System.out.print("Masukkan password: ");
        password = input.nextLine();
        System.out.print("Masukkan kembali password: ");
        ensurePassword = input.nextLine();

        for (User user: users){
            if(!(this.username.equals(user.getUsername())) && this.password.equals(ensurePassword)) 
            {
                clearScreen();
                isCreated = true;
                u.signUp(username, password, true);
                System.out.println("Sign Up berhasil!");
                System.out.println("Setelah ini, silahkan lakukan Sign In!");
                System.out.println("Tekan tombol apa saja untuk melanjutkan!");
                input.nextLine();
                break;
            }
        }

        if (!isCreated) {
            clearScreen();
            System.out.println("Sign Up gagal!");
            System.out.println("Tekan tombol apa saja untuk melanjutkan!");
            input.nextLine();
        }
    }

    public User login() {
        User account = users.get(0);
        clearScreen();
        System.out.println("-------------------------------------");
        System.out.println(" Disney+ Clone");
        System.out.println("-------------------------------------");
        System.out.print("Masukkan username: ");
        username = input.nextLine();
        System.out.print("Masukkan password: ");
        password = input.nextLine();

        for (User user: users){
            if(this.username.equals(user.getUsername()) && this.password.equals(user.getPassword())) 
            {
                clearScreen();
                isFound = true;
                System.out.println("Login berhasil!");
                account = user;
                System.out.println("Tekan tombol apa saja untuk melanjutkan!");
                input.nextLine();
                break;
            }
        }

        if (!isFound) {
            clearScreen();
            System.out.println("Login gagal!");
            System.out.println("Tekan tombol apa saja untuk melanjutkan!");
            input.nextLine();
        }

        return account;
    }

    private static void clearScreen(){
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
