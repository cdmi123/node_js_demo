var puzzle = require('../model/puzzlemodel');

function makeid(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function shuffleWord (word){
    var shuffledWord = '';
    word = word.split('');
    while (word.length > 0) {
      shuffledWord +=  word.splice(word.length * Math.random() << 0, 1);
    }
    return shuffledWord;
}

exports.insert = async (req,res) => {

    var total_random_char  = 16-req.body.puzzle_name.length;
    var random_char = makeid(total_random_char);
    random_char = random_char+req.body.puzzle_name;
    random_char = shuffleWord(random_char);
    req.body.puzzle_string = random_char;

    var data = await puzzle.create(req.body);
    res.status(200).json({
        status:"data insert",
        data,
    })
}

exports.get_data = async (req,res) => {
    var data = await puzzle.find().populate("cat_id");
    res.status(200).json({
        status:"data selected",
        data
    })
}