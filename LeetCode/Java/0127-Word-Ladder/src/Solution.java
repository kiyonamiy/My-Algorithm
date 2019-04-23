import java.util.*;

/**
 * @author KiyonamiYu
 * @date 2019/4/23 8:31
 */
public class Solution {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        int wordLen = beginWord.length();

        Map<String, ArrayList<String>> allComboDict = new HashMap<>();

        wordList.forEach(word -> {
            for(int i = 0; i < wordLen; i ++) {
                String newWord = word.substring(0, i) + "*" + word.substring(i + 1, wordLen);

                ArrayList<String> transformations = allComboDict.getOrDefault(newWord, new ArrayList<>());
                transformations.add(word);
                allComboDict.put(newWord, transformations);
            }
        });

        Set<String> visited = new HashSet<>();
        Queue<WordLadder> queue = new LinkedList<>();

        queue.add(new WordLadder(beginWord, 1));
        visited.add(beginWord);

        while(!queue.isEmpty()) {
            WordLadder wordLadder = queue.remove();
            String word = wordLadder.word;
            int ladder = wordLadder.ladder;

            for(int i = 0; i < wordLen; i ++) {
                String newWord = word.substring(0, i) + "*" + word.substring(i + 1, wordLen);

                for(String adjacentWord : allComboDict.getOrDefault(newWord, new ArrayList<>())) {
                    if(adjacentWord.equals(endWord)) {
                        return ladder + 1;
                    }
                    if(!visited.contains(adjacentWord)) {
                        queue.add(new WordLadder(adjacentWord, ladder + 1));
                        visited.add(adjacentWord);
                    }
                }
            }
        }

        return 0;
    }
}
