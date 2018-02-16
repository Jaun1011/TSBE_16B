public class AufgabeBaum {
    public static void main(String[] args) {
        makeTree(17, 4);
    }


    public static void makeTree(int length, int heigth) {
        int widht= 0;
        for (int i = 0; i < length; i++) {
            widht = i + i - 1;
            System.out.print(getPreampel(length - i - 1, " "));
            System.out.println(getPreampel(widht , "#"));
        }
        getStump(widht / 2 , heigth);
    }

    public static void getStump(int lenght, int heigth) {
        for (int i = 0; i < heigth; i++) {
            System.out.print(getPreampel(lenght, " "));
            System.out.println(getPreampel(1, "|"));
        }
    }

    public static String getPreampel(int length, String sign) {
        String preampel = "";
        for (int i = 0; i < length; i++) {
            preampel += sign;
        }
        return preampel;
    }
}
