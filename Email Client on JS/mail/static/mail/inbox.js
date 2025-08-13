var emailsView = document.querySelector("#emails-view")
var letterOpen = document.querySelector("#letter-open")
var composeView = document.querySelector("#compose-view")


document.addEventListener('DOMContentLoaded', function() {
  // Event listeners
  document.querySelector('#inbox').addEventListener('click', () => load_mailbox('inbox'));
  document.querySelector('#sent').addEventListener('click', () => load_mailbox('sent'));
  document.querySelector('#archived').addEventListener('click', () => load_mailbox('archive'));
  document.querySelectorAll('#compose').forEach(compose_button => {
    compose_button.addEventListener('click', () => compose_email("Sent a new email", "", "", ""));
  })
  
  emailsView = document.querySelector("#emails-view")
  letterOpen = document.querySelector("#letter-open")
  composeView = document.querySelector("#compose-view")

  document.querySelectorAll('.list-group-item').forEach(item => {
    if (item.id) { // Тільки кнопки з ID
        item.addEventListener('click', function() {
            document.querySelectorAll('.list-group-item').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    }
  });

  document.querySelector("#close").addEventListener('click', function() {
    emailsView.className = 'p-4 col-md-10'
    letterOpen.style.display = 'none'
  })

  const toastElList = document.querySelectorAll('.toast')
  const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl))

  document.querySelector('.btn-close-white').addEventListener('click', () => hideError()) 

  document.querySelector("#compose-form").onsubmit = function(e) {
    e.preventDefault();

    const receivers = document.querySelector("#compose-recipients input").value;
    const subject = document.querySelector("#compose-subject input").value;
    const message = document.querySelector("#compose-body textarea").value;
    
    if(!receivers.trim()){
      showError("Please enter at least one recipient.", "#compose-recipients")
      return
    } else {
      hideError("#compose-recipients")
    }

    if (!subject.trim()) {showError("You can't sent a email without a subject.", "#compose-subject"); return}
     else{hideError("#compose-subject")}
    if (!message.trim()) {showError("You can't sent a email without a message.", "#compose-body", "textarea"); return} 
      else{hideError("#compose-body", "textarea")}

    fetch("/emails", {
      method: "POST",
      body: JSON.stringify({
        recipients: receivers,
        subject: subject,
        body: message
      })
    })
    .then(response => {
        // Перевіряємо статус відповіді
        if (response.ok) {
            // Якщо все ОК (статус 200-299)
            return response.json();
        } else {
            // Якщо помилка (статус 400, 404, 500 і т.д.)
            return response.json().then(errorData => {
                throw new Error(errorData.error);
            });
        }
    })
    .then(result => {
      hideError();
      load_mailbox('sent');
    })
    .catch(error => {
        // Тут обробляємо всі помилки
        showError(error.message);
    })
  };
  
  // By default, load the inbox
  load_mailbox('inbox')
});

function showError(message, placement="#alert", type="input") {

  if (placement === "#alert"){

    const input = document.querySelector(placement)
    const toast = input.closest(".toast")

    input.innerHTML = message
    toast.style.display = "block"

  } else{
    const input = document.querySelector(`${placement} ${type}`)
    const inputError = document.querySelector(`${placement} .invalid-feedback`)
    
    if (message) {
     inputError.innerHTML = message
    }

    inputError.style.display = "block"
    input.style.border = "1px solid #dc3545"
  }
}

function hideError(placement="#alert",type="input") {

  if (placement === "#alert"){
    const toastElList = document.querySelectorAll('.toast')
    const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl))

    const input = document.querySelector(placement)
    const toast = input.closest(".toast")

    toast.style.display = "none"

  } else if(placement === "all") {
    const Inputs = document.querySelectorAll(".form-control")
    const InputsError = document.querySelectorAll(".invalid-feedback")
    const textarea = document.querySelector("#compose-body textarea")
    const alert = document.querySelector("#alert")

    Inputs.forEach((one_input) => {
      one_input.style.border = "1px solid #ced4da"
    })
    InputsError.forEach((one_input_error) => {
      one_input_error.style.display = "none"
    })

    textarea.style.border = "1px solid #ced4da"
    toast.style.display = "none"

  } else{
    const input = document.querySelector(`${placement} ${type}`)
    const inputError = document.querySelector(`${placement} .invalid-feedback`)

    inputError.style.display = "none"
    input.style.border = "1px solid #ced4da"
  }

}

function compose_email(h3='Sent a new email', receivers="", subject="", body="") {
  // Show compose view and hide other views
  emailsView.style.display = 'none';
  composeView.style.display = 'block';
  
  // Clear out composition fields
  document.querySelector('#compose-subject input').disabled = false

  document.querySelector('#compose-recipients input').value = receivers;
  if (subject){
    document.querySelector('#compose-subject input').value = `Re: ${subject}`
    document.querySelector('#compose-subject input').disabled = true
  } else{document.querySelector('#compose-subject input').value = subject}

  document.querySelector('#compose-body textarea').value = body;
  document.querySelector('#form-title').innerHTML = h3;
  hideError("all")
}

function createToggleButton(email, property, options) {
  const button = document.createElement("button");
  button.className = "btn icon-btn";
  button.dataset.bsToggle = "tooltip";

  updateButtonState(button, email[property], options);

  let undoTimeout = null;

  button.addEventListener("click", function(event) {
    event.stopPropagation();

    const emailItem = button.closest('.list-group');

    // Якщо активне скасування — прибираємо і одразу міняємо стан
    if (undoTimeout) {
      clearTimeout(undoTimeout);
      undoTimeout = null;
      emailItem.style.opacity = '1';
      emailItem.style.transform = 'translateX(0)';
    }

    let newState = !email[property];

    fetch(`emails/${email.id}`, {
      method: "PUT",
      body: JSON.stringify({ [property]: newState })
    })
    .then(() => {
      email[property] = newState;
      updateButtonState(button, newState, options);

      if(options.badge !== undefined){
          const newMessage = emailItem.querySelector('.rounded-pill')
          newMessage.style.display = newState ? "none" : "block" 
          emailItem.querySelectorAll('span').forEach(text => {
            text.style.fontWeight = newState ? "450" : "600";
          })
      }

      // Якщо треба прибрати з DOM
      options.mailbox === 'archive' ? newState = !newState : newState = email[property]
      if (options.removeOnChange && newState) {
        emailItem.style.opacity = '0.5';
        undoTimeout = setTimeout(() => {
          emailItem.remove();
          undoTimeout = null;
        }, 3000);
      }
    })
    .catch(error => {
      showError(error.message)
      email[property] = !newState
      updateButtonState(button, email[property], options)
    });
  })
  return button;
}

function updateButtonState(button, currentState, options) {
  // Прибираємо попередній тултіп, якщо він є
  const existingTooltip = bootstrap.Tooltip.getInstance(button);
  if (existingTooltip) {
    existingTooltip.dispose();
  }

  // Оновлюємо текст та іконку
  if (currentState) {
    button.setAttribute('data-bs-title', options.trueTooltip);
    button.innerHTML = options.trueIcon;
  } else {
    button.setAttribute('data-bs-title', options.falseTooltip);
    button.innerHTML = options.falseIcon;
  }

  // Створюємо новий тултіп
  new bootstrap.Tooltip(button, { trigger: 'hover' });
}


function load_mailbox(mailbox) {
  // Show the mailbox and hide other views
  emailsView.style.display = 'block';
  emailsView.className = 'p-4 col-md-10'
  composeView.style.display = 'none';
  letterOpen.style.display = 'none';

  // Show the mailbox name
  document.querySelector('#title').innerHTML = `${mailbox.charAt(0).toUpperCase() + mailbox.slice(1)}`;


  fetch(`/emails/${mailbox}`)
  .then(response => response.json())
  .then(emails => {
    const emailDiv = document.querySelector('#emails-letters')
    emailDiv.innerHTML = ""

    emails.forEach(function(email){
      // Створюємо карточку
      const emailLetter = document.createElement("div")

      if(email.read){emailLetter.className = "list-group bg-white"} 
        else{emailLetter.className = "list-group bg-white"}

      emailLetter.innerHTML = `
      <div class="list-group-item">
        <div class="d-flex w-100 justify-content-between align-items-center inside-letter">
            <span class="badge text-bg-primary rounded-pill" style="display: ${email.read ? "none" : "block"};width: 8px;height: 8px;font-size: 0px;">&nbsp</span>
            <span class="col-4" style="font-weight: ${email.read ? "450" : "600"}">${mailbox === "sent" ? `<strong>To: </strong>${email.recipients.join(", ")}` : `${email.sender}`}</span>
            <span class="col-5" style="font-weight: ${email.read ? "450" : "600"}">${email.subject}</span>
            <small class="text-muted">${email.timestamp}</small>
            <div class="email-actions" style="display: none"></div>
        </div>
      </div>`

      emailDiv.appendChild(emailLetter)
      // Створили та додали каточку без подій, додаємо відкриття
      emailLetter.querySelector(".list-group-item").addEventListener('click', function(event){
        if(!event.target.closest(".email-actions")){
          openLetter(email.id, emailLetter)
       }
      })

      // Створили та додали каточку без кнопок, додаємо кнопки
      if (mailbox === 'inbox' || mailbox === 'archive') {
        const archiveButton = createToggleButton(email, 'archived', {
          trueTooltip: "Unarchive",
          trueIcon: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentcolor"><path d="M480-253q17 0 28.5-11.5T520-293v-128l36 36q11 11 28 11t28-11q11-11 11-28t-11-28L508-544q-12-12-28-12t-28 12L348-441q-11 11-11 28t11 28q11 11 28 11t28-11l36-36v128q0 17 11.5 28.5T480-253ZM200-640v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z"/></svg>`,
          falseTooltip: "Archive",
          falseIcon: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentcolor"><path d="M200-640h338-18 14-334Zm440 0h120-120Zm-424-80h528l-34-40H250l-34 40Zm184 270 80-40 80 40v-190H400v190ZM200-120q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v156q0 17-11.5 28.5T800-503q-17 0-28.5-11.5T760-543v-97H640v153q-35 20-61 49.5T538-371l-58-29-102 51q-20 10-39-1.5T320-385v-255H200v440h311q17 0 28.5 11.5T551-160q0 16-11.5 28T511-120H200Zm560 0q-17 0-28.5-11.5T720-160v-80h-80q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320h80v-80q0-17 11.5-28.5T760-440q17 0 28.5 11.5T800-400v80h80q17 0 28.5 11.5T920-280q0 17-11.5 28.5T880-240h-80v80q0 17-11.5 28.5T760-120ZM200-640h338-18 14-334Z"/></svg>`,
          removeOnChange: (mailbox === 'inbox' || mailbox === 'archive'), // Прибираємо тільки з inbox
          mailbox: `${mailbox}` 
        });
        
        emailLetter.querySelector(".email-actions").appendChild(archiveButton);
      }

      const viewButton = createToggleButton(email, 'read', {
          trueTooltip: "Mark as unread",
          trueIcon: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentcolor""><path d="M160-280q-33 0-56.5-23.5T80-360v-314q0-15 8.5-29.5T112-726l272-136q17-8 36-8.5t36 8.5l266 136q12 6 20.5 19t11.5 27H637L420-790 160-661v381Zm120 160q-33 0-56.5-23.5T200-200v-360q0-33 23.5-56.5T280-640h520q33 0 56.5 23.5T880-560v360q0 33-23.5 56.5T800-120H280Zm223-245L280-480v280h520v-280L577-365q-17 9-37 9t-37-9Zm37-61 260-134H280l260 134Zm260-134H280h520Z"/></svg>`,
          falseTooltip: "Mark as read",
          falseIcon: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentcolor""><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h360q17 0 28.5 11.5T560-760q0 17-11.5 28.5T520-720H160v480h640v-280q0-17 11.5-28.5T840-560q17 0 28.5 11.5T880-520v280q0 33-23.5 56.5T800-160H160Zm0-560v480-480Zm320 200 129-80q14-9 26.5-4.5T655-589q7 11 5 24t-16 22l-143 90q-10 6-21 6t-21-6L160-640v-80l320 200Zm280-120q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/></svg>`,
          badge: ".rounded-pill",
          mailbox: `${mailbox}`,
      })

      emailLetter.querySelector(".email-actions").appendChild(viewButton)

      emailLetter.querySelector(".list-group-item").addEventListener('mouseover', function() {
       emailLetter.querySelector(".email-actions").style.display = "block"
       emailLetter.querySelector(".text-muted").style.display = "none"
      })

      emailLetter.querySelector(".list-group-item").addEventListener('mouseout', function() {
       emailLetter.querySelector(".email-actions").style.display = "none"
       emailLetter.querySelector(".text-muted").style.display = "block"
      })
      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
      const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
     })
  });
}

function openLetter(id, emailLetter) {
  const newMessage = emailLetter.querySelector('.rounded-pill')
  newMessage.style.display = "none" 
  emailLetter.querySelectorAll('span').forEach(text => {
    text.style.fontWeight = "450";
  })

  fetch(`emails/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      read: true
    })
  })


  fetch(`/emails/${id}`)
  .then(response => response.json())
  .then(letter => {
    emailsView.className = 'p-4 col-md-6';
    letterOpen.style.display = 'block';
    const content = document.querySelector("#content")

    content.querySelector("#Subject").innerHTML = letter.subject
    content.querySelector("#Date").innerHTML = letter.timestamp
    content.querySelector("#Sender").innerHTML = letter.sender
    content.querySelector("#Recipients").innerHTML = letter.recipients.join(", ")
    content.querySelector("#Body-Content").innerHTML = letter.body
    content.querySelector("#ArchivedDiv").style.display = letter.archived ? "flex" : "none"

    const replyButton = document.createElement("button")
    replyButton.className = "btn btn-primary"
    replyButton.innerHTML = "Reply"

    replyButton.addEventListener('click', function(event){
      event.stopPropagation()
      compose_email(`Reply to ${letter.recipients.join(", ")}`, letter.sender, letter.subject, `On ${letter.timestamp} ${letter.sender} написав: ${letter.body}`) 
    })

        content.querySelector(".email-actions").replaceChildren(replyButton)
  })
}