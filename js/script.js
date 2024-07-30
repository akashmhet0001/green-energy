// Resources
const content = {
    1: {
        title: 'Solar Panels at Affordable Prices',
        imgSrc: './img/solar.jpg',
        imgAlt: 'Solar Panels',
        bodyText: 'Installing solar panels on your home can significantly reduce your electricity bills and provide a sustainable energy source. By reducing production costs and offering incentives, solar panels can be made affordable for more people. Subsidies and bulk buying can drive down prices.'
    },
    2: {
        title: 'Wind Turbines',
        imgSrc: './img/wind.jpg',
        imgAlt: 'Wind Turbines',
        bodyText: 'Small-scale wind turbines can be used to generate electricity for your home or business, further reducing your dependency on fossil fuels. Government rebates can make the initial investment in green energy more manageable. Programs offering tax breaks or direct subsidies can help offset costs.'
    },
    3: {
        title: 'Geothermal Heat',
        imgSrc: './img/geo.jpg',
        imgAlt: 'Geothermal Heat',
        bodyText: 'Geothermal energy harnesses heat from the Earth’s interior. It can be used for direct heating or converted into electricity. Geothermal systems are efficient and emit minimal greenhouse gases. Community-based projects can spread the cost and benefits of green energy. Shared solar installations or community wind farms can reduce individual costs.'
    }
};

// Initialize content
let dc = document.getElementById('content-container');
let buttons = document.querySelectorAll('.button-container button');

dc.innerHTML = `
    <h2>${content[1].title}</h2>
    <img src="${content[1].imgSrc}" alt="${content[1].imgAlt}" style="width: 100%; max-width: 600px;">
    <p>${content[1].bodyText}</p>
`;

// Button click handler
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonClicked = e.target.closest('button'); // Remove the ACTIVE class from all buttons and add it to the current button
        const id = buttonClicked.id.replace('btn', '');
        const selectedContent = content[id];

        dc.innerHTML = `
            <h2>${selectedContent.title}</h2>
            <img src="${selectedContent.imgSrc}" alt="${selectedContent.imgAlt}" style="width: 100%; max-width: 600px;">
            <p>${selectedContent.bodyText}</p>
        `;

        document.querySelectorAll('.button-container button').forEach(btn => {
            btn.classList.remove('active');
        });
        buttonClicked.classList.add('active');
    });
});
