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

  function Inbox($mdDialog, modals, user) {
    var vm = this;
    vm.selected = 0;
    vm.newMsg = newMsg;

    user.getDetails().then(function (userData) {
      vm.user = userData.data.data.nickName;
      vm.msgs = [
        {
          child: 'Thomas Wooster',
          dateCreated: '05/19/2016',
          time: '7:10am',
          eventType: 'Difficulty at school',
          subject: 'Thomas Wooster - Difficulty at school',
          from: 'James Smith (Caseworker)',
          to: vm.user,
          message: 'Thank you for letting me know that Thomas is having difficulty at school. I recommend that you enroll Thomas in an after school tutoring program for one on one support with his homework. Use the CaliCares Facilities Near You tool to find a tutoring facility near you.',
          previewMsg: 'Thank you for letting me know that Thomas is having diffic...',
          unread: true,
          previousMessages: [
            {
              from: vm.user,
              to: 'James Smith (Caseworker)',
              time: '7:15am',
              date: '05/13/2016',
              message: 'I am concerned about Thomas and his performance at school. His teacher said that he is not completing homework assignments and falling behind in his core subjects. How should I address this?'
            }
          ]
        },
        {
          child: 'Jacquelyn Wooster',
          dateCreated: '05/19/2016',
          eventType: 'Concerns of depression',
          subject: 'Jacquelyn Wooster - Concerns of depression',
          from: 'James Smith (Caseworker)',
          to: vm.user,
          message: 'Thank you for reaching out. It may be helpful for Jacquelyn to speak with a counselor about her feelings. Use the CaliCares Facilities Near You tool to find a counseling facility near you.',
          previewMsg: 'Thank you for reaching out. It may be helpful for Jacquelyn to...',
          unread: true,
          previousMessages: [
            {
              from: vm.user,
              to: 'James Smith (Caseworker)',
              time: '7:15am',
              date: '05/13/2016',
              message: 'Jacquelyn has been very sad lately and I am worried that she might be feeling depressed. Do you have suggestions for how I can help?'
            }
          ]
        },
        {
          child: 'Thomas Wooster',
          dateCreated: '05/19/2016',
          eventType: 'Thank you',
          subject: 'Thank you',
          from: 'James Smith (Caseworker)',
          to: vm.user,
          message: 'My pleasure. Feel free to reach out with questions at any time.',
          previewMsg: 'My pleasure. Feel free to reach out with questions at any...',
          unread: false,
          previousMessages: [
            {
              from: vm.user,
              to: 'James Smith (Caseworker)',
              time: '7:15am',
              date: '05/13/2016',
              message: 'Thank you for your help and guidance with Thomas. I appreciate you taking the time to answer my questions.'
            }
          ]
        }
      ];
    });

    vm.selectMsg = function (num) {
      vm.selected = num;
      vm.msgs[num].unread = false;
    };

    function newMsg() {
      var msg;
      var modal = modals.newMessage(msg);

      modal.then(function (message) {
        message.child = 'Timmy Smith';
        // message.dateCreated = '05/19/2016';
        // message.time = '7:10am';
        var date = new Date();
        message.time = formatAMPM(date);
        message.dateCreated = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
        if (message.message) {
          message.previewMsg = message.message.slice(0, 65) + '...';
        }
        message.previousMessages = [];
        message.unread = false;
        message.from = vm.user;

        vm.msgs.unshift(message);
      });

      return modal;
    }

    function formatAMPM(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    }
  }

})();
