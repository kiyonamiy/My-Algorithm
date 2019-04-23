import java.util.ArrayList;
import java.util.Arrays;

public class Main {

    public static void main(String[] args) {
        String beginWord = "hit";
        String endWord = "cog";
        String[] words = {"hot","dot","dog","lot","log","cog"};

        ArrayList<String> wordList = new ArrayList<>(Arrays.asList(words));
        new Solution().ladderLength(beginWord, endWord, wordList);
    }
}
