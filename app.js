class Answer
{
    constructor(correct, text)
    {
        this.correct = correct;
        this.text = text;
    }
}

var answers = [
    new Answer(false, "Cheese"),
    new Answer(false, "NAsvay"),
    new Answer(true, "Xirentai")
]

var correct = 0;
correct = prompt("Введите ответ, варианты: "+answers.map((e) => e.text).join(", "));





if (answers.find((a) => a.text == correct) == answers.find((a) => a.correct) || answers[parseInt(correct+1)].correct)
{
    alert("Right");
}
else 
{
    alert("Wrong");
}












