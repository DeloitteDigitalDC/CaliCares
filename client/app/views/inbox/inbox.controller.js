'use strict';

/**
 * @ngdoc controller
 *
 * @name Inbox
 *
 * @message
 * Controller for rex
 */
(function () {

  angular
    .module('rex')
    .controller('InboxCtrl', Inbox);

  function Inbox($mdDialog) {
    var vm = this;
    vm.selected = 0;
    vm.newMsg = newMsg;

    vm.selectMsg = function(num){
      vm.selected = num;
      vm.msgs[num].unread = false;
    };

    function newMsg() {
      $mdDialog.show({
          controller: 'NewMessageModal',
          controllerAs: 'NewMessage',
          templateUrl: 'app/components/new-message-modal/new-message-modal.view.html',
          clickOutsideToClose: true
        })
        .then(function() {
          //onsubmit
          console.log('in submit');
          // vm.postProposal('Submitted');
        }, function() {
          //on cancel
        });
    }

    vm.msgs = [
      {
        child: 'Timmy Smith',
        dateCreated: '05/19/2016',
        eventType: 'Emotional outburst',
        from: 'James Smith',
        message: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.',
        previewMsg: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, e...',
        unread: true,
        previousMessages:[
          {
            from: 'James Smith',
            time: '7:15am',
            date: 'May 13th',
            message: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla'
          },
          {
            from: 'Chuck Taylor',
            time: '1:10pm',
            date: 'May 16th',
            message: 'Etiam porta sem malesuada magna mollis euismod.'
          },
          {
            from: 'James Smith',
            time: '3:13pm',
            date: 'May 14th',
            message: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla'
          }
        ]
      },
      {
        child: 'Timmy Smith',
        dateCreated: '05/19/2016',
        eventType: 'Emotional outburst',
        from: 'James Smith',
        message: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.',
        previewMsg: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, e...',
        unread: true,
        previousMessages:[
          {
            from: 'James Smith',
            time: '7:15am',
            date: 'May 13th',
            message: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla'
          },
          {
            from: 'Chuck Taylor',
            time: '1:10pm',
            date: 'May 16th',
            message: 'Etiam porta sem malesuada magna mollis euismod.'
          },
          {
            from: 'James Smith',
            time: '3:13pm',
            date: 'May 14th',
            message: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla'
          }
        ]
      },
      {
        child: 'Timmy Smith',
        dateCreated: '05/19/2016',
        eventType: 'Emotional outburst',
        from: 'James Smith',
        message: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.',
        previewMsg: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, e...',
        unread: false,
        previousMessages:[
          {
            from: 'James Smith',
            time: '7:15am',
            date: 'May 13th',
            message: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla'
          },
          {
            from: 'Chuck Taylor',
            time: '1:10pm',
            date: 'May 16th',
            message: 'Etiam porta sem malesuada magna mollis euismod.'
          },
          {
            from: 'James Smith',
            time: '3:13pm',
            date: 'May 14th',
            message: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla'
          }
        ]
      }
    ];

  }

})();
