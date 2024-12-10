trigger TestAccountTrigger on New56__c (after update) {
 Trigger.new.get(0).addError('some error');
}