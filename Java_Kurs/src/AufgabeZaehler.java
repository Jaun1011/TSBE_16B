public class AufgabeZaehler {
    public static void main(String[] args) {
        boolean a = true;
        int v = 4;
        int c = 4;

        /* Kompare funktioniert so*/
        boolean result = (c == v) == a;
        System.out.println(result);

        whileloop();
    }

    public static void whileloop(){
        int i = 1;
        int result = 0;

        while (i <= 100){
            result += i;
            i++;
        }
        System.out.println(result);
    }
}
