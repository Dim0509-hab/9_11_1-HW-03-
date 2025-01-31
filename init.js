   
document.getElementById('btnRetry').addEventListener('click', function ()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('birthDayOutput').innerText = initPerson.birthDay + " " + initPerson.monthDay;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic; 

});  

document.getElementById('btnClear').addEventListener('click', function () {
    
    window.location.reload();    
})