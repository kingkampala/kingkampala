const fs = require('fs');
const axios = require('axios');

const username = 'kingkampala';
const repository = 'kingkampala';

async function updateBadge() {
  try {
    const response = await axios.get(`https://api.github.com/repos/kingkampala/kingkampala`);
    const totalPullRequests = response.data.pull_requests;

    const badgeContent = `![Total Pull Requests](https://img.shields.io/badge/Total%20PRs-${totalPullRequests}-blue)`;

    fs.writeFileSync('README.md', fs.readFileSync('README.md', 'utf-8').replace(/!\[Total Pull Requests\]\(.+?\)/, badgeContent));

    console.log('PR badge updated successfully.');
  } catch (error) {
    console.error('Error updating PR badge:', error.message);
  }
}

updateBadge();
