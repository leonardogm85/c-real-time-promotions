const connection = new signalR
    .HubConnectionBuilder()
    .withUrl('/PromotionsHub')
    .build();

connection
    .start()
    .catch(console.error)
    .then(() => console.info('Connected!'));

connection.on('RegisteredSuccessfully', () => {
    const message = document.getElementById('message');
    message.innerHTML = 'Registered Successfully!';
});

connection.on('ReceivePromotion', (promotion) => {
    console.info(promotion);
});

const register = document.getElementById('register');

register?.addEventListener('click', () => {
    const company = document.getElementById('company');
    const description = document.getElementById('description');
    const rule = document.getElementById('rule');
    const address = document.getElementById('address');

    const promotion = {
        company: company.value,
        description: description.value,
        rule: rule.value,
        address: address.value
    };

    connection
        .invoke('Register', promotion)
        .catch(console.error)
        .then(() => console.info('Registered Successfully!'));
});
