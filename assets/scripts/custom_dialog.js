// var button = document.querySelector('button');
//   var dialog = document.querySelector('dialog');
//   button.addEventListener('click', function() {
//     dialog.showModal();
//     /* Or dialog.show(); to show the dialog without a backdrop. */
//   });

  /*modal js*/

(function() {
        'use strict';
        var dialog = document.querySelector('dialog');
        var closeButton = dialog.querySelector('button');
        var showButton = document.querySelector('.show-modal');
        if (! dialog.showModal) {
            dialogPolyfill.registerDialog(dialog);
        }
        var closeClickHandler = function(event) {
            dialog.close();
        };
        var showClickHandler = function(event) {
            dialog.showModal();
        };
        showButton.addEventListener('click', showClickHandler);
        closeButton.addEventListener('click', closeClickHandler);
    }());


/*Full width modal*/
// var dialog = document.querySelector('dialog');
//     var showModalButton = document.querySelector('.show-modal');
//     if (! dialog.showModal) {
//       dialogPolyfill.registerDialog(dialog);
//     }
//     showModalButton.addEventListener('click', function() {
//       dialog.showModal();
//     });
//     dialog.querySelector('.close').addEventListener('click', function() {
//       dialog.close();
//     });
/*end of modal js*/
