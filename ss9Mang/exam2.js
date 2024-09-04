function translate_word(word) {
    word=word.toLowerCase();
    if (dictionary[word]){
        return dictionary[word];
    }else {
        return "tu"+ word+"khong co trong tu dien";
    }
}