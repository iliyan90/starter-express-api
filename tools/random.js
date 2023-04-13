class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.middle = null;
      this.right = null;
      this.word = null;
    }
  }
  
  class TernarySearchTree {
    constructor() {
      this.root = null;
    }
  
    insert(word) {
      if (!word) return;
      this.root = this._insert(this.root, word, 0);
    }
  
    _insert(node, word, index) {
      if (!node) {
        node = new Node(word.charAt(index));
      }
  
      if (word.charAt(index) < node.value) {
        node.left = this._insert(node.left, word, index);
      } else if (word.charAt(index) > node.value) {
        node.right = this._insert(node.right, word, index);
      } else {
        if (index < word.length - 1) {
          node.middle = this._insert(node.middle, word, index + 1);
        } else {
          node.word = word;
        }
      }
  
      return node;
    }
  
    search(word) {
      let node = this.root;
      let i = 0;
  
      while (node) {
        if (word.charAt(i) < node.value) {
          node = node.left;
        } else if (word.charAt(i) > node.value) {
          node = node.right;
        } else {
          if (i === word.length - 1) {
            return node.word;
          }
          i++;
          node = node.middle;
        }
      }
  
      return null;
    }
  }
  
  export function getAllCombinations(str, words) {
    const trie = new TernarySearchTree();
    const combinations = new Set();
  
    // Insert all words in the trie
    for (const word of words) {
      trie.insert(word);
    }
  
    // Generate all combinations of the input string
    for (let i = str.length < 6 ? str.length : 6; i >= 3; i--) {
      generate(str, i, "");
    }
  
    // Recursive function to generate combinations of a given length
    function generate(str, length, current) {
      // Base case: we've reached the desired length, search for the combination in the trie
      if (current.length === length) {
        const word = trie.search(current);
        if (word) {
          combinations.add(word);
        }
        return;
      }
  
      // Recursive case: add each character to the current combination and call generate() again
      for (let i = 0; i < str.length; i++) {
        generate(str, length, current + str[i]);
      }
    }
    return [...combinations];
  }