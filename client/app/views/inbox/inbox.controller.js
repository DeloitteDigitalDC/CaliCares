'use strict';

/**
 * @ngdoc controller
 *
 * @name Inbox
 *
 * @text
 * Controller for rex
 */
(function () {

  angular
    .module('rex')
    .controller('InboxCtrl', Inbox);

  function Inbox() {
    var vm = this;
    vm.selected = 0;
    
    vm.selectMsg = function(num){
      vm.selected = num;
    };
    
    vm.msgs = [
      {
        child: 'Timmy Smith',
        dateCreated: '05/19/2016',
        eventType: 'Emotional outburst',
        from: 'James Smith',
        message: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.',
        previewMsg: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, e...',
        previousMessages:[
          {
            commentor: 'James Smith',
            time: '7:15am',
            date: 'May 13th',
            text: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla'
          },
          {
            commentor: 'Chuck Taylor',
            time: '1:10pm',
            date: 'May 16th',
            text: 'Etiam porta sem malesuada magna mollis euismod.'
          },
          {
            commentor: 'James Smith',
            time: '3:13pm',
            date: 'May 14th',
            text: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla'
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
        previousMessages:[
          {
            commentor: 'James Smith',
            time: '7:15am',
            date: 'May 13th',
            text: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla'
          },
          {
            commentor: 'Chuck Taylor',
            time: '1:10pm',
            date: 'May 16th',
            text: 'Etiam porta sem malesuada magna mollis euismod.'
          },
          {
            commentor: 'James Smith',
            time: '3:13pm',
            date: 'May 14th',
            text: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla'
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
        previousMessages:[
          {
            commentor: 'James Smith',
            time: '7:15am',
            date: 'May 13th',
            text: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla'
          },
          {
            commentor: 'Chuck Taylor',
            time: '1:10pm',
            date: 'May 16th',
            text: 'Etiam porta sem malesuada magna mollis euismod.'
          },
          {
            commentor: 'James Smith',
            time: '3:13pm',
            date: 'May 14th',
            text: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla'
          }
        ]
      }
    ];
   
  }

})();

