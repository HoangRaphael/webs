var question = "10+10 bằng mấy?";
var answer = 20;
var correct = 'Đúng';
var incorrect = 'Sai';
        
var response = prompt(question," ");
    if (response != answer) {
    if (confirm("Bạn đã trả lời sai. Nhấn Ok để trả lời lại"))
                 response = prompt(question," ");
        } else {
             if (confirm("Đúng rồi. Nhấn Ok để sang câu hỏi thứ 2.")) {
                 question = "Thế 10*10 bằng mấy?";
                 answer = 100;
                 response = prompt (question," ");
               }
             }   
             var output = (response == answer) ? correct : incorrect;
             document.write(output);