'use strict';

/**
 * @ngdoc factory
 *
 * @name modals
 *
 * @description
 * Factory for rex
 */
(function() {

  angular
    .module('rex')
    .factory('modals', modals);

  function modals($mdDialog) {
    return {
      addDrug: addDrug,
      removeDrug: removeDrug,
      editDrug: editDrug,
      newMessage: newMessage,
      welcome:welcome
    };

    function newMessage(msg) {
      return $mdDialog.show({
        controller: 'NewMsgModal',
        controllerAs: 'NewMsg',
        templateUrl: 'app/views/new-msg-modal/new-msg-modal.view.html',
        resolve: {
          msgToAdd: function() {
            return msg;
          }
        }
      });
    }

    /**
     * add drug modal
     *
     * @memberof modals
     *
     * @param evt
     * @param drug
     */
    function addDrug(evt, drug) {
      return $mdDialog.show({
        controller: 'AddDrugModalCtrl',
        controllerAs: 'AddDrug',
        templateUrl: 'app/views/add-drug-modal/add-drug-modal.view.html',
        targetEvent: evt,
        resolve: {
          drugToAdd: function() {
            return drug;
          }
        }
      });
    }

    /**
     * edit drug modal
     *
     * @memberof modals
     *
     * @param {Object} evt - the click event
     * @param {Object} drug - the drug to edit
     */
    function editDrug(evt, drug) {
      return $mdDialog.show({
        templateUrl: 'app/views/edit-drug-modal/edit-drug-modal.view.html',
        controller: 'EditDrugModalCtrl',
        controllerAs: 'EditDrug',
        targetEvent: evt,
        resolve: {
          drugToEdit: function() {
            return drug;
          }
        }
      });
    }

    /**
     * remove drug modal
     *
     * @memberof modals
     *
     * @param evt
     */
    function removeDrug(evt) {
      return $mdDialog.show({
        templateUrl: 'app/views/remove-drug-modal/remove-drug-modal.view.html',
        controller: 'RemoveDrugModalCtrl',
        controllerAs: 'RemoveDrug',
        targetEvent: evt
      });
    }


    /**
     * welcome modal
     *
     * @memberof modals
     *
     * @param evt
     */
    function welcome(evt) {
      return $mdDialog.show({
        templateUrl: 'app/views/welcome-modal/welcome-modal.view.html',
        controller: function welcomeMod($scope, $mdDialog) {
          $scope.closeDialog = function() {
           $mdDialog.hide();
         }
        }

      });
    }
  }

})();
