document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('graph-container');
    const data = generateContributionData();

    data.forEach((day) => {
        const div = document.createElement('div');
        div.className = `contribution level-${day.level}`;
        container.appendChild(div);
    });
});

function generateContributionData() {
    const data = [];
    for (let i = 0; i < 365; i++) {
        data.push({
            date: new Date(new Date().setDate(new Date().getDate() - i)),
            level: Math.floor(Math.random() * 5)
        });
    }
    return data;
}
