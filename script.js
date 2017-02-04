$(document).ready(function() {

    //declariere Variabelm
    var $input = $('input');
    var $offen = $('.offen');
    var $erledigt = $('.erledigt');
    var $geloescht = $('.geloescht');

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
            });

            //Beim Klick auf den Container der Gelöschtenliste hinzufügen
        }
    });

});

    //console.log("ready!")});

