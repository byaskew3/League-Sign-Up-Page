let emailCollectorForm = document.querySelector('#email-collector')
emailCollectorForm.addEventListener('submit', event => {
    event.preventDefault()
    let userFormData = new FormData(event.target)
    let userFirstName = userFormData.get('firstName');
    let userEmailAddress = userFormData.get('emailAddress')

    let updatedHtmlContent = `
        <h3>Congratulations, <span class='bold-text'>${userFirstName}</span>!</h3>
        <p>You're on your way to becoming a League of Legends Master!</p>
        <p>You will get weekly player tips sent to:<span class='bold-text'> ${userEmailAddress}</span></p>`
    
    let updatedContentContainer = document.querySelector('.main-container');
    updatedContentContainer.style.fontSize = '2rem'
    updatedContentContainer.style.justifyContent = 'center';
    updatedContentContainer.style.border = '1px solid #fff'
    updatedContentContainer.innerHTML = updatedHtmlContent;
})