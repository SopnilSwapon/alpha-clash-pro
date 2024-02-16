function getField (fieldId, anoFieldId){
  const field = document.getElementById(fieldId);
  field.classList.add('hidden');
  const anotherField = document.getElementById(anoFieldId);
  anotherField.classList.remove('hidden');
}