document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('create-group-form');
    const addMemberButton = document.getElementById('add-member');
    const membersList = document.getElementById('members-list');
    const groupMembersInput = document.getElementById('group-members');

    addMemberButton.addEventListener('click', () => {
        const memberEmail = groupMembersInput.value.trim();
        if (memberEmail) {
            const listItem = document.createElement('li');
            listItem.textContent = memberEmail;
            membersList.appendChild(listItem);
            groupMembersInput.value = '';
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const members = [];
        membersList.querySelectorAll('li').forEach(li => members.push(li.textContent));

        formData.append('members', JSON.stringify(members));
        
        // Handle form submission, e.g., via AJAX or other means
        console.log('Form Data:', Object.fromEntries(formData.entries()));
    });
});
