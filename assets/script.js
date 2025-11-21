let contacts = [];

// Function to add contacts
function addContact() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (!name || !phone) {
        alert("Please enter both name and phone number.");
        return;
    }

    contacts.push({ name, phone });
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    updateList();
}

// Function to delete a contact
function deleteContact(index) {
    contacts.splice(index, 1);
    updateList();
}

// Function to search contacts
function searchContacts() {
    const term = document.getElementById("search").value.toLowerCase();
    const filtered = contacts.filter(c =>
        c.name.toLowerCase().includes(term) ||
        c.phone.includes(term)
    );
    updateList(filtered);
}

// Function to update the contact list 
function updateList(list = contacts) {
    const listEl = document.getElementById("contactList");
    listEl.innerHTML = "";

    if (list.length === 0) {
        listEl.innerHTML = '<li style="text-align:center;color:#888">No contacts found.</li>';
        return;
    }

    list.forEach((contact, index) => {
        const li = document.createElement("li");

        const info = document.createElement("div");
        info.className = "contact-info";
        info.innerHTML = `<strong> ${contact.name}</strong><span> ${contact.phone}</span>`;

        const delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        delBtn.className = "delete-btn";
        delBtn.style.width = '100px';
        delBtn.onclick = () => deleteContact(index);

        li.appendChild(info);
        li.appendChild(delBtn);
        listEl.appendChild(li);
    });
}
