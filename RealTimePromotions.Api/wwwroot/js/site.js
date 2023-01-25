const connection = new signalR
    .HubConnectionBuilder()
    .withUrl('/PromotionsHub')
    .build();

const start = async () => {
    await connection
        .start()
        .then(() => {
            console.info('Connected!');
        })
        .catch((err) => {
            console.error(err);
            setTimeout(start, 5000);
        });
};

start();

connection.onclose(async () => {
    await start();
});

connection.on('RegisteredSuccessfully', () => {
    const message = document.getElementById('message');
    message.innerHTML = 'Registered Successfully!';
});

connection.on('ReceivePromotion', (promotion) => {
    const containerList = document.getElementById('promotion-list');

    const containerItem = document.createElement('div');
    containerItem.setAttribute('class', 'promotion-item');

    const containerDescription = document.createElement('div');
    containerDescription.setAttribute('class', 'promotion-description');

    const promotionCompany = document.createElement('h1');
    promotionCompany.innerText = promotion.company;

    const promotionDescription = document.createElement('p');
    promotionDescription.innerText = promotion.description;

    const promotionRule = document.createElement('p');
    promotionRule.innerText = promotion.rule;

    const containerButton = document.createElement('div');
    containerButton.setAttribute('class', 'promotion-button');

    const promotionAddress = document.createElement('a');
    promotionAddress.setAttribute('href', promotion.address);
    promotionAddress.setAttribute('target', '_blank');
    promotionAddress.innerText = 'Take';

    containerDescription.appendChild(promotionCompany);
    containerDescription.appendChild(promotionDescription);
    containerDescription.appendChild(promotionRule);

    containerButton.appendChild(promotionAddress);

    containerItem.appendChild(containerDescription);
    containerItem.appendChild(containerButton);

    containerList.appendChild(containerItem);
});

const register = document.getElementById('register');

register?.addEventListener('click', async () => {
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

    await connection
        .invoke('Register', promotion)
        .then(() => console.info('Registered Successfully!'))
        .catch(console.error);
});
