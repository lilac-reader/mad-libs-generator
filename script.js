var questions = 16;
var questionsLeft = ' [' + questions + ' questions left]';
var plural_noun = prompt('Please type a plural noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var verb1 = prompt('Please type a verb that does not end in -ing ' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var noun1 = prompt('Please type a noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var adjective1 = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var adjective2 = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var verb2 = prompt('Please type a verb that does not end in -ing ' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var verb3 = prompt('Please type a verb that does not end in -ing ' + questionsLeft);questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var adverb1 = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var verb4 = prompt('Please type a verb that does not end in -ing ' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var noun2 = prompt('Please type a noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var adjective4 = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var noun3 = prompt('Please type a noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var noun4 = prompt('Please type a noun' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var number1 = prompt('Please type a number' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var number2 = prompt('Please type a number' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var adjective5 = prompt('Please type an adjective' + questionsLeft);
alert('All done. Ready for the message?');
var sentence = "<p>Are you fed up with " +plural_noun;
sentence += '? Do you  ' + verb1;
sentence += ' but get frustrated that the ' + noun1;
sentence += ' doesn’t work? Then this ' + adjective1;
sentence += ' product is right for you!! There is really only one way to grasp how ' + adjective2;
sentence += ' this product is and that is to ' + verb2;
sentence += ' it!! Here’s how it works: just ' + verb3;
sentence += ' the product ' + adverb1;
sentence += ' and ' + verb4;
sentence += ' the ' + noun2;
sentence += ' . Isn’t that ' +adjective4;
sentence += '?! Who needs a ' + noun3;
sentence += ' when you’ve got this! The best part? Order right now and I’ll send you a free ' + noun4;
sentence += ' with your order! That’s right! You can get this this amazing product plus  your free gift for only $' +number1;
sentence += '!!! Try it risk free for ' + number2;
sentence += ' days! If you’re not completely ' + adjective5;
sentence += ' we give you your money back! Guaranteed!</p>';
document.write(sentence);