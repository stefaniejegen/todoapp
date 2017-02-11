//JavaScript
$(document).ready(function() {
//declariere Variabel
var $input = $('input');
var $offen = $('.offen');
var $erledigt = $('.erledigt');
var $geloescht = $('.geloescht');

//Taskliste erstellen
    var taskListe = [
        {caption:"Milch einkaufen", erledigt:true, "id":20},
        {caption:"Käse einkaufen", erledigt:false, "id":21},
        {caption:"Rechnungen zahlen", erledigt:false, "id":22}
        ];
    var myJSON = JSON.stringify(taskListe);


//Jede Aufgabe aus meiner taskListe soll je nach erledigt in die offen oder erledigt liste
    taskListe.forEach(function (task) {
        if(!task.erledigt){
            var taskFromArray = $('<div class="aufgaben"></div>');
            var makeUl = $('<ul></ul>');
            makeUl.append('<li class="clock"> <img src="images/clock.png"></li>');
            makeUl.append('<li class="tag"><img src="images/tag.png"></li>');
            taskFromArray.append(makeUl);

            var titelParagraph = $('<p></p>');
            titelParagraph.text(task.caption);
            taskFromArray.append(titelParagraph);
            $offen.after(taskFromArray);

            taskFromArray.on('click', function () {
                $erledigt.after($(this));

                taskFromArray.on('click', function () {
                    $geloescht.after($(this));
                });

            });



        } else {
            var taskFromArray = $('<div class="aufgaben"></div>');
            var makeUl = $('<ul></ul>');
            makeUl.append('<li class="clock"> <img src="images/clock.png"></li>');
            makeUl.append('<li class="tag"><img src="images/tag.png"></li>');
            taskFromArray.append(makeUl);

            var titelParagraph = $('<p></p>');
            titelParagraph.text(task.caption);
            taskFromArray.append(titelParagraph);
            $erledigt.after(taskFromArray);

            taskFromArray.on('click', function () {
                $geloescht.after($(this));
            });
        }
    });


//jQuery





    //finde searchimage, deklarier das mit klick darauf etw. geschehen soll
    $('img[src="images/search.png"]').on('click', function () {

      //deklariere den inputInhalt
        var inputInhalt = $input.val();

        //wenn value in Feld, bei Click auf button li erstellen
        if (inputInhalt !== '') {

            // Inhalt leeren


            //Container erstellen
            var $listItem = $('<div class="aufgaben"></div>');

            //ul erstellen
            var $headerList = $('<ul></ul>');

            //li mit img dem ul hinzugefügt 2x
            $headerList.append('<li class="clock"> <img src="images/clock.png"></li>');
            $headerList.append('<li class="tag"><img src="images/tag.png"></li>');

            // ul dem Container hinzufügen
            $listItem.append($headerList);

            //ein P erstellen
            var $paragraph = $('<p></p>');

            //dem p den InputInhalt hinzufügen
            $paragraph.text(inputInhalt);


            //p dem Container hinzufügen
            $listItem.append($paragraph);

            //der Offen-Liste den ganzen Container hinzufügen
            $offen.after($listItem);


            //Beim Klick auf den Container der Erledigtliste hinzufügen
            $listItem.on('click', function () {
                $erledigt.after($(this));
                $listItem.on('click', function () {
                    $geloescht.after($(this));
                });
            });

            $input.val('');

        }

    });


});
//console.log("ready!")});